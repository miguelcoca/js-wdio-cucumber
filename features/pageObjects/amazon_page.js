import testdata from '../testdata/testdata';
import BasePage from './base_Page'

class Amazon_Page extends BasePage{

    get best_sellers_banner() { return $('h1*=Best Sellers in'); }
    get toc_electronics() { return $("//a[.='Electronics']");}
    get toc_home_audio_theater() { return $("//a[.='Home Audio & Theater']");}
    get toc_headphones() { return $("//a[.='Headphones']"); }
    get search_text() {return $("input[id='twotabsearchtextbox']")}
    get search_button() {return $("//input[@value='Go']")}
    get results_section() {return $("//div[@class='a-section a-spacing-small a-spacing-top-small']")}
    
    constructor(){
        super(testdata.amazonPageTitle)
    }

    clickSearchText() {
        return this.search_text.click();
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

    searchFor(search_pattern){
        this.search_text.setValue(search_pattern);
        this.search_button.click();
    }

    resultsPageDisplayed(){
        return this.results_section.isDisplayed();
    }
}

module.exports = new Amazon_Page();