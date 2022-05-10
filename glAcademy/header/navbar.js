import { Selector } from "testcafe";

export async function navbar(t) {
    const navbar = Selector('#navbar');
    await t
        .expect(navbar.exists).ok()
        .expect(navbar.visible).ok();
}
