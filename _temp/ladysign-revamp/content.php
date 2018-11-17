
	<?php if ( is_search() || is_category() || is_front_page() ) : ?>

	<article class="row post">

	    <div class="media-post">
			<h1><?php the_title(); ?></h1>

			<div class="newcal">
				Posted on <strong><time datetime="<?php the_time('Y') ?>-<?php the_time('m') ?>-<?php the_time('d') ?>"><?php the_time('j') ?> <?php the_time('M') ?> <?php the_time('Y') ?></time></strong> in
				<span class="badge"><?php the_category('</span> <span class="badge">') ?></span>
			</div>

			<?php the_excerpt(); ?>
		</div>

		<a role="button" class="btn btn-primary" href="<?php echo get_permalink(); ?>">Read more &raquo;</a>

	<?php else : ?>
	<article class="row post entry-post">

	    <div class="media-post">

			<?php if ( ! is_front_page() ) : ?>
				<?php dynamic_sidebar( 'social' ); ?>
			<?php endif; ?>

			<h1><?php the_title(); ?></h1>

			<div class="newcal">
				Posted on <strong><time datetime="<?php the_time('Y') ?>-<?php the_time('m') ?>-<?php the_time('d') ?>"><?php the_time('j') ?> <?php the_time('M') ?> <?php the_time('Y') ?></time></strong> in
				<span class="badge"><?php the_category('</span> <span class="badge">') ?></span>
			</div>

		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentythirteen' ) ); ?>


		<!--<h3>Related Posts</h3>-->
		<?php
		//echo do_shortcode( '[related_post themes="text" id="'.get_the_ID().'"]' );
		?>
		</div>
	<?php endif; ?>

	<div class="entry-meta">
		<?php if(current_user_can('administrator')) :?>
		<a role="button" class="btn btn-default" href='<?php echo get_edit_post_link(); ?>'>
		Edit</a>
		<?php endif; ?>

		<?php if ( comments_open() && ! is_single() ) : ?>
		<small><i><?php comments_number( 'No comments', 'One comment', '% comments' ); ?></i></small>
		<?php endif; ?>

	</div>
	<div class="socialbar">
		<?php if ( ! is_front_page() ) : ?>
			<?php dynamic_sidebar( 'social' ); ?>
		<?php endif; ?>
	</div>

</article>

<?php dynamic_sidebar( 'socials' ); ?>

<?php comments_template( '', true ); ?>
