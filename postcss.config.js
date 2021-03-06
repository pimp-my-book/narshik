var tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        /*
          This plugin can consume local files, node modules or web_modules. To resolve path of an @import rule, it can look into root directory (by default process.cwd()), web_modules, node_modules or local modules. When importing a module, it will look for index.css or file referenced in package.json in the style or main fields. You can also provide manually multiples paths where to look at. 
         */
        require('postcss-import'),



        /* 
          Tailwind configuration
        */
        tailwindcss('./tailwind.config.js'),

        /*
          PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
    
          Write your CSS rules without vendor prefixes (in fact, forget about them entirely). Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.
         */
        require('autoprefixer'),
    ],
};