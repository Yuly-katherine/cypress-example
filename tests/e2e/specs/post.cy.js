describe("Post test feature", () =>{
//antes de cada test, ejecuta está acción:
// beforeEach(() => {
//     cy.visit("/login")
//     cy.get("#email").type("admin@admin.com")  
//     cy.get("#password").type("123456") 
//     cy.get("button").click()
//     cy.url().should("eq", "http://localhost:8080/")
// }) 

// beforeEach(()=>{
//     cy.login("admin@admin.com","123456")
// })

it("Logged user can access to post list", () =>{
    // 1)
    cy.visit("/login") // el usuario se encuentra en el login
    cy.get("#email").type("admin@admin.com")
    //  cy.get(["placeholder='email'"]).type("admin@admin.com") // otra posible forma de escribirlo
    cy.get("#password").type("123456") // ingresa sus credenciales correctamente
    cy.get("button").click()
    cy.url().should("eq", "http://localhost:8080/")// se redirige a la vista del home
    cy.contains("h1", "Post List") // puede vizualizar la post list
    cy.contains("a", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit") // la respuesta entregada por la petición es la esperada

    })

    //2)
    it("Logged user can access to detail view", () =>{
    cy.visit("/login") // el usuario se encuentra en el login
    cy.get("#email").type("admin@admin.com")
    cy.get("#password").type("123456")// ingresa sus credenciales correctamente
    cy.get("button").click()
    cy.url().should("eq", "http://localhost:8080/")
    cy.contains("a", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit").click()  // puede vizualizar la post list y da click al primer enlace
    cy.url().should("eq", "http://localhost:8080/detail/1") // se redirige a la vista del detalle del primer enlace
    cy.contains("p", "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto") // se valida que el contenido es el esperado
    })

    //3)
    it("Logged user can back to homeView from  detailview", () =>{
    cy.visit("/login") // el usuario se encuentra en el login
    cy.get("#email").type("admin@admin.com")
    cy.get("#password").type("123456") // ingresa sus credenciales correctamente
    cy.get("button").click()
    cy.url().should("eq", "http://localhost:8080/")
    cy.contains("a", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit").click()
    cy.url().should("eq", "http://localhost:8080/detail/1") // se redirige a la vista del detalle del primer enlace
    cy.contains("p", "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto")
    cy.get(".link").click() // da click para regresar a la vista del home
    cy.contains("h1", "Post List") // se valida que se encuentra en la vista del home, ya que visualiza el Post list
    })
})