=== WP Web Maps ===
Author: pjhooker
Author URI: https://www.cityplanner.biz/
Plugin URI: https://wordpress.org/plugins/wp-web-maps/
Contributors: pjhooker
Donate link: https://www.paypal.me/pjhooker
Tags: leaflet, map, mobile, javascript, openstreetmap, mapquest, interactive
Requires at least: 4.6
Tested up to: 5.4.2
Version: 0.1.4
Stable tag: 0.1.4
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Interactive maps and markers on your posts and pages with simple shortcodes.

== Description ==

Add a map generated with [LeafletJS](http://leafletjs.com/): an open-source JavaScript library for mobile-friendly interactive maps. Map tiles are provided by default through [GoogleMaps](https://www.google.com/maps).

= Maps =

Simply create a **map** with:

`[webmap]` or `[webmap  wpwebmapsID="9482"]`

= More =
In the sidebar of Admin dashboard you can see a new posts type menù called Web Maps.

Here you can add all maps that you want.

In this Web Maps post type, there is a custom field, where you can place a custom JS code like these examples [WpWebMaps example code](https://github.com/pjhooker/wp-web-maps/tree/master/example).

For insert any Web Maps in your post, you can add shortcode like this `[webmap  wpwebmapsID="9482"]`, where the number 9482 is the id of custom post.

== Installation ==

1. Choose to add a new plugin, then click upload
2. Upload the wp-web-maps zip
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Use the shortcodes in your pages or posts: e.g. `[webmap]`

== Frequently Asked Questions ==

= Can I have an SVG Marker? =

No!.

== Screenshots ==

1. Put the shortcode into the post.

== Changelog ==

= 0.2.0 =
* Add CPType and Custom Field. Add CPType Web Maps; add custom field for insert JS code. add attributes to shortcode for get custom JS code form single Web Map; update readme.

= 0.1.4 =
* First Version. Basic map creation and marker creation.

== Upgrade Notice ==

= 0.1.4 =
First Version. Tested with 5.4.2.
