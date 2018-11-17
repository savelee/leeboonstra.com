<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package ladysigndevs
 */
?>

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" <?php language_attributes(); ?>>
<!--<![endif]-->
    <head>

        <?php
        if ( ! function_exists( '_wp_render_title_tag' ) ) {
            function theme_slug_render_title()
            {
                ?>
                <title>
                    <?php wp_title( '|', true, 'right' ); ?>
                </title>
                <?php
            }
            add_action( 'wp_head', 'theme_slug_render_title' );
        }
        ?>

        <meta name="robots" content="all" />
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="google-site-verification" content="jv8JHFCeqmxANKM3mXBtnW1KMtnYR2HJbTh60FEO9eE" />
        <meta name="author" content="Lee Boonstra">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="640">

        <link type="img/ico" rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon.ico" >
        <link  href="//plus.google.com/117712452932146916020" rel="author" />
        <link rel="image_src" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/img/screen.jpg" />
        <link rel="profile" href="//gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/main.css" />
        <link rel="canonical" href="https://www.leeboonstra.com" />
        <link rel="manifest" href="https://www.leeboonstra.com/manifest.json" />

        <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/js/allscripts.js" as="script" />
        <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/css/main.css" as="style" />


	    <?php wp_head(); ?>


        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />

        <!--[if IEMobile]><meta http-equiv="cleartype" content="on" /><![endif]-->

        <style>
            body{color:#333;font-family:'Roboto';font-size:16px;line-height:24px}a,a:visited{color:#1565C0}h1,h2,h3,h4,h5,h6{font-family:Oswald,Impact}
        </style>
    </head>
    <?php flush(); ?>
	<body <?php body_class(); ?>>

	<!--[if lt IE 7]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    <header>
    <nav id="navbar" class="navbar navbar-inverse navbar-fixed-top">

        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
          <a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
        </div>

          <div role="navigation" class="nav-collapse in collapse">

              <?php

              $defaults = array(
              	'theme_location'  => '',
              	'menu'            => '',
              	'container'       => '',
              	'container_class' => '',
              	'container_id'    => '',
              	'menu_class'      => 'menu-main',
              	'menu_id'         => '',
              	'echo'            => true,
              	'fallback_cb'     => 'wp_page_menu',
              	'before'          => '',
              	'after'           => '',
              	'items_wrap'      => '<ul class="nav nav navbar-nav">%3$s</ul>',
              	'depth'           => 0,
              	'walker'          => ''
              );

              wp_nav_menu( $defaults );

              ?>
              <?php get_search_form(); ?>
        </div>

  </nav>
  </header>
 	<main class="container-fluid">
        <div id="page" class="col-sm-8">

            <?php if ( is_search() || is_front_page() ) : ?>

            <?php dynamic_sidebar( 'sidebar-jumbotron' ); ?>

            <?php else : ?>
            <div class="row blue"></div>
            <?php endif; ?>
            <?php
            /**
             * CONTENT HERE
             */
            ?>
