import testdata from '../testdata/testdata';
import BasePage from './basePage';
import amazonBelt from './amazonBelt';

class Amazon_Page extends BasePage{

    get best_sellers_banner() { return $('h1*=Best Sellers in'); }
    get toc_electronics() { return $("//a[.='Electronics']");}
    get toc_home_audio_theater() { return $("//a[.='Home Audio & Theater']");}
    get toc_headphones() { return $("//a[.='Headphones']"); }
    
    constructor(){
        super(testdata.amazonPageTitle)
    }

    clickTOCElectronics(){
        return this.toc_electronics.click();
    }

    clickTOCHomeAudioTheater(){
        return this.toc_home_audio_theater.click();
    }

    clickTOCHeadphones(){
        return this.toc_headphones.click();
    }

    browseToBestSellinhHeadphones(){
        this.clickTOCElectronics();
        this.clickTOCHomeAudioTheater();
        this.clickTOCHeadphones();
    }

    isBestSellingHeadphonesDisplayed(expected_text){
        return this.best_sellers_banner.getText() == expected_text;
    }
}

module.exports = new Amazon_Page();