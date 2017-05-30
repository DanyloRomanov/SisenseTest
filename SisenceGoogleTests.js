var googlePage = require('./Pages/GooglePage.js');
const GOOGLE_URL='https://www.google.co.uk/';
const SISENSE_SEARCH_RESULT_CAPTION='Sisense: Business Intelligence (BI) Software';
const SISENSE_LINK='https://www.sisense.com/';
const SISENSE_EXTRA_TEXT='Business Intelligence software by Sisense, the industry leader in BI for complex data - easily prepare, analyze & explore growing data from multiple sources.';
const SISENSE_PAGE_CAPTION='Business Intelligence (BI) Software | Sisense';

describe('Google Sisense tests', function () {

    it('should navigate to the Google search Page', function () {
        googlePage.go();
        expect(googlePage.getCurrentUrl()).toEqual(GOOGLE_URL);
    });

    it('should find Sisense as first searchResult', function () {
        googlePage.searchInGoogle('Sisence');
        expect(googlePage.getFirstSearchResultText()).toContain('Sisense');
    });

    it('should find text of First search result', function () {
        expect(googlePage.getFirstSearchResultText()).toEqual(SISENSE_SEARCH_RESULT_CAPTION);
    });

    it('should find link of First search result', function () {
        expect(googlePage.getFirstSearchResultLink()).toEqual(SISENSE_LINK);
    });

    it('should find extra text of First search result', function () {
        expect(googlePage.getFirstSearchResultExtraText()).toEqual(SISENSE_EXTRA_TEXT);
    });

    it('should open corresponding page when Clicked on Sisense link in Google', function () {
        expect(googlePage.navigateByFirstSearchResult()).toEqual(SISENSE_PAGE_CAPTION);
    });    
});