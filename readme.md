# Sintagma website

Hello! This is the official repository for [Sintagma](https://sintagma.pt)'s website. This is not a deployable repository, but it is used for version control.

This document is to help document (huh) how this website was built and is maintained — for my personal benefit and for anyone else who might work on it.


## Contents

This website consists of a single page comprised of:

* index.html
* style.css
* sintagma.js
* A few additional dependencies, listed below.

The code was written in a way that is meant to be straightforward and easy to understand. There is plenty of documentation inside the code that will help you easily navigate the files if you're tasked with updating the website.


## Widgets and services in use

* [jQuery](https://jquery.com/), to simplify usage of JavaScript for page manipulation, event handling, and animation.
* [Slick](https://kenwheeler.github.io/slick/), to help manage and render carousels.
* [jquery.localizationTool.js](https://github.com/darksmo/jquery-localization-tool), to support different languages.
* [Wistia](https://wistia.com/), for video embeds. Video content resides on an account that is owned and managed by Sintagma.
* [El Formo](https://www.elformo.com), to manage form submissions and redirect them to an @sintagma.pt email address. Account is owned and managed by Sintagma.
* [Hamburgers CSS](https://jonsuh.com/hamburgers), to easily animate the hamburger icon.
* [Normalize CSS](git.io/normalize), to normalise styling across all browsers.
* [Adobe Fonts](https://fonts.adobe.com/), to serve the official Sintagma brand font — Azo Sans.


## Header carousel

The film / show poster carousel was designed in a way to make it easy to update the images without having to make any changes to the code.

This carousel is designed to accept and display images in any resolution, as long as they're PNG files and have the correct file names. 


## How to add translations

Translations are located in the js/sintagma-translations.js file.

Individual strings to be translated are identified via a class. That class is recollected on the JS file and then a translation is provided for all languages supported (currently Portuguese and English, but code is ready for French and Spanish support, too).

