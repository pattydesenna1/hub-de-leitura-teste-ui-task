class LoginPage {
    visitar() {
        cy.visit('http://localhost:3000/login.html');
    }

    preencherFormularioLogin(email, senha) {
        cy.get('#email').type(email);
        cy.get('#password').type(senha);
    }

    submeterLogin() {
        cy.get('#login-btn').click(); 
    }
}

export default new LoginPage();