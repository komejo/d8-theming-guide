# The Drupal 8 Theming guide

Hi, my name is Sander. I'm a web developer from Belgium.

If you ever want to get in touch, feel free to contact me.

- [Drupal.org](https://www.drupal.org/u/sqndr)
- [Twitter](http://twitter.com/sqndr)

![With more than 200 new features and improvements, the upcoming release of the world’s leading open source web content management platform will win you over.](https://www.drupal.org/sites/all/modules/drupalorg/drupalorg/images/d8.svg)

## Typos

Since this text is constantly in progress - it still contains (a lot) of typos. Sorry about that :)

## Demo code

Recently, I've added some example code in the repo to get you started. The example theme can be found in the `src` folder. Have fun with. Happy Drupal 8 theming. 

> Get Twiggy with it!

## Introduction

Drupal 8 is going to be a huge change for the entire community. In order to get front-end developers ready for Drupal 8, I started this theming guide. It contains an overview of how you can build a Drupal 8 theme, using modern front-end tools. If you find any mistakes or outdated documention, feel free to add a pull request.

## Table of content

[@todo: Add table of content]

## Some major changes

Let's kick of with some major changes that you, as a Drupal themer, must be aware of. This is especially useful if you've been involved in Drupal 7 theming in the past.

- The markup in Drupal 8 is now [HTML5](http://buytaert.net/html5-in-drupal-8). New tags like `header`, `nav`, `article` are used in core. 

- [WAI-ARIA Roles](https://www.drupal.org/node/1179668) are added. They are a set of roles, states, and properties, which can be applied to markup to provide rich semantics, increasing accessibility and interoperability. Although WAI-ARIA properties were not valid in xhtml 1.0, they are valid in HTML5, and can therefore be applied in the markup of Drupal 8. By using the role attribute with an HTML element, authors can provide more information about the purpose of components on the page.

- `<DIV ID="BAD-PRACTICE">...</DIV>`. Drupal 8 now has 75% less ID's than the Drupal 7 CSS! **Kill all the #ids**!

- [The CSS (File) Structure](https://www.drupal.org/node/1887918) is based on SMACSS & BEM.

- [Drupal is now of the box responsive and mobile ready.](https://groups.drupal.org/mobile/drupal-8)

- [The default settings and config are changed to be fast and safe production values.](https://www.drupal.org/node/2259531)
This is important because in a default Drupal 8 installation, CSS and JS aggregation is enabled. On your local development environment, you "might" want to disable this. 

- [A completely new theme/template system: Twig](https://www.drupal.org/node/1831138)
Twig is a completely new theme/template system. This means the `theme_*` functions and PHP-based `*.tpl.php` files have been completely replace in D8.

- [Drupal 8 does not support browsers that do not support SVG](https://www.drupal.org/node/2298227)
Drupal 8 uses SVG in place of PNG to provide resolution independent icons in the admin UI. No effort is made to cater for browsers that do not support SVG. This includes IE8 and below and Android Browser 2.3 and below.

- [An new, empty core theme](https://www.drupal.org/node/2289511)
Read more on *classy*, a new core theme below. 

- [CSS classes being moved from preprocess to Twig templates](https://www.drupal.org/node/2325067).

![MortenDK appoves](http://mortendk.github.io/drupal8-twig-frankfurt-2014/images/cssfilename-approved.jpg)

## Drupal core themes

Drupal core themes live inside `core/themes`. Inside this folder we can find the three (at the moment) Drupal 8 core themes:

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

Inside the `core/themes` lives a fourth folder (besides `bartik`, `seven` and `stark`), called `engines`. This folder contains the theme engines. In Drupal 8, the default template engine is **Twig**. The default template engine from Drupal 7, PHPTemplate, does still exist. Altough it's not recommended to continue using the engine, it might be useful when you're migrating your Drupal 7 site to Drupal 8. 

### What is a theme engine?

A theme engines (template engine, template processor or template parser) is a software components that **combines data with templates** from themes and shows the result - the final HTML - to the user.

![Template Engine image from Wikipedia](http://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TempEngGen015.svg/440px-TempEngGen015.svg.png)

### Twig

Twig is a modern template engine for PHP. All of the `theme_*` functions and PHPTemplate based `*.tpl.php` files have been completely replace in Drupal 8 by Twig template files. The template files now have a new (Twig) extension, `*.html.twig`.

[This is the official change record](https://www.drupal.org/node/1831138).

#### Advantages

- Twig is more secure, due to the fact that only a number of tags can be used. In the previous PHPTemplate, it was possible for a template file to execute the following code:

		<?php
		  db_query('DROP TABLE {users}');
		?>
	
  This should of course not be the case. In case you're wondering what it does: it removes the entire `users` table from your database. Not good, right?

- There now is a clear separation between the *logic* and the *view*. The means: no more PHP code inside your template files. 
- The syntax is very easy to understand, making the code more readable as well. Also, many IDE's have syntax highlighting for `*.twig` files.
- Template files are reusable, thanks to [Twig includes](http://twig.sensiolabs.org/doc/tags/include.html).
- Debugging is much more easy. First of all, Twig outputs a helpful message with the filename and the line number whenever there is a syntax problem within a template. Secondly, you can turn on a Twig debug function. More on that later. 
- Twig is very well documented. Go ahead and [start reading the official documentation here](http://twig.sensiolabs.org/documentation).
- It's not only used in Drupal core, so it's no a Drupaly-thing.

#### Disadvantage

- Although the syntax is very easy to read and understand, it's a new syntax you have to learn before getting started.

## The themes directory

All right. Now is the time to get really excited. We're about to create a Drupal 8 theme! The question that raises is: where should this theme be located, where should I put the files?

> If you're familiar with Drupal 7 theming, the first place for you to look at would be `drupal/sites/all/themes/{custom/}` (the place where all your custom themes lived in Drupal 7).

In Drupal 8, this location has changed. Custom and contrib themes now live in `drupal/themes`. Also notice that (custom and contrib) modules now live inside `drupal/modules` (insted of drupal/sites/all/modules/).

> Did you notice {*custom*}? It's always a good practice to separate the contrib themes (the one's you've been downloading from d.o) and the ones you've written yourself. This can simply be done by creating two folders inside the `themes` directory:

> `contrib`: for contrib themes  
> `custom`: for custom themes

### Create your custom theme directory

Let's create an `example` directory inside `themes/custom`, resulting in `themes/custom/example`. Inside this direcoty, all the code for our custom theme will live.  

## Creating an info file

### A simple .info.yml file

Again, if you're familiar with Drupal 7 theming, your first idea might be to start with creating an `.info` file. In Drupal 8, `.info` files are replaced by `.info.yml` files ([read the change record](https://www.drupal.org/node/1935708)). These files are parsed using the Symphony YAML Component. This change also applies for modules and installation profiles. They both require a `.info.yml` now, instead of the old `.info` file. Once you've created the file, it's time to add the write the first line of code.

	name: Awesome Theme
	
Fairly simple. This is the name of your theme. It's the name that also appears on the *Appearance* page, where you can activate your theme.
	
	description: 'An awesome D8 theme.'

A theme description. This description is also displayed on the *Appearance* page.

	package: Custom
	
The package in which your theme lives.
	
	type: theme

Since the `info.yml` files are used for besides themes also used for modules and profiles, this line lets Drupal know what it's dealing with.
	
	version: 1.0

The version of your theme. 	
	
	core: 8.x
	
The version of Drupal core the theme requires. 

##### *.info.yml

To wrap things up, this is our `.info.yml` file so far:

	name: Awesome Theme
	description: 'An awesome D8 theme.'
	package: Custom
	type: theme
	version: 1.0
	core: 8.x
	
Save this as `{theme_name}.info.yml` inside the created custom theme directory (eg. `themes/custom/example/example.info.yml`). Now navigate to `admin/appearance` and see your theme displayed. You can now even enable the theme. Hooray!
  		    
#### Adding a screenshot

When navigation to the appearance page, you might notice a *no screenshot* image for our theme. This is because no screenshot has been found (duh!). A screenshot is automatically detected and displayed if the filename is `screenshot.png`. If we add this file, we would see the screenshot on the appearance page.

Otherwise you can manually add a screenshot with the following line:

	screenshot: otherfilename.png
	
So, the filename for a screenshot does not have to be `screenshot.png`, as long as it is defined in the *info.yml* file.

#### Adding stylesheets

It's of course important to know how to add stylesheets to your theme. Let's add a css file called `styles.css` (that lives inside the `css` directory: `/css/styles.css`) to our theme.

	# Adding styles.css to our theme.
	stylesheets:
		all:
			- css/styles.css
			
> In Drupal 7, this could be achieved by adding the following line:  
	
	stylesheets[all][] = css/style.css
			
The css file is now added. The `all` keyword stands for the media tag inside the html `link` element that is used to add stylesheets:

	<link rel="stylesheet" href="[stylesheet]" media="all" />
	
So ... now that you know this, it's very easy to add a print stylesheet to our theme as well:

	# Adding a print stylesheet to our theme.
	stylesheets:
		print:
			- css/print.css
					
Inside the html:

	<link rel="stylesheet" href="[stylesheet]" media="print" />
	
#### Overriding stylesheets

In Drupal 8, drupal.base.css has been replaced with normalize.css ([see this change record](https://www.drupal.org/node/2168417)). If you want to include a different version of normalize.css, you can override this file:

    # Remove a CSS file:​
    stylesheets-override:
     	- normalize.css
 
#### Removing stylesheets

Alternatively, we can also completely remove this css file. 

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

> Drupal 8 doesn't load any additional scripts. This also means that by default [jQuery is not included](https://www.drupal.org/node/1541860). You have to declare it as a dependency for your script in order to use it. In the early stages of Drupal 8, this was done using `hook_library_info`. Since this was one of the last remaining hooks in Drupal 8, it was [replaced by a `*.libraries.yml` file](https://www.drupal.org/node/2201089).

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

This includes our "libraries" (the custom javascript) and the dependencies into our theme. In this example, the custom script as well as the jQuery library are now included in our theme. 

There still is a huge bug: [https://www.drupal.org/node/2273769](https://www.drupal.org/node/2273769).

## Breakpoints

![https://www.drupal.org/files/project-images/breakpoints_group.png](https://www.drupal.org/files/project-images/breakpoints_group.png)

- [Breakpoint added to Drupal 8](https://www.drupal.org/node/1813914)

> The Breakpoints module keeps track of the height, width, and resolution breakpoints where a responsive design needs to change in order to respond to different devices being used to view the site. The Breakpoints module standardizes the use of breakpoints, and enables modules and themes to expose or use each others' breakpoints.

Both themes and modules can define breakpoints by creating a configuration file called `{name}.breakpoints.yml` where `{name}` is the name of your theme or module. 


To get a good example, let look at `bartik.breakpoints.yml`:

	bartik.mobile:
	  label: mobile
	  mediaQuery: '(min-width: 0px)'
	  weight: 0
	  multipliers:
	    - 1x
	bartik.narrow:
	  label: narrow
	  mediaQuery: 'all and (min-width: 560px) and (max-width: 850px)'
	  weight: 1
	  multipliers:
	    - 1x
	bartik.wide:
	  label: wide
	  mediaQuery: 'all and (min-width: 851px)'
	  weight: 2
	  multipliers:
	    - 1x

The file is very straight forward. First, you declair 

[@todo]

## Template files (Twig)

Twig is a PHP-based compiled templating language. When your web page renders, the Twig engine takes the template and converts it into a 'compiled' PHP template which it stores in a protected directory in sites/default/files/php_storage/... The compilation is done once. Template files are cached for reuse and are recompiled on clearing the Twig cache.

### /templates folder

[@todo:] Document the new folder, that contains all the templates files instead of all the `theme_`-functions.

[@todo]

### Twig debug

An **awesome** new feature from the Twig engine is the debug tool. It allows you to trace where the template comes from. To enable Twig Debugging, all you have to do is set the `debug` variable in the `twig.config ` to `true`. Navigate to `sites/default/services.yml` to change the it:

	parameters:
  		twig.config:
    		debug: false
    		
[@todo]    		

### page.html.twig

[@todo:] Document this template file.


## Headless Drupal

A new trend, you might have heard by new, is **headless Drupal**.

[@todo]
