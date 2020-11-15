# JS - webdriverio - cucumber

### Requirements
``` 
Recommended MacOSX Catalina 10.15.7 & brew package manager / Windows 10
it should work flawlesly if dependencies are satisfied
Chrome Browser Version 86.0.4240.183

Node 15.1.0 
npm 7.0.8
```
#### Resources
```
https://nodejs.org/en/

https://webdriver.io/
```
#### Install NodeJS
```
mike@MacBook-Pro:~/work$ brew install node
```

```
mike@MacBook-Pro:~/work$ node --version
v6.3.1
```

#### Install Git
```
mike@MacBook-Pro:~/work$ brew install git
```
```
mike@MacBook-Pro:~/work$ git --version
git version 2.24.3 (Apple Git-128)
```
#### Clone repo and stuff
```
mike@MacBook-Pro:~/work$ git clone https://github.com/miguelcoca/js-wdio-cucumber.git
Cloning into 'repofoldername'...
Username for 'https://github.com':
etc..
```
#### Install Project 
```
mike@MacBook-Pro:~/work$ npm install
```
#### Running Tests
from console or terminal in repo folder 

```
mike@MacBook-Pro:~/work$ npm test
 
mike@MacBook-Pro:~/work$ npm test -- --spec=features/amazonBestSellerHeadphones.feature 
```
![alt text](https://github.com/miguelcoca/js-wdio-cucumber/blob/main/Screenshot%202020-11-08%20140543.png?raw=true)

#### Reporting

Project leverages Dot, Spec and Allure Report 

Note for allure report make sure you have installed java and defined JAVA environment variables

```
mike@MacBook-Pro:~/work$ allure generate ./allure-results/ 
```
Generate Report force clean previous and Open Allure Report
```
mike@MacBook-Pro:~/work$  allure generate .\allure-results\ --clean && allure open
```
![alt text](https://github.com/miguelcoca/js-wdio-cucumber/blob/main/Screenshot%202020-11-08%20135329.png?raw=true)
![alt text](https://github.com/miguelcoca/js-wdio-cucumber/blob/main/Screenshot%202020-11-08%20135417.png?raw=true)

#### TODO
```
Complete multi Browser, Headless support, maybe Browser stack like service so far this is not fully working only Crome support was fully added

Add support for remote execution such as Saucelabs, applitools or similar services.


```
