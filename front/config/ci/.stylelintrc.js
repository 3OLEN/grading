/* eslint-disable canonical/sort-keys --- This sort has a specific reason */
module.exports = {
    extends: 'stylelint-config-standard-scss',
    rules: {
        'comment-empty-line-before': null,
        'at-rule-empty-line-before': null,
        'declaration-empty-line-before': null,
        'color-named': 'never',
        'scss/dollar-variable-empty-line-before': null,
        'scss/double-slash-comment-empty-line-before': null,
        'scss/at-mixin-named-arguments': 'always',
        'scss/at-mixin-pattern': null,
    }
}
