<?php
/*
  Plugin Name: Project Post Type
  Description: Adds a Project Post type to showcase things I made.
*/

function create_project_post_type() {
  register_post_type('project', array(
    'labels' => array(
      'name' => __('Projects'),
      'singular_name' => __('Product'),
    ),
    'public' => true,
    'has_archive' => true,
    'rewrite' => array('slug' => 'projects'),
    'show_in_rest' => true,
  ));
}

add_action('init', 'create_project_post_type');

add_filter('single_template', 'project_custom_template');

function project_custom_template($single_template) {
  global $post;
  if ($post->post_type == 'project') {
    if (file_exists(plugin_dir_path( __FILE__ ) . 'project-template.php')) {
      $single_template = plugin_dir_path( __FILE__ ) . 'project-template.php';
    }
  }
  return $single_template;
}
