const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// module.exports = {
//   e2e: {
//     viewportWidth: 1920,
//     viewportHeight: 1080,
//   },
// };

// module.exports = {
//   e2e: {
//     viewportWidth: 320,
//     viewportHeight: 667,
//   },
// };

