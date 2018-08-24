<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package nightrun
 */

?>
	<?php
		if ( 'post' === get_post_type() ) :
			if ( is_singular() ) :
				get_template_part( 'template-parts/content-layout/post', 'single' );
			else :
				get_template_part( 'template-parts/content-layout/post', 'teaser' );
			endif;
		endif; 
	?> <!-- End Multiple Posts -->

