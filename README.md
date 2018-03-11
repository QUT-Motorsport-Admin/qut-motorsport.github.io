![QUTMS_Banner](https://raw.githubusercontent.com/Technosasquach/QUTMS_Master/master/src/qutmsBanner.jpg)

# QUT Motorsport - Website

This is the main website for QUT Motorsport

# Installation

1. Clone the repository into your chosen directory
    * `git clone https://github.com/QUT-Motorsport/qut-motorsport.github.io.git`
2. Install the dependencies required with `npm install`
3. Launch the website in development mode `npm start`
4. To bundle the website ready for deployment `npm run build`

<b>NOTE:</b> This will get you into the master branch. This is not suitable to develop on, or to push too. [https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

This is the workflow that we are going to use. Thus, you will need to change your working directory into the develop branch.

Depending on what GUI/CLI your using, there will be a different set of commands/clicks that you will need to do. Have a go at googling how to. Otherwise ask Jonn.

# TODO

* Impliment this: https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
    * Its file spliting, it allows each page to be its own bundle. Will dramaticly decrease loading times

* Impliment page transition animations: https://github.com/reactjs/react-transition-group
    * Functionality is the most important of course, but who doesn't want some slick transition animations?

* Impliment a photo gallery on the home page

* Make the site look generally nice

# The Need-To-Know

For anyone wishing to get involved with development of QUTMS React website, here is a list of things to research:

    * Node Package Manager (NPM)
    * React
    * Typescript
    * ES6 JavaScript
    * GitHub
    * Less
    * Basic webpack configuration
    * Markdown

If you have any questions, ask James for anything introductory. For hard questions please go to Jonn.

*We are looking for people to assist in front-end design and styling, content creation and testing, so if the thought of learning the ins and outs of React makes you want to cry, we can use your help in the areas that make us devs want to cry :)*

# How to update site content

The site pages and the content on each page can be updated and configured entierly from within the `config` folder. No files outside this folder need to be edited.

The contents of the config folder will looks similar to as follow:

    config
        |-home.config.ts
        |-home.header.md
        |-home.coreContent.md
        |-home.footer.md
        |-info.config.ts
        |-info.header.md
        |-site.config.ts

`home` and `info` are both seperate pages on the website. Each page has a `config.ts` file and any number of `.md` files.

A file with the file type extension `.md` is a Markdown file. Markdown is a mark up language with simple syntax that allows for fast and easy editing of the displayed text. [Follow this link for the documentation on Markdown syntax.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markdown Cheat Sheet")

A file with the file type extension `.ts` is a Typescript file, this is where the structure of the page is outlined. The following is an example of the contents of `home.config.ts`:
 
    import { PageElement } from "./site.config";

    const homePageElements: PageElement[] = [
        {
            type: 'jumbo'
        },
        {
            type: 'markdownDoc',
            config: 'home.header.md'
        },
        {
            type: 'markdownDoc',
            config: 'home.coreContent.md'
        },
        {
            type: 'markdownDoc',
            config: 'home.footer.md'
        }
    ];

    export default homePageElements;

`homePageElements` is a list of the elements that will be displayed on the home page. The `: PageElement[]` simply tells the app that `homePageElements` is a list of `pageElement`s. Anything inside the square brakests that appear after the equals sign is part of the list of elements. Each seperate element is enclosed in curly brackets, and all except the last element in the list is proceded by a comma. Each element has a `type:` and `config:`. `type` tells the webpage which element to load, and `config`, which is only required for some elements, is where conifguration variables for the element are passed in. For example, with a `markdownDoc` element, the name of the markdown document to be loaded is passed in. Every page config file needs to import the type `Page Element` from `site.config.ts`. Add `import { PageElement } from "./site.config";` to the top of every new page config file. To add new page elements, add a new set of brackets to the list and fill in the type of element and the appropriate config information that element requires. To reorder existing elements, simply change the order in which the element appears on the `pageElements` list.

`site.config.ts` is the file in which the pages of the site are declared. The following is an example of the contents of `site.config.ts`:

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

The page elements for each page need to be imported from their respective page config files. When adding a new page, add `import pageElement from "./pageName.config";` to the top of the `site.config.ts` file. `siteConfig` is a list of the site's pages. `: Page[]` simply tells the site that `siteConfig` is a list of `Page`s. Anything inside the square brakests after the equals sign is part of the list of pages. Each seperate page is enclosed in curly brackets, and all except the last page in the list is proceded by a comma. Each page has `id:`, `title:`, `path:` and `pageElements"`, all of which are always required. `id` is the page page ID, `title` is the page title, `path` is the path that will appear in the URL when navigating to that page, and `pageElements` is the list of elements that will appear on the page, which imports from the page's config file. To add a new page, add a new bracket containing the information required. To change the order in which pages are displayed, simply rearrange the order in which the pages appear on the list.

Once the site structure has been updated, push the changes to the `master` remote repository. 