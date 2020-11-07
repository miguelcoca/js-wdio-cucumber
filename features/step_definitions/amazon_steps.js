import { Given, When, Then } from 'cucumber';
const Amazon_Page = require('../../features/pageObjects/Amazon_page')
const test_data = require('../../features/testdata/testdata.js')


Given(/^I am in Amazon Store Home Page$/, function () {
    browser.url(test_data.amazonURL);
    Amazon_Page.clickSearchText();
    expect(browser.getUrl()).toBe(test_data.amazonURL);
});

Given (/^I browse to the Amazon Best Sellers page$/, function () {
    browser.url(test_data.amazonURL+test_data.bestSellersURL);
});

When (/^I browse for headphones category from the departments TOC$/, function () {
    Amazon_Page.browseToBestSellinhHeadphones();
});

Then (/^I should see "([^"]*)" entitled details result page$/, function (title) {
    expect(Amazon_Page.isBestSellingHeadphonesDisplayed(title)).toBe(true);
});

When (/^I search for "([^"]*)"$/, function (search_pattern) {
    Amazon_Page.searchFor(search_pattern);
});
Then (/^I should see poneer headphones in the result page$/, function () {
    expect(Amazon_Page.resultsPageDisplayed()).toBe(true);
});