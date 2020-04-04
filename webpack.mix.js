let mix = require('laravel-mix');
let tailwindcss = require("tailwindcss");
let postcssImport = require("postcss-import");


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
   watchOptions: {
     ignored: /node_modules/
   }
});

mix
   .js('resources/js/site.js', 'public/js')
   .postCss("resources/css/site.css", "public/css")
   .options({
		postCss: [postcssImport(), tailwindcss()],
      processCssUrls: false,
      watchOptions: {
         ignored: /node_modules/
     }
	})
   .sourceMaps();


/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel Assets
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .sass('resources/sass/cp.scss', 'public/vendor/app/css');
