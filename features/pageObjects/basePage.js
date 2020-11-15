import testdata from '../testdata/testdata'

export default class BasePage {
    constructor(pageUrl) {
        this.Url = pageUrl
    }
    
    open()
    {
        browser.url(this.Url);    
    };

    open(path) {
        browser.url(path);
    };
}