class CadastroPage {
    visitar() {
        cy.visit('http://localhost:3000/register.html');
    }

    preencherFormulario(nome, email, telefone, senha) {
        cy.get('#name').type(nome);
        cy.get('#email').type(email);
        cy.get('#phone').type(telefone);
        cy.get('#password').type(senha);
        cy.get('#confirm-password').type(senha);
        cy.get('#terms-agreement').click();
    }

    submeterCadastro() {
        cy.get('#register-btn').click();
    }
}

export default new CadastroPage();