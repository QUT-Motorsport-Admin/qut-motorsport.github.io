import { PageElement } from './site.config';

const testPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: 'test.header.md'
    },
    {
      type: "jumbo"
    }
];

const testPageConfig = {
    id: "testPage",
    title: "TEST",
    path: "/test",
    elements: testPageElements     
}

export default testPageConfig;

