# The Drupal 8 Theming guide

Hi, my name is Sander. I'm a web developer from Belgium.

If you ever want to get in touch, feel free to contact me.

- [Drupal.org](https://www.drupal.org/u/sqndr)
- [Twitter](http://twitter.com/sqndr)

![With more than 200 new features and improvements, the upcoming release of the world’s leading open source web content management platform will win you over.](https://www.drupal.org/sites/all/modules/drupalorg/drupalorg/images/d8.svg)

## Introduction

Drupal 8 is going to be a huge change for the entire community. In order to get front-end developers ready for Drupal 8, I started this theming guide. It contains an overview of how you can build a Drupal 8 theme, using modern front-end tools. If you find any mistakes or outdated documention, feel free to add a pull request.

## Table of content

[@todo: Add table of content]

## Some major changes

Let's kick of with some major changes that you, as a Drupal themer, must be aware of. This is especially useful if you've been involved in Drupal 7 theming in the past.

- The markup in Drupal 8 is now [HTML5](http://buytaert.net/html5-in-drupal-8). New tags like `header`, `nav`, `article` are used in core. 

- [WAI-ARIA Roles](https://www.drupal.org/node/1179668) are added. There are a set of roles, states, and properties, which can be applied to markup to provide rich semantics, increasing accessibility and interoperability. Although WAI-ARIA properties were not valid in xhtml 1.0, they are valid in HTML5, and can therefore be applied in the markup of Drupal 8. By using the role attribute with an HTML element, authors can provide more information about the purpose of components on the page.

- `<DIV ID="BAD-PRACTICE">...</DIV>` Drupal 8 now has 75% less ID's than the Drupal 7 CSS! 

- [The CSS Structure](https://www.drupal.org/node/1887918) is based on SMACSS & BEM.

- [Drupal is now about of the box responsive and mobile ready.](https://groups.drupal.org/mobile/drupal-8)  
This is of course a huge deal. Drupal is now out-of-the-box mobile friendly. 

- [The default settings and config are changed to be fast and safe production values.](https://www.drupal.org/node/2259531)  
As a themer, this is important because in a default Drupal 8 installation, CSS and JS aggregation is enabled. On your local development environment, you "might" want to disable this.

- [A completely new theme/template system: Twig](https://www.drupal.org/node/1831138)
Twig is a completely new theme/template system. This means `theme_*` functions and PHP-based `*.tpl.php` files have been completely replace in D8.

- [Drupal 8 does not support browsers that do not support SVG](https://www.drupal.org/node/2298227)
Drupal 8 uses SVG in place of PNG to provide resolution independent icons in the admin UI. No effort is made to cater for browsers that do not support SVG. This includes IE8 and below and Android Browser 2.3 and below.

- [An new, empty core theme](https://www.drupal.org/node/2289511)
Read more on *classy*, a new core theme below. 

![MortenDK appoves](http://mortendk.github.io/drupal8-twig-frankfurt-2014/images/cssfilename-approved.jpg)

## Drupal core themes

Drupal core themes live inside `core/themes`. Inside this folder we can find the three Drupal 8 core themes:  

- **bartik**: *A flexible, recolorable theme with many regions and a responsive, mobile-first layout.*
- **seven**: *The default administration theme for Drupal 8 was designed with clean lines, simple blocks, and sans-serif font to emphasize the tools and tasks at hand.*
- **stark**: *An intentionally plain theme with almost no styling to demonstrate default Drupal’s HTML and CSS.*

You might remember these three themes from Drupal 7. But wait, there's more ...

- **classy**: [[meta] Results of Drupalcon Austin's Consensus Banana](https://www.drupal.org/node/2289511): At DrupalCon Austin (2014) the need for a new core theme came up.

### Bartik

*Bartik* was introduced in Drupal 7 as a new, clean and simple theme. The theme has some new cool features in Drupal 8 and is also completely responsive. 

![Bartik screenshot](https://raw.githubusercontent.com/sqndr/d8-theming-guide/master/img/bartik.png)

### Seven

*Seven* was also introduced in Drupal 7. It is the default administrative theme. The theme was created to improve the Drupal 7 user experience.

> For Drupal 8, [a style guide for Seven](https://groups.drupal.org/node/283223) was introduced.

> A sad thing about the style guide was that the font (Source Sans) could not make it into core [due to licence issues](https://www.drupal.org/node/1986082). The default font family used in the Seven (and Bartik theme) is **Lucida Grande**. Sadly the style guide never got an update. The licencing issue is still a thing. If you want to get involed, jump over to [https://www.drupal.org/node/2010902](https://www.drupal.org/node/2010902)

![Seven screenshot](https://raw.githubusercontent.com/sqndr/d8-theming-guide/master/img/seven.png)

### Stark

*Stark* is core theme that demonstrates Drupal's default markup. It does not contain any template files, so it outputs the layout that come straight out of other (core) modules. This is of course very useful for a developer:
- you can code against Stark when writing CSS for modules
- as a theme developer, you can check against Stark, to see if a layout issue comes from the theme or another module.

![Stark screenshot](https://raw.githubusercontent.com/sqndr/d8-theming-guide/master/img/stark.png)

### Classy

At DrupalCon Austin (2014) the need for a new core theme came up. Here's a brief overview of the meta issue:

> *Create a new core theme (code name "classy") that contains a copy of the all current core template files; this is for the "sensible 2/3" camp. And then modify all of the core/modules template files to contain minimal classes (only those needed for functionality); this would be for the "clean 1/3" camp. To ensure that Seven and Bartik continue to function properly, they should use "classy" as their base theme.*

Classy will be a `base theme` which *Bartik* and *Seven* will extend from.


### Coding standards

It's important to know and follow the Drupal coding standards, especially when you want to get involved into Drupal core (theme) development. Yet, it's might be useful as well to follow these standards in your own projects.

There are coding standards for css, javascript and the new Twig template engine:

- [CSS Coding standards](https://www.drupal.org/node/1886770).
- [Javascript Coding standards](https://www.drupal.org/node/172169).
- [Twig Coding standards](https://www.drupal.org/node/1823416).

## Theme engines

Inside the `core/themes` lives a fourth folder (besides `bartik`, `seven` and `stark`), called `engines`. This folder contains the theme engines. In Drupal 8, the default template engine is **Twig**. 

### What is a theme engine?

A theme engines (template engine, template processor or template parser) is a software components that **combines data with templates** from themes and shows the result - the final HTML - to the user.

![Template Engine image from Wikipedia](http://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TempEngGen015.svg/440px-TempEngGen015.svg.png)

### Twig

Twig is a completely new theme/template system. This means all of the `theme_*` functions and PHP Temmplate based `*.tpl.php` files have been completely replace in Drupal 8. Template files now have a new (Twig) extension, `*.html.twig`. 

[This is the official change record](https://www.drupal.org/node/1831138).

#### Advantages

- Twig is more secure, due to the fact that only a number of tags can be used. In the previous PHPTemplate, it was possible for a template file to execute the following code:

		<?php
		  db_query('DROP TABLE {users}');
		?>
	
  This should of course not be the case.

- There now is a clear separation between the *logic* and the *view*. The means: no more PHP code inside your template files. 
- The syntax is very easy to understand, making the code more readable as well. Also, many IDE's have syntax highlighting for `*.twig` files.
- Template files are reusable, thanks to [Twig includes](http://twig.sensiolabs.org/doc/tags/include.html).
- Twig is very well documented. Go ahead and [start reading the official documentation here](http://twig.sensiolabs.org/documentation).
- It's not only used in Drupal core, so it's no a Drupaly-thing. 

#### Disadvantage

- Although the syntax is very easy to read and understand, it's a new syntax you have to learn before getting started.
- ...

## The themes directory

All right. Now is the time to get really excited. We're about to create a Drupal 8 theme. The question that raises is: where should this theme be located, where should I put the files?

> If you're familiar with Drupal 7 theming, the first place for you to look at would be `drupal/sites/all/themes/{custom/}` (this was the place where all your custom themes lived in Drupal 7).

In Drupal 8, this location has changed. Custom and contrib themes now live in `drupal/themes/{custom}`. Also notice how custom and contrib modules now live inside `drupal/modules` (insted of drupal/sites/all/modules/).

> Did you notice {*custom*}? It's always a good practice to separate the contrib themes (the one's you've been downloading from d.o) and the ones you've written yourself. This can simply be done by creating two folders inside the `themes` directory:

> `contrib`: for contrib themes  
> `custom`: for custom themes  

## Creating an info file

### A simple .info.yml file

Again, if you're familiar with Drupal 7 theming, you're first idea might be to start with creating an `.info` file. In Drupal 8, `.info` files are replaced by `.info.yml` files ([read the change record](https://www.drupal.org/node/1935708)). These files are parsed using the Symphony YAML Component. This change also applies for modules and profiles. They both require a `.info.yml` now, instead of the old `.info` file.

	name: Example Theme
	
Fairly simple. This is the name of your theme. It's the name that also appears on the *Appearance* page, where you can activate the name.
	
	description: 'An example D8 theme.'

A theme description, also displayed on the *Appearance* page.

	package: Custom
	
The package in which your theme lives.
	
	type: theme

Since the `info.yml` files are used for themes, modules and profiles, this line lets Drupal know what it's dealing with.
	
	version: 1.0

The version of your theme. 	
	
	core: 8.x
	
The version of Drupal core the theme requires.

##### *.info.yml

To wrap things up, this is our `.info.yml` file so far:

	name: Example Theme
	description: 'An example D8 theme.'
	package: Custom
	type: theme
	version: 1.0
	core: 8.x
	
Save this as `{theme_name}.info.yml` inside the created custom theme directory (`themes/custom/example/example.info.yml`). The theme is now displayed in `admin/appearance`. You can now enable the theme. Hooray!
  		    
#### Adding a screenshot

When navigation to the appearance page, you might notice a *no screenshot* image for our theme. This is because no screenshot has been found (duh!). A screenshot is automatically detected and displayed if the filename is `screenshot.png`. If we add this file, we would see the screenshot on the appearance page.

Otherwise you can manually add a screenshot with the following line:

	screenshot: otherfilename.png
	
So, the filename of a screenshot does not have to be `screenshot.png`, as long as it is defined in the *info.yml* file.

#### Adding stylesheets

It's of course important to know how to add stylesheets to our theme. Let's add a css file called `styles.css` (`/css/styles.css`) to our theme.

	# Adding styles.css to our theme.
	stlesheets:
		all:
			- css/styles.css
			
> Let's have a look as how the same thing could be achieved in Drupal 7:  
> `stylesheets[all][] = css/style.css`
			
The css file is now added. The `all` keyword stands for the media tag inside the html `link` element that is used to add stylesheets. 

	<link rel="stylesheet" href="[stylesheet]" media="all" />
	
So ... now that you know this, it's very easy to add a print stylesheet to our theme as well:

	# Adding a print stylesheet to our theme.
	stlesheets:
		print:
			- css/print.css
					
Inside the html:
`<link rel="stylesheet" href="[stylesheet]" media="print" />`
	
#### Overriding stylesheets

In Drupal 8, drupal.base.css has been replaced with normalize.css ([see this change record](https://www.drupal.org/node/2168417)). If you want to include a different version of normalize.css, you override this file:

    # Remove a CSS file:​
    stylesheets-override:
     	- normalize.css
 
#### Removing stylesheets

Alternatively, we can completely remove this file. 

    # Remove a CSS file:​
    stylesheets-remove:
     	- normalize.css     	
 	
#### Regions

Regions can be defined using the `regions` tag. Here is an example where 3 regions are defined: a *header*, a *content* and a *footer* region:

	# Regions
	regions:
		header: 'Header'
		content: 'Content'
		footer: 'Footer'

### Libraries and Scripts


> Drupal 8 doesn't load any additional scripts. This means that by default [jQuery is not included](https://www.drupal.org/node/1541860). You have to declare it as a dependency for your script in order to use it. In the early stages of Drupal 8, this was done using `hook_library_info`. Since this was one of the last remaining hooks in Drupal 8, it was [replaced by a `*.libraries.yml` file](https://www.drupal.org/node/2201089).

Let's add a custom script to our theme. The script is location in the `js` folder inside our theme (`/js/custom-script.js`). Next, create a `*.libraries.yml` file. Let's call this `{theme}.libraries.yml`:
	
	base:
	  version: 1.x
	  js:
	    js/custom-script.js: {}
	  dependencies:
	    - core/jquery
	    
Back in our `{theme}.info.yml` file, we add the following lines:

	libraries:
		- example/base

This includes our libraries and their dependencies into our theme. In this example, the custom script as well as the jQuery library are now included in our theme. 

There still is a huge bug: [https://www.drupal.org/node/2273769](https://www.drupal.org/node/2273769)	

## Template files (Twig)

Twig is a PHP-based compiled templating language. When your web page renders, the Twig engine takes the template and converts it into a 'compiled' PHP template which it stores in a protected directory in sites/default/files/php_storage/... The compilation is done once. Template files are cached for reuse and are recompiled on clearing the Twig cache.

### Twig debug

An **awesome** new feature from the Twig engine is the debug tool. It allows you to trace where the template comes from. To enable Twig Debugging, all you have to do is set the `debug` variable in the `twig.config ` to `true`. Navigate to `sites/default/services.yml` to change the it:

	parameters:
  		twig.config:
    		debug: false

### page.html.twig


## Headless Drupal

A new trend, you might have heard by new, is **headless Drupal**.
