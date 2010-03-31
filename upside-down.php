<?php
/*
Plugin Name: Upside Down WordPress
Plugin URI: http://redecs.net/
Description: This plugin allows to "flip" your entire WordPress blog
Version: 1.0 (cross your finger and hope it works edition)
Author: Mihai Nica (redecs)
Author URI: http://redecs.net/
*/
add_action('template_redirect', 'upside_down');
 
function upside_down() {
	wp_enqueue_script('upside', plugins_url('utils.js', __FILE__), array('jquery'), '1.0', true);
}
?>