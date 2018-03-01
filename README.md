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


# TODO

* Impliment this: https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
    * Its file spliting, it allows each page to be its own bundle. Will dramaticly decrease loading times

* Impliment page transition animations: https://github.com/reactjs/react-transition-group
    * Functionality is the most important of course, but who doesn't want some slick transition animations?

* Impliment a photo gallery on the home page

* Make the site look generally nice