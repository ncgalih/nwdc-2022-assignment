const autoprefixer = require("autoprefixer");

module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx}",
        "./public/index.html"
    ],
    theme: {
        extends:{}
    },
    plugins: [
        autoprefixer,
    ]
}