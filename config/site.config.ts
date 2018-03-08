import homePageConfig from "./home.config";
import infoPageConfig from "./info.config";
import testPageConfig from "./test.config";

const siteConfig: Page[] = [
  {
    id: homePageConfig.id,
    title: homePageConfig.title,
    path: homePageConfig.path,
    pageComponents: homePageConfig.elements
  },
  {
    id: infoPageConfig.id,
    title: infoPageConfig.title,
    path: infoPageConfig.path,
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