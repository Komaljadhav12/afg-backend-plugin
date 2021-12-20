# Automation Framework Generator (AFG) - User Guide

The idea behind the AFG is to solve the problem of – evaluating multiple tools every time and coming up with a solution that’s the best fit for the client requirements for a Test Automation solution. The main purpose of this is to save the time spent in the evaluation of multiple tools and how they fit into existing client test environments right from integration with Cloud / local infrastructure in place.

## Features

    * AFG helps tie up our consulting engagements with their application, reducing the time to go from analysis to implementation drastically.
    * It provides for a quick and easy way to generate a whole test harness.
    * End to End solution for automation – web & API automation.
        > An option of choosing the desired programming language.
        > An option of choosing one or more reporting tools.
        > Reduce execution time significantly by making the framework scalable.

### Automation Framework

![Automation_Framework_Diagram] (https://drive.google.com/file/d/1Yd2SzHJ-bzL_Fsi-bgLB3iJEcVAopwUO/view?usp=sharing)

## Dependancies For The Framework Generation

    1. Node JS
    2. Python (v3)
    3. Mysql

## Steps to up the server

1. take clone from Git,
   [GitHub] (https://github.com/Komaljadhav12/afg-backend-plugin.git)

2. run command "npm i"

3. Up the server, "npm start"

# Implemented Frameworks

![Main_Folder_structure] (https://drive.google.com/file/d/1WTRBz2p7gLPMKouEPf88eGyNljzQtRuy/view?usp=sharing)

## Cypress Framework:

    * Cypress framework is a JavaScript-based end-to-end testing framework built on top of Mocha – a feature-rich JavaScript test framework running on and in the browser, making asynchronous testing simple and convenient.

    * Javascript language has the framework cypress. Cypress is itself framework and library.

    * We can add multiple reporting option like
        1) mochawesome
        2) Junit
        3) cypress-mochawesome-reporter

**API Call for generating framework**

    Post request -> localhost:4000/generate-cypress

    {
    "packageManager": "npm"
    "framework": "cypress",
    "version" : "7.7.0",
    "reporter" : "mochawesome"
    }

![Folder_Structure_after_generation] (https://drive.google.com/file/d/14PjsAcfYXxWKI21aFZVr7OUKk70GDb6m/view?usp=sharing)

## WebdriverIO Framework:

    * WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

    * Javascript language has the framework webdriverio. webdriverio is framework and it has library as Mocha, jasmine etc.

    * We can add multiple reporting option like
        1) mochawesome
        2) Junit
        3) Spec
        4) Allure

**API Call for generating framework**

    Post request -> localhost:4000/generate-webdriverio

    {
    "packageManager": "npm",
    "framework": "mocha",
    "version" : "v7",
    "reporter" : "allure"
    }

![Folder_Structure_after_generation] (https://drive.google.com/file/d/1U8yg5mx-2pz_eWMcqDVg6qO_DbsntRsZ/view?usp=sharing)

## Robot Framework:

    * Robot Framework is an open source test automation framework for acceptance testing and acceptance test-driven development.
    * The most popular library used with Robot Framework is Selenium Library used for web development & UI testing.
    * It supports keyword-driven, behaviour-driven and data-driven style of writing test cases.
     * Python language has the robot as a framework. webdriverio is framework and it has library as selenium, selenium2 & requests etc.

**API Call for generating framework**

    Post request -> localhost:4000/generate-robot

    {
    "packageManager": "pip"
    "framework": "robotframework",
    "library": "selenium"
    "version" : "4.1.1",
    "reporter" : "robot-reporter"
    }

![Folder_Structure_after_generation] (https://drive.google.com/file/d/16bvJXfvjPVOfdmJLyJuNUJ-UvibmIQNQ/view?usp=sharing)

## Folder Structure of the Framework

### Cypress

    1) cypress - This folder saves all the information of the cypress. It includes some other folders also.

        * fixtures -   Fixtures are used as  external pieces of static data that can be used by your tests.

        * Plugins - The plugins file is a special file that executes in Node before the project is loaded, before the browser launches, and during your test execution.

        * integration - We can store the ttest files in this.

        * Support - By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file. We do this purely as a convenience mechanism so you don't have to import this file in every single one of your spec files.

    2) Mochawesome-report - Generated reports has been save in this folder.

    After the execution of cypress test it will automatically generate the report screenshot and videos folder.

### Robot Framework

    1) Res - Resource folder will be used for the writing the reusable code.

    2) TestSuite - This is used to write our robot test script.

    3) lib - Library folder is used to store the custom library.

    4) Variables - This is used to store the xpath and the testdata.

    5) External files - This folder is used to store the files like .apk that provoded by clients.

### WebdriverIO

    1) allure-results - This folder will store the data of allure reporter.

    2) test - This folder will include the tests files.

    3) wdio.conf.js - This file will include all the configuration like reporter, framework etc
