<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

<?php /* The loop */ ?>
<?php while ( have_posts() ) : the_post(); ?>
<div class="row post pages">
	<span class="pull-left">
		<?php echo get_avatar( get_the_author_meta('ID'), 80 ); ?>
	</span>
	<div class="media-body">
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<div class="newcal">
			Posted on <b class="d"><?php the_time('j') ?></b> <b class="m"><?php the_time('M') ?></b> <b class="m"><?php the_time('Y') ?></b> in 
			<span class="badge"><?php the_category('</span> <span class="badge">') ?></span>
		</div>
		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentythirteen' ) ); ?>
	</div>
</div>
<?php endwhile; ?>

<?php if(is_page( 'links' )){ ?>
	<div class="row page post">
		<?php dynamic_sidebar( 'links' ); ?>
	</div>
<?php } if(is_page( 'contact' )){ ?>
	<div class="row page post">
		<?php dynamic_sidebar( 'forms' ); ?>
	</div>
<?php } ?>

<?php get_footer(); ?>