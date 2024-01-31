module.exports = {
    overrides: [
        {
            files: ['*.js', '*.ts'],
            plugins: ['sonarjs'],
            extends: [
                'canonical/auto',
                'canonical/typescript',
                'plugin:sonarjs/recommended',
            ],
            rules: {
                '@typescript-eslint/indent': ['error', 4],
                '@typescript-eslint/semi': 'off',
                'prettier/prettier': 'off',
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
        }
    ],
}
