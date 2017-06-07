module.exports = {
  "root": true,
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "sourceType": "script",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  // Add custom rules here
  // http://eslint.org/docs/rules/
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-underscore-dangle": "off",
    "radix": "off",
    "import/no-named-as-default": "off",
    "import/extensions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-for": "off"
  }
};
