import { ClientFunction ,Selector, t } from "testcafe";

fixture `Automate Navbar of GL academy page`
.page`https://www.mygreatlearning.com/academy`

test('Header exists and be visible', async t =>{
    const navbar=Selector('#navbar')
    await t
    .expect(navbar.exists).ok()
    .expect(navbar.visible).ok()
})

test('GL logo automation', async t =>{
    const logo=Selector('img.logo')
    const getWindowLocation = ClientFunction(() => window.location);
    const location = (await getWindowLocation())

    await t
    .expect(logo.visible).ok()
    .click(logo)
    .expect(await location.href).eql('https://www.mygreatlearning.com/academy');
})

test('Search bar', async t =>{
    const searchBar=Selector('input[name="search_term_string"]')
    const searchOption=Selector('#search-options')
    const popularCourses=Selector('#popular_courses')
    const pgCourse=Selector('#js-pg-course-category-heading')
    const courseOption=Selector('#js-course-category-heading')

    await t.expect(searchBar.exists).ok()
    await t.expect(searchBar.visible).ok()

    .click(searchBar)
    await t.expect(searchOption.exists).ok()
    await t.expect(searchOption.visible).ok()

    await t.expect(popularCourses.exists).ok()
    await t.expect(popularCourses.visible).ok()

    .click(searchBar)
    .typeText(searchBar,'Degree programs')
    await t.expect(pgCourse.exists).ok()
    await t.expect(pgCourse.visible).ok()

    .pressKey('ctrl+a delete')
    .typeText(searchBar,'Course')
    await t.expect(courseOption.exists).ok()
    await t.expect(courseOption.visible).ok()

    .pressKey('ctrl+a delete')
    const mySqlBasic=Selector('#popular_courses > li:nth-child(4) > a')
    await t.click(mySqlBasic)
    const getWindowLocation = ClientFunction(() => window.location);
    const location = (await getWindowLocation())
    const url= await mySqlBasic.getAttribute('href')
    await t.expect(location.href).eql(url);
})

test('Degree & certificate programs',async t=>{

    const degreeCertificateProg=Selector('div.header-degree-certificates-cont > p')
    const href='/?utm_source=new_campaign_noworkex&utm_medium=NoWorkEx&utm_campaign=DegreeAndCertificatesPrograms#our-courses'
    await t.expect(degreeCertificateProg.exists).ok()
    await t.expect(degreeCertificateProg.visible).ok()
    await t.expect(Selector('#navbarText > ul > li:nth-child(1) > a').getAttribute('href')).eql(href)

    .click(degreeCertificateProg)
    const degreeAndCertificateUrl=`https://www.mygreatlearning.com${href}`
    const getWindowLocation = ClientFunction(() => window.location)
    const location = (await getWindowLocation())
    await t.expect(await location.href).eql(degreeAndCertificateUrl);
})

test('GL login automation', async t =>{
    const login=Selector('#header-login-modal-link')
    const loginPopup=Selector('#loginModel>div')
    const emailId=Selector('#email_id')
    const password=Selector('#password')
    const signInButton=Selector('#recaptcha_log_in_button')
    const forgetPass=Selector('a.login-forgetpass')
    const forgetPassPopup=Selector('#myTabContent')
    const signup=Selector('#forgot_password_div .signup-btn')
    const signupPopup=Selector('#corp-login-modal #signup-front-sec')

    await t.expect(login.exists).ok()
    await t.expect(login.visible).ok()
    
    .click(login)
    await t.expect(loginPopup.exists).ok()
    await t.expect(loginPopup.visible).ok()

    await t.expect(emailId.exists).ok()
    await t.expect(emailId.visible).ok()
    await t.expect(emailId.getAttribute('type')).eql('email')
    
    await t.expect(password.exists).ok()
    await t.expect(password.visible).ok()
    await t.expect(password.getAttribute('type')).eql('password')

    await t.expect(signInButton.exists).ok()
    await t.expect(signInButton.visible).ok()

    await t.expect(forgetPass.exists).ok()
    await t.expect(forgetPass.visible).ok()

    .click(forgetPass)
    await t.expect(forgetPassPopup.exists).ok()
    await t.expect(forgetPassPopup.visible).ok()

    .click(signup)
    await t.expect(signupPopup.exists).ok()
    await t.expect(signupPopup.visible).ok()
})

test('GL Sign Up automation', async t =>{
    
    const signup=Selector('#header-sign-up-modal-link.nav-link')
    const signupPopup=Selector('#corp-login-modal > div')
    const email=Selector("#work_email[placeholder='Sign Up With Email Address']")
    const continueButton=Selector("#verify_your_email[data-title='Signup Modal']")
    const login=Selector("#login-to-account")
    const loginPopup=Selector('#loginModel')
    
    await t.expect(signup.exists).ok()
    await t.expect(signup.visible).ok()

    .click(signup)
    await t.expect(signupPopup.exists).ok()
    await t.expect(signupPopup.visible).ok()

    await t.expect(email.exists).ok()
    await t.expect(email.visible).ok()

    await t.expect(continueButton.exists).ok()
    await t.expect(continueButton.visible).ok()

    await t.expect(login.exists).ok()
    await t.expect(login.visible).ok()

    .click(login)
    await t.expect(loginPopup.exists).ok()
    await t.expect(loginPopup.visible).ok()
})

