export default new class SignUpPage{
    signUpBtnHM = () => cy.get('[href="/signup"]');
    headerSignUp = () => cy.get('[data-msgid="Sign Up"]');
    emailField = () => cy.get('input#input-14');
    passField = () => cy.get('input#input-20');
    signUpBtn = () => cy.get('button[type="submit"]');
    headerAfterSignUp = () => cy.get("h2");
    profileMenu =() => cy.get('button[aria-label="menu"]');
    logOutBtn =() => cy.get('[href="/logout"]');
    logOut = () => {
        this.profileMenu().click();
        this.logOutBtn().click();
    };

    generateEmail =()=> `test${Math.floor(Math.random()*100)}@gmail.com`;
    generatePassword =()=> {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const capitalLet = letters.toUpperCase();
        const characters = '!@#$%^&*'
        let indexOfLetters = Math.floor(Math.random()*((letters.length -1) +1))

    }
}