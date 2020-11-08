export default class BasePage {
    constructor(title) {
        this.title = title
    }
    
    open(path) {
        browser.url(path)
    }
}