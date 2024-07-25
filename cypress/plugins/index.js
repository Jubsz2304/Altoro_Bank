const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      on('task', {
        clearAllureResults() {
          const allureResultsDir = './allure-results'; 
          const absolutePath = path.resolve(allureResultsDir);

          try {
            if (fs.existsSync(absolutePath)) {
              if (fs.statSync(absolutePath).isDirectory()) {
                fs.rmdirSync(absolutePath, { recursive: true });
                console.log(`Resultados do Allure limpos em: ${absolutePath}`);
              } else {
                console.log(`O caminho ${absolutePath} não é um diretório.`);
              }
            } else {
              console.log(`Nenhum resultado do Allure encontrado em: ${absolutePath}`);
            }
            return null; 
          } catch (err) {
            console.error('Erro ao limpar os resultados do Allure:', err);
            throw err; 
          }
        }
      });

      return config;
    }
  }
});


