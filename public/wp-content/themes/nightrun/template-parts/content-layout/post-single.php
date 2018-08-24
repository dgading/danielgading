<?php
/**
 * Template part for displaying a single post.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package nightrun
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('post-single'); ?> >
	<div class="post-inner">
	<header class="entry-header">
		<?php
    the_title( '<h1 class="entry-title">', '!</h1>' );
    ?>
    <div class="entry-meta">
      <?php
      nightrun_posted_on();
      ?>
    </div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
		the_content( );
		?>
	</div><!-- .entry-content -->

	<!-- <footer class="entry-footer"> -->
		<?php
		// nightrun_entry_footer();
		?>
	<!-- </footer>  .entry-footer -->
		</div>
</article><!-- #post-<?php the_ID(); ?> -->
