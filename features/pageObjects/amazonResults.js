import testdata from '../testdata/testdata';
import basePage from './basePage';
import amazonBelt from './amazonBelt'

class AmazonResults{
    get amazonResultsTitle(){return $('[cel_widget_id]  .a-color-state.a-text-bold');}

    constructor(){
    }

    resultsPageDisplayed(serchCriteria){
        return this.amazonResultsTitle.getText().includes(serchCriteria);
    }
}

module.exports = new AmazonResults();