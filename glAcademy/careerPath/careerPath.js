import { Selector } from "testcafe";
import { CheckTitleAndAverageSalary } from "./CheckTitleAndAverageSalary";
import { clickOnScrollbarButton } from "./clickOnScrollbarButton";

export default async function careerPath(t) {
    const careerPathSection = Selector("#career-path-section");

    await t.expect(careerPathSection.exists).ok();
    await t.expect(careerPathSection.visible).ok();

    let totalPopularCourses = await Selector("#career_path_menu").child("a").count;
    let index = 0;

    while (totalPopularCourses) {
        const popularCourses = Selector(`#career_path_menu-item${index}`);
        const title = await popularCourses.getAttribute("title");
        const dataRel = await popularCourses.getAttribute("data-rel");

        await clickOnScrollbarButton(index, t);

        await t.expect(popularCourses.exists).ok();
        await t.expect(popularCourses.visible).ok();

        await t.click(popularCourses);

        const careerCardContainerSelector = Selector("#career-path-card-container");
        const totalCardsSelector = careerCardContainerSelector
            .child(`div.${dataRel}`)
            .child("div");

        const totalCards = await totalCardsSelector.child("div.path-item").count;
        const totalCourses = await totalCardsSelector
            .child("div.path-item")
            .child("div").count;

        await t.expect(totalCards).lte(4);

        await CheckTitleAndAverageSalary(title, totalCourses, totalCardsSelector, t, totalCards);

        index++;
        totalPopularCourses--;
    }
}


