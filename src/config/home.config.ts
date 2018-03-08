import { PageElement } from "./site.config";

const homePageElements: PageElement[] = [
    {
      type: 'jumbo'
    },
    {
      type: 'markdownDoc',
      config: '/home.header.md'
    }
];


const homePageConfig = {
    id: "homePage",
    title: "Home",
    path: "/home",
    elements: homePageElements     
}

export default homePageConfig;


