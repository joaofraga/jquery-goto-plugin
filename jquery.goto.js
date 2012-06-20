/*
 * Soft scroll the window determinated DOM object
 *
 * @author João Fraga - me[at]joaofraga[dot]com
 * @param buffer int - size in pixels to create a space at the scroll
 * @param speed string/int - speed of scroll easing
 * @param callback function - function at callback
 *
 * Example utilization:
 *
 * $('.foo').click(function(){
 *   $('.bar').goTo();
 * })
 *
 *
 */

jQuery.fn.goTo = function( buffer, speed, callback ) {

    if( typeof buffer === "undefined" ){
        buffer = 0;
    }

    if( typeof speed === "undefined" ){
        speed = "slow";
    }

    var x = $(this).offset().top - buffer;
    var executed = false;
    $('html, body').animate({scrollTop:x}, speed, null, function(){
      if( typeof callback === 'function' && !executed) {
        callback();
        executed = true;
      }

    });

    return true;

};
