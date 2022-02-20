module.exports = {
    darkMode: 'class',
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
            pattern: /(translate|bg|text|border|ring|p|px|py|pl|pt|pb|pr|w|m|mx|my|ml|mt|mb|mr)-/,
            variants: ['hover', 'focus', 'dark']
        },
    ]
};
