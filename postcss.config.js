const tailwindcss = require('tailwindcss');
module.exports =  {
    plugins:[
        require('./tailwindcss.config.js'),
        require('autoprefixer')
    ]
}

