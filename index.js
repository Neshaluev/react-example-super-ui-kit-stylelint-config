module.exports = {
    "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
    "plugins": ["stylelint-scss", "stylelint-prettier"],
    "customSyntax": "postcss-scss",
    "rules": {
      "selector-class-pattern": null,
      "color-no-invalid-hex": true,
      "font-family-no-duplicate-names": true,
      "function-calc-no-unspaced-operator": true,
      "function-linear-gradient-no-nonstandard-direction": true,
      "string-no-newline": true,
      "unit-no-unknown": true,
      "shorthand-property-no-redundant-values": true,
      "property-no-unknown": true,
      "declaration-block-no-duplicate-properties": true,
      "declaration-block-no-redundant-longhand-properties": true,
      "declaration-block-no-shorthand-property-overrides": true,
      "selector-pseudo-class-no-unknown": true,
      "selector-pseudo-element-no-unknown": true,
      "selector-type-no-unknown": true,
      "media-feature-name-no-unknown": true,
      "no-extra-semicolons": true,
      "no-unknown-animations": true,
      "color-named": "never",
      "value-no-vendor-prefix": true,
      "property-no-vendor-prefix": true,
      "declaration-no-important": true,
      "declaration-block-single-line-max-declarations": 1,
      "selector-max-empty-lines": 0,
      "selector-max-id": 1,
      "selector-max-universal": 1,
      "selector-no-vendor-prefix": true,
      "media-feature-name-no-vendor-prefix": true,
      "at-rule-no-vendor-prefix": true,
      "at-rule-no-unknown": null,
      "color-hex-case": "lower",
      "function-comma-space-before": "never",
      "number-leading-zero": "always",
      "number-no-trailing-zeros": true,
      "string-quotes": "single",
      "unit-case": "lower",
      "value-keyword-case": ["lower", {"camelCaseSvgKeywords": true}],
      "value-list-comma-space-after": "always-single-line",
      "value-list-comma-space-before": "never",
      "property-case": "lower",
      "declaration-colon-space-after": "always",
      "declaration-colon-space-before": "never",
      "declaration-block-semicolon-newline-after": "always-multi-line",
      "declaration-block-semicolon-space-after": "always-single-line",
      "declaration-block-semicolon-space-before": "never",
      "declaration-block-trailing-semicolon": "always",
      "block-closing-brace-newline-after": ["always", {"ignoreAtRules": ["if", "else"]}],
      "block-closing-brace-newline-before": "always-multi-line",
      "block-closing-brace-space-before": "never-single-line",
      "block-closing-brace-empty-line-before": "never",
      "block-opening-brace-newline-after": "always-multi-line",
      "block-opening-brace-newline-before": "never-single-line",
      "block-opening-brace-space-after": "never-single-line",
      "block-opening-brace-space-before": "always",
      "selector-attribute-brackets-space-inside": "never",
      "selector-attribute-operator-space-after": "never",
      "selector-attribute-operator-space-before": "never",
      "selector-combinator-space-after": "always",
      "selector-pseudo-class-case": "lower",
      "selector-pseudo-class-parentheses-space-inside": "never",
      "selector-pseudo-element-case": "lower",
      "selector-type-case": "lower",
      "selector-list-comma-newline-after": "always-multi-line",
      "selector-list-comma-newline-before": "never-multi-line",
      "selector-list-comma-space-after": "always-single-line",
      "selector-list-comma-space-before": "never",
      "rule-empty-line-before": ["always", {"ignore": ["inside-block"]}],
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-case": "lower",
      "media-feature-parentheses-space-inside": "never",
      "media-feature-range-operator-space-after": "always",
      "media-feature-range-operator-space-before": "always",
      "media-query-list-comma-space-after": "always",
      "media-query-list-comma-space-before": "never",
      "at-rule-empty-line-before": [
        "always",
        {
          "except": ["blockless-after-same-name-blockless"],
          "ignore": ["inside-block"]
        }
      ],
      "at-rule-name-case": "lower",
      "at-rule-name-space-after": "always",
      "at-rule-semicolon-newline-after": "always",
      "at-rule-semicolon-space-before": "never",
      "max-empty-lines": 2,
      "no-eol-whitespace": true,
      "no-missing-end-of-source-newline": true,
      "scss/at-rule-no-unknown": true,
      "prettier/prettier": true
    }
  }
  