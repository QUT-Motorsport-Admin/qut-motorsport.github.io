
export const homePageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: './home.md'
    },
    {
      type: 'markdownDoc',
      config: './home.md'
    },
    {
      type: 'markdownDoc',
      config: './home.md',
    }
];

const homePageConfig = {
    id: "Home Page",
    name: "Home",
    elements: homePageElements     
}

export default homePageConfig;

interface PageElement {
  type: string;
  config?: any;
}


