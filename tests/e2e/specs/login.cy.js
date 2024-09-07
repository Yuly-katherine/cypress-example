//Estructura de la prueba
// describe('nombre de test', () => {
//   it('paso 1', () => {
//     Ejecucion test paso 1
//   })
//   it('paso 2', () => {
//   Ejecucion test paso 1
//   })
// })


describe("login test feature", () => {

  //1)
  it("user no access to protected routes", () => {
    cy.visit("/") // intenta acceder a la vista del home
    cy.url().should("eq","http://localhost:8080/login") //como el home es una vista protegida, la ruta a la cual debe redirige es el login
  })

  //2)
  it("user with wrong credentials can't pass", () => {
    cy.visit("/login") // se encunetra en la vista del login
    cy.get("#email").type("demo@demo.com")
    cy.get("#password").type("1234") // el usuario ingresa credenciales erroneas
    cy.get("button").click() // se ejecuta la accion del botoón para comprobar credenciales
    cy.contains("p", "Wrong email or password") // como las credenciales son incorrectas, muestra mensaje de error
  })
})


describe("nombre de test", () => {
  it("example test", () => {
    cy.visit("/") // para visitar una url
    cy.url()  // obtiene la url en la que se encuentra el usuario
    cy.contains("h1", "Hello world")// comprobar si  la pagina tiene el elemento del DOM descrito
    cy.should("have.css", "color: #ff0000") // comprobación de proposito general
    cy.should("eq", "Jane")// comprobación de proposito general
    cy.request("POST", "url", {}) // realiza peticiones
    cy.get('.class') // obtener elementos del DOM
    cy.get('#id') // obtener elementos del DOM
    cy.click() // acción de realizar click
    cy.type("text") // accion de escribir
  })
})