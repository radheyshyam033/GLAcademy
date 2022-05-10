import { ClientFunction, Selector } from "testcafe";

export async function searchBar(t) {
    const searchBarSelector = Selector('input[name="search_term_string"]');
    const searchOption = Selector('#search-options');
    const popularCourses = Selector('#popular_courses');
    const pgCourse = Selector('#js-pg-course-category-heading');
    const courseOption = Selector('#js-course-category-heading');

    await t.expect(searchBarSelector.exists).ok();
    await t.expect(searchBarSelector.visible).ok()

        .click(searchBarSelector);
    await t.expect(searchOption.exists).ok();
    await t.expect(searchOption.visible).ok();

    await t.expect(popularCourses.exists).ok();
    await t.expect(popularCourses.visible).ok()

        .click(searchBarSelector)
        .typeText(searchBarSelector, 'Degree programs');
    await t.expect(pgCourse.exists).ok();
    await t.expect(pgCourse.visible).ok()

        .pressKey('ctrl+a delete')
        .typeText(searchBarSelector, 'Course');
    await t.expect(courseOption.exists).ok();
    await t.expect(courseOption.visible).ok()

        .pressKey('ctrl+a delete');
    const mySqlBasic = popularCourses.child('li:nth-child(4)').child('a');
    await t.click(mySqlBasic);
    const getWindowLocation = ClientFunction(() => window.location);
    const location = (await getWindowLocation());
    const url = await mySqlBasic.getAttribute('href');
    await t.expect(location.href).eql(url)
        .pressKey('alt+left');
}
