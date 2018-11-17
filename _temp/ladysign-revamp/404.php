<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>
<div class="row post">
	<h1>404 <?php _e( 'Not Found', 'twentythirteen' ); ?></h1>

	<p><?php _e( 'This is somewhat embarrassing, isn&rsquo;t it?', 'twentythirteen' ); ?></p>
	<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'twentythirteen' ); ?></p>
</div>
<div class="row post">
	<form role="search" method="get" class="search-form">
      <input type="search" placeholder="Search..." name="s" title="Search for:">
      <button class="btn btn-primary" type="submit" tabindex="7">Search</button>  
    </form>
</div>

<?php get_footer(); ?>