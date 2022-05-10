import { Selector } from "testcafe";

export async function clickOnScrollbarButton(index, t) {
    if (index > 4 && index % 2 !== 0 && index < 12) {
        const scrollBarButton = Selector("#career_path_menu-ow")
            .child("div.tns-controls")
            .child("button:nth-child(2)");
        await t.click(scrollBarButton);
    }
}
