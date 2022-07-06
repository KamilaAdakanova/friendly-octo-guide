export default new class MainPage{
    signUpBtn = () => cy.get('[href="/signup"]');
    loginBtn = () => cy.get('[href="/login"]');

}