import testdata from '../testdata/testdata'
import basepage from './basePage'

class AmazonBelt{
    get amazonBeltContainer(){return $('#nav-belt');}
    get amazonHamburgerMenu(){return $('#nav-hamburger-menu')}
    get amazonNavSearchField(){return $('#twotabsearchtextbox');}
    get amazonNavSearchSubmit(){return $('#nav-search-submit-text');}

    searchForItem(item){
        this.amazonNavSearchField.setValue(item);
        this.amazonNavSearchSubmit.click();
    }

    clickSearchText(){
        this.amazonNavSearchSubmit.click();
    }

}

module.exports = new AmazonBelt('/')