audio-flat
==========

A flat replacement for the standard HTML5 &lt;audio> tag.

![screenshot](https://raw.githubusercontent.com/OfficeHoursAM/audio-flat/master/screenshot.png)

To use, simply link to the CSS and JS files in your `<head>`

    <link rel="stylesheet" href="audio-flat.css" type="text/css"/>
    <script src="audio-flat.js"></script>

and add `audio-flat`-classed `<div>`s to your DOM, using this structure.

    <div class="audio-flat" src="happy.m4a">
        <a class="play" id="play-pause"></a>
        <input type="range" id="seek" value="0"/>
        <span id="duration">00:00</span>
    </div>
