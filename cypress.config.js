const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración de eventos, si es necesario
    },
    baseUrl: 'http://localhost:3000', // url de la aplicacion
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Patrones de archivos de prueba
  },
});
