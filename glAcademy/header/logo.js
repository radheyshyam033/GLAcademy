import { ClientFunction, Selector } from "testcafe";

export async function logo(t) {
    const logo = Selector('img.logo');
    const getWindowLocation = ClientFunction(() => window.location);
    const location = (await getWindowLocation());

    await t
        .expect(logo.visible).ok()
        .click(logo)
        .expect(await location.href).eql('https://www.mygreatlearning.com/academy');
}
