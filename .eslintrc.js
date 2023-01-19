module.exports = {
    root: true,
    extends: ['@kunlun-design/eslint-config'],
    ignorePatterns: [
        '!.*',
        'node_modules',
        'packages/kunlun-design/lib',
        'packages/docs/.vitepress/cache',
        '.temp',
        '*.md',
        'packages/docs/dist'
    ]
}
