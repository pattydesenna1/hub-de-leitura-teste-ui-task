import LoginPage from './page-objects/loginPage';
import CadastroPage from './page-objects/cadastroPage';

Cypress.Commands.add('login', (email, senha) => {
    LoginPage.visitar();
    LoginPage.preencherFormularioLogin(email, senha);
    LoginPage.submeterLogin();
});

Cypress.Commands.add('cadastrar', (nome, email, telefone, senha) => {
    CadastroPage.visitar();
    CadastroPage.preencherFormulario(nome, email, telefone, senha);
    CadastroPage.submeterCadastro();
});