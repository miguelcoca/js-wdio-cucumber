# JS - webdriverio - cucumber

### Requirements
``` 
Recommended MacOSX Catalina 10.15.7 & brew package manager not tested in windows
it should work flawlesly if dependencies are satisfied
Chrome Browser Version 86.0.4240.183

Node JS v15.1.0+ 
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
mike@MacBook-Pro:~/work$ git clone https://github.com/miguelcoca/AmazonSample.git
Cloning into 'Fluen'...
Username for 'https://github.com':
etc..
```
### Install Project 
```
mike@MacBook-Pro:~/work$ npm install
```
### Running Tests
```
mike@MacBook-Pro:~/work$ npm test
 
mike@MacBook-Pro:~/work$ npm test -- --spec=features/amazonBestSellerHeadphones.feature 
```