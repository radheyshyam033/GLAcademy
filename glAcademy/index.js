import { ClientFunction ,Selector, t } from "testcafe";
import header from './header/header'
import careerPath from './careerPath/careerPath'


fixture `Automate Navbar of GL academy page`
.page`https://www.mygreatlearning.com/academy`

test('Automate header of GL Academy page', async (t) => {
    await header(t)
});

test('Automate Carear Path courses of GL Academy page', async (t) => {
    await careerPath(t);
});






 