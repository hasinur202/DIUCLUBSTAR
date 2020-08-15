const mix = require('laravel-mix');

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


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');


mix.styles([
    'resources/css/bootstrap.min.css',
    'resources/css/emoji.css',
    'resources/css/font.awesome.min.css',
    'resources/css/ionicons.min.css',
    'resources/css/jquery.scrollbar.css',
    'resources/css/style.css'
], 'public/css/app.css').version();

mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('resources/fonts', 'public/fonts');
mix.copyDirectory('resources/css/emoji', 'public/css/emoji');
mix.copyDirectory('resources/videos', 'public/videos');



// mix.scripts([
//     'resources/js/typed.js',
//     'resources/js/typed-custom.js',
//     'resources/js/script.js'
// ], 'public/js/app.js').version();
