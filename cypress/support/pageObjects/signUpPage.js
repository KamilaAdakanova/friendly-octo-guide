export default new class SignUpPage{
    signUpBtnHM = () => cy.get('[href="/signup"]');
    headerSignUp = () => cy.get('[data-msgid="Sign Up"]');
    header2 = () => cy.get('.body-2');
    loginRef = () => cy.get('[data-msgid="Log in"]');
    emailField = () => cy.get('input#input-14');
    emailLabel = () => cy.get('[for="input-14"]>span');
    emailErrorMsg = () => cy.get('[role="alert"]>div>div>span').first();
    passField = () => cy.get('input#input-20');
    passLabel = () => cy.get('[for="input-20"]>span');
    passErrorMsg = () => cy.get('[role="alert"]>div>div>span').last();
    signUpBtn = () => cy.get('button[type="submit"]');
    headerAfterSignUp = () => cy.get("h2");
    profileMenu =() => cy.get('button[aria-label="menu"]');
    logOutBtn =() => cy.get('[href="/logout"]');
    logOut = () => {
        this.profileMenu().click();
        this.logOutBtn().click();
    };

    generateEmail =()=> `test${Math.floor(Math.random()*100)}@gmail.com`;
    generatePassword =(numberOfChar = 8)=> {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const capitalLet = letters.toUpperCase();
        const characters = '!@#$%^&*';
        let index = Math.floor(Math.random()*((letters.length -1) +1));
        let indexOfCharacters = Math.floor(Math.random()*((characters.length -1) +1));
        let pass = letters[index] + capitalLet[index] + characters[indexOfCharacters]+ Math.floor(Math.random()*10)
        return pass.padEnd(numberOfChar, letters);
    }
    generatePass =(numberOfChar = 8)=> {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
        let pass = '';
        for(let i = 0; i < numberOfChar; i++){
            let index = Math.floor(Math.random()*((letters.length -1) +1));
            pass += letters[index]
        }
        return pass;
    }
};
    // checkInputField = (fieldId, fieldType)=>{
    //
    // }
    // it("accept", () => {
    // cy.get('button[id*="ember"][aria-label*="Accept"]').each((el) => cy.wrap(el).click({ force: true }));
    // });
    //cy.scrollTo('bottom')