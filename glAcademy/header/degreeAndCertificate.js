import { ClientFunction, Selector } from "testcafe";

export async function degreeAndCertificate(t) {
    
  const degreeCertificateProg = Selector(
    "div.header-degree-certificates-cont"
  ).child("p");

  const href =
    "/?utm_source=new_campaign_noworkex&utm_medium=NoWorkEx&utm_campaign=DegreeAndCertificatesPrograms#our-courses";

  await t.expect(degreeCertificateProg.exists).ok();
  await t.expect(degreeCertificateProg.visible).ok();

  const hrefSelector = Selector("#navbarText")
    .child("ul")
    .child("li:nth-child(1)")
    .child("a")
    .getAttribute("href");

  await t
    .expect(hrefSelector)
    .eql(href)

    .click(degreeCertificateProg);

  const degreeAndCertificateUrl = `https://www.mygreatlearning.com${href}`;
  const getWindowLocation = ClientFunction(() => window.location);
  const location = await getWindowLocation();

  await t
    .expect(await location.href)
    .eql(degreeAndCertificateUrl)
    .closeWindow();
}
