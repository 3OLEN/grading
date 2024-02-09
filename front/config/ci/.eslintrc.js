/* eslint-disable canonical/sort-keys --- This sort has a specific reason */
module.exports = {
    ignorePatterns: ['var/'],
    overrides: [
        {
            files: ['*.js', '*.ts'],
            plugins: ['sonarjs'],
            extends: [
                'canonical/auto',
                'canonical/typescript',
                'plugin:sonarjs/recommended',
                'plugin:@angular-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/comma-dangle': 'off',
                '@typescript-eslint/indent': ['error', 4],
                '@typescript-eslint/member-delimiter-style': 'off',
                '@typescript-eslint/no-extraneous-class': 'off',
                '@typescript-eslint/semi': 'off',
                '@typescript-eslint/space-before-function-paren': 'off',
                'canonical/id-match': 'off',
                'simple-import-sort/imports': 'off',
                'prettier/prettier': 'off',
                'typescript-sort-keys/interface': 'off',
                'unicorn/numeric-separators-style': 'off',
            },
        },
        {
            files: ['*.html'],
            plugins: ['@html-eslint'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
        },
        {
            files: ['*.json'],
            excludedFiles: ['package-lock.json'],
            plugins: ['json-format'],
        },
    ],
}
