<?php 
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
//Error :Request header field Content-Type is not allowed by Access-Control-Allow-Headers
//https://stackoverflow.com/questions/12409600/error-request-header-field-content-type-is-not-allowed-by-access-control-allow
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
global $post;
$jscode = get_post_meta( $post->ID, '_wpwebmaps_cf_' . 'custom-js-code', true );
echo $jscode;