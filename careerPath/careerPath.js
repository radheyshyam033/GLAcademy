import { Selector } from "testcafe";

fixture `Automate career path and power ahead GL academy page`
.page`https://www.mygreatlearning.com/academy`

test('career path section', async t=>{
    const careerPathSection=Selector('#career-path-section')

    await t.expect(careerPathSection.exists).ok()
    await t.expect(careerPathSection.visible).ok()
    
    let totalPopularCourses=await Selector('#career_path_menu').child('a').count
    let index=0

    while(totalPopularCourses){
        const popularCourses=Selector(`#career_path_menu-item${index}`)
        const title=await popularCourses.getAttribute('title')
        const dataRel=await popularCourses.getAttribute('data-rel')
        
        await t.expect(popularCourses.exists).ok()
        // await t.visible(popularCourses.visible).notOk()

        await t.click(popularCourses)
        const countCards=await Selector(`#career-path-card-container`).child(`div.${dataRel}`).child('div').child(`div.path-item`).count
        const totalCourse=await Selector(`#career-path-card-container`).child(`div.${dataRel}`).child('div').child(`div.path-item`).child(`div`).count

        await t.expect(countCards).lte(4)

        if(title!="popular_careers"){
            for(var i=2;i<=(totalCourse+1);i++){
                let cardTitle=Selector('#career-path-card-container').child(`div.${dataRel}`).child('div').child(`div:nth-child(${i})`).child('div')
                    .child('a').child('div').child('div.path-card-content').child(`div:nth-child(1)`).child('h4')
                var headTitle=await cardTitle.innerText
                await t.expect(headTitle.toUpperCase()).eql(title.toUpperCase())
              
                let averageSalary=Selector('#career-path-card-container').child(`div.${dataRel}`).child('div').child(`div:nth-child(${i})`).child('div')
                .child('a').child('div').child('div.path-card-content').child('div.path-card-content-meta')
                await t.expect(averageSalary.exists).ok()
                await t.expect(averageSalary.visible).ok()
            }
         }   
        index++
        totalPopularCourses--;
    }
    const itSoftware=Selector('#career_path_menu-item1')
    const seeAllCareerPath=(Selector(`[href='/academy/career-paths#it-software']`).child(`div.next_icon_cont`))
    await  t.click(itSoftware)
    await t.expect(itSoftware.exists).ok()
    await t.expect(itSoftware.visible).ok()

    await t.expect(seeAllCareerPath.exists).ok()
    await t.expect(seeAllCareerPath.visible).ok()
})