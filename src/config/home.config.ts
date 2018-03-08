import { PageElement } from "./site.config";

const homePageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: '/home.header.md'
    }
];


const homePageConfig = {
    id: "homePage",
    title: "Home",
    elements: homePageElements     
}

export default homePageConfig;


