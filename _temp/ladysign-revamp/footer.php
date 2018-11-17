<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package ladysigndevs
 */
?>

<div class="paginators">
	<?php bootstrap_pagination();?>
</div>
</div>

    <aside id="sidebar" class="col-sm-offset-8">

					<?php if ( is_active_sidebar( 'sidebar-profile' ) ) { ?>

                    <?php if (is_front_page()) { ?>


					<div class="mysidebar">

							<div class="profile">
	                <span class="headshot">
	                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/profile2.jpg" class="img-responsive" alt="Lee Boonstra">
	                </span>

	                <strong><a href="https://plus.google.com/117712452932146916020/" rel="author me" target="_blank">Lee Boonstra</a></strong>

				 <?php dynamic_sidebar( 'sidebar-profile' ); ?>
	            </div>
                <?php } else { ?>

					<div style="display:block; margin-top: 100px"></div>

                <?php } ?>
						</div>
					<?php } else { ?>
						<span style="margin-top: 100px; display: block;"></span>
					<?php }?>
            <?php dynamic_sidebar( 'sidebar-0' ); ?>


          <?php if(is_page( 'links' ) == false && is_page( 'about' ) == false && is_page( 'contact' ) == false){ ?>
            <?php dynamic_sidebar( 'sidebar-1' ); ?>
          <?php } ?>

          <?php if(is_front_page()==true){ ?>
          <?php dynamic_sidebar( 'sidebar-2' ); ?>
          <?php } ?>

          <?php if(is_page( 'about' ) == false && is_page( 'contact' ) == false){ ?>
          <?php dynamic_sidebar( 'sidebar-3' ); ?>
          <?php } ?>

	  </aside>
    </main>
	<footer>
    <div class="container jumbofooter">
        <div class="col-sm-4"><?php dynamic_sidebar( 'footerbar-1' ); ?></div>
        <div class="col-sm-4"><?php dynamic_sidebar( 'footerbar-2' ); ?></div>
        <div class="col-sm-4"><?php dynamic_sidebar( 'footerbar-3' ); ?></div>
    </div>
    <div class="container copyright">&copy; Ladysign 2016</div>
</footer>

<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/allscripts.js"></script>

	  <script async type="text/javascript">
	  if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
            // Registration was successful
            //console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            //console.log('ServiceWorker registration failed: ', err);
        });
        }
      </script>
	  <script async type="text/javascript">
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-85081556-1', 'auto');
	  ga('send', 'pageview');

	  </script>

    </body>
</html>
