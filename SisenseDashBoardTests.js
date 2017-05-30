var sisPage = require('./Pages/SisensePage.js');
const SISENSE_DEMO_PAGE_LINK='https://www.sisense.com/demo/';

describe('Sisense Dashboard tests', function () {

    it('should open demo page when Clicked on Sisence dashbaord link', function () {
        expect(sisPage.navigateToSisenceDashboard()).toEqual(SISENSE_DEMO_PAGE_LINK);
    });

    it('should find OpenDashBoard button on the Page', function () {
        expect(sisPage.sPage.openDashboardButton.isPresent()).toEqual(true);
    });

    it('should open dashboardTestPage when OpenDashboardButton Clicked', function () {
        sisPage.goInsigeDashboard();
        expect(sisPage.getCurrentUrl()).toEqual(SISENSE_DEMO_PAGE_LINK);
    });

    it('should hide clear selection container for MARKETING CHANNEL BREAKDOWN chart when  clear button clicked', function () {
        sisPage.clearMarketingChannelBreakdown();
        expect(sisPage.getStyleOfElement(sisPage.dPage.clearSelectionContainer)).toEqual('display: none;');
    });
});