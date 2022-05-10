import { seeAllCareerPathButton } from "./seeAllCareerPathButton";

export async function CheckTitleAndAverageSalary(title, totalCourses, totalCardsSelector, t, totalCards) {
    if (title != "popular_careers") {
        for (let i = 2; i <= totalCourses + 1; i++) {
            const eachCardSelector = totalCardsSelector
                .child(`div:nth-child(${i})`)
                .child("div")
                .child("a")
                .child("div")
                .child("div.path-card-content");
            let cardTitle = eachCardSelector.child(`div:nth-child(1)`).child("h4");
            let headTitle = await cardTitle.innerText;
            await t.expect(headTitle.toUpperCase()).eql(title.toUpperCase());

            let averageSalary = eachCardSelector.child(
                "div.path-card-content-meta"
            );
            await t.expect(averageSalary.exists).ok();
            await t.expect(averageSalary.visible).ok();

            await seeAllCareerPathButton(totalCardsSelector, totalCards, totalCourses, t);
        }
    }
}
