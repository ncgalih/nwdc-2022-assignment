const autoprefixer = require("autoprefixer");

module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extends:{
            height:{
                '1/10': '10%',
                '9/10': '90%',
            }
        }
    },
    plugins: [
        autoprefixer,
    ]
}