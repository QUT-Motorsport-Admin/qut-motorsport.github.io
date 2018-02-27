export const homePageConfig: PageElement[] = [
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

]

export default interface PageElement {
  type: string;
  config?: any;
}


