module.exports = {
  "extends": "airbnb",

  "parser": "babel-eslint",

  "plugins": [
      "react",
      "import"
  ],

  "env": {
    "browser": false,
  },

  "globals": {
    "__DEV__": true,
  },

  "rules": {
    "semi": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "jsx-a11y/href-no-hash": "off",
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/sort-comp": ["error", {
        order: [
          "lifecycle",
          "rendering",
          "everything-else",
          "static-methods",
        ],
        groups: {
          rendering: [
            "render",
            "/^render.+$/",
          ],
        },
      }],
  }
}
