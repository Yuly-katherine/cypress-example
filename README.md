# Cypress - Pruebas End to End

  **end-to-end (E2E)**: el cual está destinado aprobar toda la aplicación en su conjunto..

## Estructura del proyecto

Al instalar Cypress se generan las siguientes carpetas en el proyecto:

- **`support/`**  
  Contiene:  
  - `index.js`: Aloja dependencias e importaciones necesarias antes de ejecutar los tests.  
  - `commands.js`: Permite definir comandos personalizados y reutilizables en las pruebas.  

- **`integration/specs/`**  
  Aquí se ubican los archivos con los **tests creados por el usuario**.  

- **`plugins/`**  
  Incluye la configuración necesaria para que Cypress funcione correctamente.  

---

## Sintaxis de Cypress

Los comandos de Cypress se dividen en 4 categorías:

1. **Query** → Consultan el estado de la aplicación.  
   ```js
   cy.get('.class')
   ```

2. **Assertions** → Validan condiciones específicas.  
   ```js
   cy.url().should('eq', 'http://localhost:8080')
    ```

3. **Actions** →Simulan interacciones de usuario. 
   ```js
   cy.get('button').click()
    ```

4. **Other** →Comandos adicionales útiles. 
   ```js
   cy.request('http://dev.local')
    ```

📖 Documentación completa: Cypress API Docs(https://docs.cypress.io/api/table-of-contents)

## Clonar el repositorio:
```
https://github.com/Yuly-katherine/tip-calculator.git
```

## Instalar dependencias:
```
npm install
```


