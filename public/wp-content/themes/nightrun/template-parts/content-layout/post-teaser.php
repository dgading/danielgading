<?php
/**
 * Template part for displaying teaser layout of posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package nightrun
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('post-teaser'); ?>>
	<div class="post-inner">
	<header class="entry-header">
    <?php
    the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
    ?>
    <div class="entry-meta">
    <?php
    nightrun_posted_on();
    ?>
    </div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
		the_excerpt( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'nightrun' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) );

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'nightrun' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<!-- <footer class="entry-footer"> -->
		<?php
		// nightrun_entry_footer();
		?>
	<!-- </footer>  .entry-footer -->
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
