import homePageConfig from "./home.config";
import infoPageConfig from "./info.config";

const siteConfig: Page[] = [
  {
    id: homePageConfig.id,
    title: homePageConfig.title,
    path: "/home",
    pageComponents: homePageConfig.elements
  },
  {
    id: infoPageConfig.id,
    title: infoPageConfig.title,
    path: "/info",
    pageComponents: infoPageConfig.elements
  }
]

export default siteConfig;

interface Page {
  id: string;
  title: string;
  path: string;
  pageComponents: any;
}

export interface PageElement {
  type: string;
  config?: any;
}