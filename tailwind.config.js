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
            pattern: /bg-/,
        },
        {
            pattern: /text-/,
        },
        {
            pattern: /border-/,
        },
        {
            pattern: /ring-/,
        },
    ]
};
