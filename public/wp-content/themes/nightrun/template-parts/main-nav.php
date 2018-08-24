<?php
/**
 * Template part for displaying the main navigation.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package nightrun
 */

?>

<nav id="site-navigation" class="main-navigation menu-closed">
  <button class="menu-toggle closed" id="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'nightrun' ); ?></button>
  <?php
  wp_nav_menu( array(
    'theme_location' => 'menu-1',
    'menu_id'        => 'primary-menu',
    'walker'         => new Svg_Walker()
  ) );
  ?>
</nav><!-- #site-navigation -->