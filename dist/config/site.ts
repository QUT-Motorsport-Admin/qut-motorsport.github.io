import homePage from "./home.config";

const pagesConfig: IPageConfig[] = [
    {
        id: homePage.id,
        name: homePage.name,
        url: "./home.config"
    }
]

const siteConfig = {
    title: "QUT Motorsport",
    pages: pagesConfig
}

export default siteConfig;

// ---------------

interface IPageConfig {
    id: String,
    name: String,
    url: String
}