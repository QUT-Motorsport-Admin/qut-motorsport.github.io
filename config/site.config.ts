import homePageElements from "./home.config";
import infoPageElements from "./info.config";

const siteConfig: Page[] = [
  {
    id: "homePage",
    title: "Home",
    path: "/home",
    pageElements: homePageElements   
  },
  {
    id: "infoPage",
    title: "Information",
    path: "/info",
    pageElements: infoPageElements     
  }
]

export default siteConfig;

interface Page {
  id: string;
  title: string;
  path: string;
  pageElements: any;
}

export interface PageElement {
  type: string;
  config?: any;
}