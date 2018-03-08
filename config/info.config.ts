import { PageElement } from './site.config';

const infoPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: '/info.header.md'
    }
];

const infoPageConfig = {
    id: "infoPage",
    title: "Information",
    path: "/info",
    elements: infoPageElements     
}

export default infoPageConfig;

