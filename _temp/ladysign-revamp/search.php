<?php
/**
 * The template for displaying Search Results pages
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

	<div class="row post">
			<h1><?php printf( __( 'Search Results for: %s', 'twentythirteen' ), get_search_query() ); ?></h1>
	</div>
	
		<?php if ( have_posts() ) : ?>

			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', get_post_format() ); ?>
			<?php endwhile; ?>

		<?php else : ?>

			<form style="margin-top: 5px;" role="search" action="/" method="get" class="search-form ">
				<label>
					<div class="form-label">
					Search:
					</div>
					<input type="search" placeholder="Search..." name="s" title="Search for:">
				</label>
				<button class="btn btn-default" type="submit" tabindex="7">Search</button>	
			</form>

		<?php endif; ?>

<?php get_footer(); ?>