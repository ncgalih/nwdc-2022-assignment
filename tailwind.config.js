const autoprefixer = require("autoprefixer");

module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extends:{},
    },
    plugins: [
        autoprefixer,
    ]
}