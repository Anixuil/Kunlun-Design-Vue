module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    env: {
        browser: true,
        es2021: true,
        commonjs: true
    },
    plugins: ['@typescript-eslint', 'prettier', 'vue'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'prettier/prettier': 'error',
        'no-extra-semi': 'off',
        'no-undef': 'off', //未定义
        '@typescript-eslint/ban-types': 'off', //关闭禁令类型
        'vue/multi-word-component-names': 'off', //驼峰
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off'
    }
}
