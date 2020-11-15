import testdata from '../testdata/testdata';
import BasePage from './basePage';
import amazonBelt from './amazonBelt';

class AmazonHome extends BasePage{
    get amazonLogo() {return $('#nav-logo-sprites');}

    constructor(pageUrl){
        super(testdata.AmazonHome+pageUrl)
    }

    isAmazonLogoVisible(){
        return this.amazonLogo.isDisplayed();
    }

    searchForItem(item){
        amazonBelt.searchForItem(item);
    }
}

export default new AmazonHome('/');