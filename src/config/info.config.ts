import { PageElement } from './site.config';

const infoPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: '/info.header.md'
    }
];

const infoPageConfig = {
    id: "idPage",
    title: "Information",
    elements: infoPageElements     
}

export default infoPageConfig;

