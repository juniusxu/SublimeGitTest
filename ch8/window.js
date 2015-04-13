/**
 * test windows.js
 * @authors Your Name (you@example.org)
 * @date    2015-04-13 17:00:25
 * @version $Id$
 */
var leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
var rightPos=(typeof window.screenTop=="number")?window.screenTop:window.screenY;
alert(leftPos);
alert(rightPos);