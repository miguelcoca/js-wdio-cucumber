import { Given, When, Then } from 'cucumber';
import amazonHome from '../pageObjects/amazonHome';
import Amazon_Page from '../pageObjects/amazonBestSellersPage';
import AmazonBelt from '../pageObjects/amazonBelt';
import AmazonResults from '../pageObjects/amazonResults';
import testdata from '../testdata/testdata'

Given(/^I am in Amazon Store Home Page$/, function () {
    browser.url(testdata.amazonURL);
    AmazonBelt.clickSearchText();
    expect(browser.getUrl()).toBe(testdata.amazonURL);
});

Given (/^I browse to the Amazon Best Sellers page$/, function () {
    browser.url(testdata.amazonURL+testdata.bestSellersURL);
});

When (/^I browse for headphones category from the departments TOC$/, function () {
    Amazon_Page.browseToBestSellinhHeadphones();
});

Then (/^I should see "([^"]*)" entitled details result page$/, function (title) {
    expect(Amazon_Page.isBestSellingHeadphonesDisplayed(title)).toBe(true);
});

When (/^I search for "([^"]*)"$/, function (search_pattern) {
    amazonHome.searchForItem(search_pattern);
});
Then (/^I should see "([^"]*)" in the result page$/, function (pattern) {
    expect(AmazonResults.resultsPageDisplayed(pattern)).toBe(true);
});