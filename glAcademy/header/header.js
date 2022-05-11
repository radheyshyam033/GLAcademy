import { degreeAndCertificate } from "./degreeAndCertificate";
import { login } from "./login";
import { logo } from "./logo";
import { navbar } from "./navbar";
import { searchBar } from "./searchBar";
import { signup } from "./signup";

export default async function header(t) {
        await navbar(t);
        await logo(t);
        await degreeAndCertificate(t);
        await login(t)
        await signup(t);
        await t.wait(5000)
        await searchBar(t);
    
}


