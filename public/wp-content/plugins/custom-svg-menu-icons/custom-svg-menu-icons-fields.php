<?php
/**
 * Proof of concept for how to add new fields to nav_menu_item posts in the WordPress menu editor.
 * @author Weston Ruter (@westonruter), X-Team
 */
add_action( 'init', array( 'XTeam_Nav_Menu_Item_Custom_Fields', 'setup' ) );
class XTeam_Nav_Menu_Item_Custom_Fields {
	static $options = array(
		'item_tpl' => '
			<p class="additional-menu-field-{name} description description-thin">
				<label for="edit-menu-item-{name}-{id}">
					{label}<br>
					<input
						type="{input_type}"
						id="edit-menu-item-{name}-{id}"
						class="widefat code edit-menu-item-{name}"
						name="menu-item-{name}[{id}]"
						value="{value}">
				</label>
			</p>
		',
	);
	static function setup() {
		if ( !is_admin() )
			return;
		$new_fields = apply_filters( 'xteam_nav_menu_item_additional_fields', array() );
		if ( empty($new_fields) )
			return;
		self::$options['fields'] = self::get_fields_schema( $new_fields );
		add_filter( 'wp_edit_nav_menu_walker', function () {
			return 'XTeam_Walker_Nav_Menu_Edit';
		});
		//add_filter( 'xteam_nav_menu_item_additional_fields', array( __CLASS__, '_add_fields' ), 10, 5 );
		add_action( 'save_post', array( __CLASS__, '_save_post' ), 10, 2 );
	}
	static function get_fields_schema( $new_fields ) {
		$schema = array();
		foreach( $new_fields as $name => $field) {
			if (empty($field['name'])) {
				$field['name'] = $name;
			}
			$schema[] = $field;
		}
		return $schema;
	}
	static function get_menu_item_postmeta_key($name) {
		return '_menu_item_' . $name;
	}
	/**
	 * Inject the 
	 * @hook {action} save_post
	 */
	static function get_field( $item, $depth, $args ) {
		$new_fields = '';
		foreach( self::$options['fields'] as $field ) {
			$field['value'] = get_post_meta($item->ID, self::get_menu_item_postmeta_key($field['name']), true);
			$field['id'] = $item->ID;
			$new_fields .= str_replace(
				array_map(function($key){ return '{' . $key . '}'; }, array_keys($field)),
				array_values(array_map('esc_attr', $field)),
				self::$options['item_tpl']
			);
		}
		return $new_fields;
	}
	/**
	 * Save the newly submitted fields
	 * @hook {action} save_post
	 */
	static function _save_post($post_id, $post) {
		if ( $post->post_type !== 'nav_menu_item' ) {
			return $post_id; // prevent weird things from happening
		}
		foreach( self::$options['fields'] as $field_schema ) {
			$form_field_name = 'menu-item-' . $field_schema['name'];
			// @todo FALSE should always be used as the default $value, otherwise we wouldn't be able to clear checkboxes
			if (isset($_POST[$form_field_name][$post_id])) {
				$key = self::get_menu_item_postmeta_key($field_schema['name']);
				$value = stripslashes($_POST[$form_field_name][$post_id]);
				update_post_meta($post_id, $key, $value);
			}
		}
	}
}
// @todo This class needs to be in it's own file so we can include id J.I.T.
// requiring the nav-menu.php file on every page load is not so wise
require_once ABSPATH . 'wp-admin/includes/nav-menu.php';
class XTeam_Walker_Nav_Menu_Edit extends Walker_Nav_Menu_Edit {
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		$item_output = '';
		parent::start_el($item_output, $item, $depth = 0, $args = array(), $id = 0);
		// Inject $new_fields before: <div class="menu-item-actions description-wide submitbox">
		if ( $new_fields = XTeam_Nav_Menu_Item_Custom_Fields::get_field( $item, $depth, $args ) ) {
			$item_output = preg_replace('/(?=<div[^>]+class="[^"]*submitbox)/', $new_fields, $item_output);
		}
		$output .= $item_output;
	}
}
// Somewhere in config...
add_filter( 'xteam_nav_menu_item_additional_fields', 'nightrun_menu_item_additional_fields' );
function nightrun_menu_item_additional_fields( $fields ) {
	$fields['color'] = array(
		'name' => 'color',
		'label' => __('Color', 'xteam'),
		'container_class' => 'link-color',
		'input_type' => 'color',
	);
//https://code.tutsplus.com/articles/attaching-files-to-your-posts-using-wordpress-custom-meta-boxes-part-1--wp-22291
//wp_upload_bits( string $name, null|string $deprecated, mixed $bits, string $time = null )
	$fields['svg'] = array(
		'name' => 'svg_file',
		'label' => __('SVG', 'svg_x'),
		'container_class' => 'svg-file',
		'input_type' => 'file',
	);
	
	return $fields;
}

class Svg_Walker extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
		var_dump( get_post_meta($item->ID, $key="_menu_item_color") );
			$object = $item->object;
    	$type = $item->type;
    	$title = $item->title;
    	$description = $item->description;
    	$permalink = $item->url;
		$output .= "<li class='" .  implode(" ", $item->classes) . "'>";
		
    $output .= '<a href=' . $permalink . '>';
    if( $description != '' ) {
			$output .= file_get_contents(get_template_directory() . '/assets/' . $description );
		}
    
    $output .= '<span>' . $title . '</span>';
		$output .= '</a></li>';
	}
}

