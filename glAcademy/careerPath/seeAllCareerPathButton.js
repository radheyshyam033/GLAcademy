export async function seeAllCareerPathButton(totalCardsSelector, totalCards, totalCourses, t) {
    
    const seeAllCareerPath = totalCardsSelector
        .child("div:nth-child(5)")
        .child("a")
        .child("div")
        .child("div")
        .child("p");
    if (totalCards - totalCourses === 1) {
        await t.expect(seeAllCareerPath.exists).ok();
        await t.expect(seeAllCareerPath.visible).ok();
    } else {
        await t.expect(seeAllCareerPath.exists).notOk();
        await t.expect(seeAllCareerPath.visible).notOk();
    }
}
