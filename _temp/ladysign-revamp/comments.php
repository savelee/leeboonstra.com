<?php
/**
 * The template for displaying Comments.
 *
 * The area of the page that contains both current comments
 * and the comment form. The actual display of comments is
 * handled by a callback to twentyten_comment which is
 * located in the functions.php file.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?>

<?php if ( post_password_required() ) : ?>
This post is password protected. Enter the password to view any comments.
			</div><!-- #comments -->
<?php
		/* Stop the rest of comments.php from being processed,
		 * but don't kill the script entirely -- we still have
		 * to fully load the template.
		 */
		return;
	endif;
?>

<?php
	// You can start editing here -- including this comment!
?>

<?php if ( have_comments() ) : ?>
<div class="row post comments">
			<h3>Comments</h3>

<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
			<ul class="pager">
  				<li class="previous">
				<?php previous_comments_link('&larr; Older'); ?></li>
				 <li class="next">
				 <?php next_comments_link('Newer &rarr;'); ?></li>
			</ul>
			<!-- .navigation -->
<?php endif; // check for comment navigation ?>

			<ol class="commentlist">
				<?php
					/* Loop through and list the comments. Tell wp_list_comments()
					 * to use twentyten_comment() to format the comments.
					 * If you want to overload this in a child theme then you can
					 * define twentyten_comment() and that will be used instead.
					 * See twentyten_comment() in twentyten/functions.php for more.
					 */
					wp_list_comments( array( 'callback' => 'twentyten_comment' ) );
				?>
			</ol>
<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
			<ul class="pager">
  				<li class="previous">
				<?php previous_comments_link('&larr; Older'); ?></li>
				 <li class="next">
				 <?php next_comments_link('Newer &rarr;'); ?></li>
			</ul>
<?php endif; // check for comment navigation ?>
</div>
<?php else : // or, if we don't have comments:

	/* If there are no comments and comments are closed,
	 * let's leave a little note, shall we?
	 */
	if ( ! comments_open() ) :
?>
<?php endif; // end ! comments_open() ?>

<?php endif; // end have_comments() ?>

<?php if ( 'open' == $post->comment_status ) : ?>
	<div id="respond" class="row">
    	<h3><?php comment_form_title( __('Post a Comment', 'your-theme'), __('Post a Reply to %s', 'your-theme') ); ?></h3>
        <div id="cancel-comment-reply"><?php cancel_comment_reply_link() ?></div>

		<?php if ( get_option('comment_registration') && !$user_ID ) : ?>
       		<p id="login-req"><?php printf(__('You must be <a href="%s" title="Log in">logged in</a> to post a comment.', 'ladysign'),
             get_option('siteurl') . '/wp-login.php?redirect_to=' . get_permalink() ) ?></p>

			<?php else : ?>
            <div class="formcontainer">
            	<form id="commentform" action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post">

				<?php if ( $user_ID ) : ?>
                            <p id="login"><?php printf(__('<span class="loggedin">Logged in as <a href="%1$s" title="Logged in as %2$s">%2$s</a>.</span> <span class="logout"><a href="%3$s" title="Log out of this account">Log out?</a></span>', 'ladysign'),
                                get_option('siteurl') . '/wp-admin/profile.php',
                                 esc_html($user_identity, true),
                                wp_logout_url(get_permalink()) ) ?></p>

				<?php else : ?>

                            <p id="comment-notes"><?php _e('Your email is <em>never</em> published nor shared.', 'ladysign') ?><br/>
                            <?php if ($req) _e('Required fields are marked <span class="required">*</span>', 'ladysign') ?></p>

              				<div id="form-section-author" class="form-section">
                                <div class="form-label"><label for="author"><?php _e('Name', 'ladysign') ?> <?php if ($req) _e('<span class="required">*</span>', 'ladysign') ?></label></div>
                                <div class="form-input"><input role="textbox" id="author" name="author" type="text" value="<?php echo $comment_author ?>" size="30" maxlength="20" tabindex="3" /></div>
              				</div><!-- #form-section-author .form-section -->

              				<div id="form-section-email" class="form-section">
                                <div class="form-label"><label for="email"><?php _e('Email', 'ladysign') ?> <?php if ($req) _e('<span class="required">*</span>', 'ladysign') ?></label></div>
                                <div class="form-input"><input role="textbox" id="email" name="email" type="email" value="<?php echo $comment_author_email ?>" size="30" maxlength="50" tabindex="4" /></div>
              				</div><!-- #form-section-email .form-section -->

              				<div id="form-section-url" class="form-section">
                                <div class="form-label"><label for="url"><?php _e('Website', 'ladysign') ?></label></div>
                                <div class="form-input"><input role="textbox" id="url" name="url" type="url" value="<?php echo $comment_author_url ?>" size="30" maxlength="50" tabindex="5" /></div>
              				</div><!-- #form-section-url .form-section -->

				<?php endif /* if ( $user_ID ) */ ?>

              	<div id="form-section-comment" class="form-section">
                	<div class="form-label"><label for="comment"><?php _e('Comment', 'ladysign') ?></label></div>
                    	<div class="form-textarea"><textarea role="textbox" id="comment" name="comment" cols="45" rows="8" tabindex="6"></textarea></div>
              		</div><!-- #form-section-comment .form-section -->

					<?php do_action('comment_form', $post->ID); ?>

              		<button role="button" class="btn btn-primary" name="submit" type="submit" tabindex="7">Submit</button>
             		<input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" />

					<?php comment_id_fields(); ?>


                </form>
            </div>
	<?php endif /* if ( get_option('comment_registration') && !$user_ID ) */ ?>
	</div>
</div>
<?php endif; // end have_comments() ?>
