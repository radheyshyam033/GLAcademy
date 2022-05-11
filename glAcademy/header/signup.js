import { Selector } from "testcafe";

export async function signup(t) {
    const signup = Selector('#header-sign-up-modal-link.nav-link');
    const signupPopup = Selector('#corp-login-modal').child('div');
    const email = Selector("#work_email[placeholder='Sign Up With Email Address']"); // id is same for two element
    const continueButton = Selector("#verify_your_email[data-title='Signup Modal']");
    const login = Selector("#login-to-account");
    const loginPopup = Selector('#loginModel>div');
    const closePopup=Selector("#close-login > [alt='close-button']")

    await t.expect(signup.exists).ok();
    await t.expect(signup.visible).ok()

        .click(signup);
    await t.expect(signupPopup.exists).ok();
    await t.expect(signupPopup.visible).ok();

    await t.expect(email.exists).ok();
    await t.expect(email.visible).ok();

    await t.expect(continueButton.exists).ok();
    await t.expect(continueButton.visible).ok();

    await t.expect(login.exists).ok();
    await t.expect(login.visible).ok()
    .click(login)
    await t.expect(loginPopup.exists).ok();
    await t.expect(loginPopup.visible).ok()
    .click(closePopup)

}
