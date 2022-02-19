module.exports = {
    content: [
        "./src/**/*.{html,js,vue}",
        "./index.html",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
    ],
    safelist: [
        {
            pattern: /(bg|text|border|ring)-/,
        },
        {
            pattern: /(p|px|py|pl|pt|pb|pr)-/,
        },
        {
            pattern: /(m|mx|my|ml|mt|mb|mr)-/,
        },
    ]
};
