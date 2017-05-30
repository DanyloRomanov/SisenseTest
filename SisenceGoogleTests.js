var googlePage = require('./Pages/GooglePage.js');
var sisPage = require('./Pages/SisensePage.js');

describe('Protractor Test', function () {

    it('should navigate to the Google search Page', function () {
        googlePage.go();
        expect(googlePage.getCurrentUrl()).toEqual('https://www.google.co.uk/');
    });

    it('should find Sisense as first searchResult', function () {
        googlePage.searchInGoogle('Sisence');
        expect(googlePage.getFirstSearchResultText()).toContain('Sisense');
    });

    it('should find text of First search result', function () {
        expect(googlePage.getFirstSearchResultText()).toEqual('Sisense: Business Intelligence (BI) Software');
    });

    it('should find link of First search result as https://www.sisense.com/', function () {
        expect(googlePage.getFirstSearchResultLink()).toEqual('https://www.sisense.com/');
    });

    it('should find extra text of First search result', function () {
        expect(googlePage.getFirstSearchResultExtraText()).toEqual('Business Intelligence software by Sisense, the industry leader in BI for complex data - easily prepare, analyze & explore growing data from multiple sources.');
    });

    it('should open  https://www.sisense.com/ when Clicked on Sisense link in Google', function () {
        expect(googlePage.navigateByFirstSearchResult('Sisense: Business Intelligence (BI) Software')).toEqual('Business Intelligence (BI) Software | Sisense');
    });

    it('should open https://www.sisense.com/demo/ when Clicked on Sisense link in Google', function () {
        expect(sisPage.navigateToSisenceDashboard()).toEqual('https://www.sisense.com/demo/');
    });


    it('should find OpenDashBoard button  on the Page', function () {
        expect(sisPage.sPage.openDashboardButton.isPresent()).toEqual(true);
    });

    it('should open dashboardTestPage when OpenDashboardButton Clicked', function () {
        sisPage.goInsigeDashboard();
        expect(sisPage.getCurrentUrl()).toEqual('https://www.sisense.com/demo/');
    });

    it('should hide clear selection container for MARKETING CHANNEL BREAKDOWN chart when  clear button clicked', function () {
        sisPage.clearMarketingChannelBreakdown();
        expect(sisPage.getStyleOfElement(sisPage.dpage.clearSelectionContainer)).toEqual('display: none;');
    });
});