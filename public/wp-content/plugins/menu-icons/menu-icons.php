<?php
/**
 * @package Menu Icons
 * @version 1.0
 */
/*
Plugin Name: Menu Icons
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly. When activated you will randomly see a lyric from <cite>Hello, Dolly</cite> in the upper right of your admin screen on every page.
Author: Daniel Gading
Version: 1.0
Author URI: http://danielgading.com
*/

class Svg_Walker extends Walker_Nav_Menu {

	function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
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

?>
