'use strict';

module.exports = {
    sPage: {
        url: 'https://www.sisense.com',
        sisenseDashboardLink: element(by.linkText('Sisense Dashboard')),
        openDashboardButton: element(by.xpath('//a[.="open dashboard"]')),
        dashBoardFrame: element(by.xpath('//iframe[@class="fancybox-iframe"]'))

    },

    dPage: {
        visitsSpan: element(by.xpath('//span[contains(text(),"VISITS")]')),
        clearSelectionSpan: element(by.xpath("//widget-title[@title='MARKETING CHANNEL BREAKDOWN']/parent::div/following-sibling::widget-toolbar//span[contains(text(),'Clear Selection')]")),
        clearSelectionContainer: element(by.xpath("//widget-title[@title='MARKETING CHANNEL BREAKDOWN']/parent::div/following-sibling::widget-toolbar//span[contains(text(),'Clear Selection')]/parent::div"))
    },

    getCurrentUrl: function () {
        return browser.getCurrentUrl();
    },

    navigateToSisenceDashboard: function () {
        return this.sPage.sisenseDashboardLink.click()
        .then(function () {
            return browser.getCurrentUrl();
        });
    },

    goInsigeDashboard: function () {
        var page = this.sPage;
        var dash = this.dPage;
        var until = protractor.ExpectedConditions;

        page.openDashboardButton.click()
        .then(function () {
            browser.wait(until.presenceOf(page.dashBoardFrame), 20000, 'Element taking too long to appear in the DOM');
            browser.switchTo().frame(0);
            browser.wait(until.presenceOf(dash.visitsSpan), 30000, 'Element taking too long to appear in the DOM');
        });
    },

    clearMarketingChannelBreakdown: function () {
        var dash = this.dPage;
        var until = protractor.ExpectedConditions;

        browser.wait(until.presenceOf(dash.clearSelectionSpan), 10000, 'Element taking too long to appear in the DOM')
               .then(function () {
                   browser.actions().mouseMove(dash.clearSelectionSpan).perform();
                   browser.wait(until.visibilityOf(dash.clearSelectionSpan), 5000, 'Element taking too long to appear in the DOM');
                   dash.clearSelectionSpan.click();
               });
    },

    getStyleOfElement: function (element) {
        return element.getAttribute('style');
    }
};