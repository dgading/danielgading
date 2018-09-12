<?php
/**
 * Template part for displaying header
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package nightrun
 */

?>

<header id="masthead" class="site-header">
		<div class="site-header__branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-header__title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-header__title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$nightrun_description = get_bloginfo( 'description', 'display' );
			if ( $nightrun_description || is_customize_preview() ) :
				?>
				<p class="site-header__description"><?php echo $nightrun_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
			<svg class="site-header__decoration site-header__decoration--back" height="250" width="450">
  			<polygon points="15,45 75,200 380,110" style="fill:rgba(0,0,0,0);stroke:#FF6C11;stroke-width:10;" />
			</svg>
			<svg class="site-header__decoration site-header__decoration--front" height="250" width="450">
  			<polygon points="105,25 115,210 350,80" style="fill:rgba(0,0,0,0);stroke:#609AAF;stroke-width:10" />
			</svg>
		</div><!-- .site-branding -->
	</header><!-- #masthead -->