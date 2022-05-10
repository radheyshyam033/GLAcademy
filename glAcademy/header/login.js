import { Selector } from "testcafe";

export async function login(t) {
    const login = Selector('#header-login-modal-link');
    const loginPopup = Selector('#loginModel>div');
    const emailId = Selector('#email_id');
    const password = Selector('#password');
    const signInButton = Selector('#recaptcha_log_in_button');
    const forgetPass = Selector('a.login-forgetpass');
    const forgetPassPopup = Selector('#myTabContent');
    const signup = Selector('#forgot_password_div .signup-btn');
    const signupPopup = Selector('#corp-login-modal #signup-front-sec');

    await t.expect(login.exists).ok();
    await t.expect(login.visible).ok()

        .click(login);
    await t.expect(loginPopup.exists).ok();
    await t.expect(loginPopup.visible).ok();

    await t.expect(emailId.exists).ok();
    await t.expect(emailId.visible).ok();
    await t.expect(emailId.getAttribute('type')).eql('email');

    await t.expect(password.exists).ok();
    await t.expect(password.visible).ok();
    await t.expect(password.getAttribute('type')).eql('password');

    await t.expect(signInButton.exists).ok();
    await t.expect(signInButton.visible).ok();

    await t.expect(forgetPass.exists).ok();
    await t.expect(forgetPass.visible).ok()

        .click(forgetPass);
    await t.expect(forgetPassPopup.exists).ok();
    await t.expect(forgetPassPopup.visible).ok()

        .click(signup);
    await t.expect(signupPopup.exists).ok();
    await t.expect(signupPopup.visible).ok();
}
