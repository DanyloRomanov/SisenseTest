'use strict';

module.exports = {
    gSearch: {
        baseUrl: 'https://www.google.co.uk/',
        searchTextBox: element(by.name('q')),
        searchButton: element(by.name('btnK')),
        searchResultsFirst: element.all(by.xpath('//*[@id="rso"]//h3/a')).first(),
        searchresultFirstExtraText: element.all(by.xpath('//*[@id="rso"]//h3/following-sibling::div//span[@class="st"]')).first()
    },

    getCurrentUrl: function () {
        return browser.getCurrentUrl();
    },

    go: function () {
        browser.get(this.gSearch.baseUrl);
    },

    searchInGoogle: function (searchString) {
        var gPage = this.gSearch;

        gPage.searchTextBox.isDisplayed()
        .then(function () {
            gPage.searchTextBox.sendKeys(searchString);
        }).then(function () {
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });
    },


    getFirstSearchResultText: function () {
        return this.gSearch.searchResultsFirst.getText();
    },

    getFirstSearchResultLink: function () {
        return this.gSearch.searchResultsFirst.getAttribute('href');
    },

    getFirstSearchResultExtraText: function () {
        return this.gSearch.searchresultFirstExtraText.getText();
    },

    navigateByFirstSearchResult: function (resultSearchCriteria) {
        return this.gSearch.searchResultsFirst.click()
        .then(function () {
            return browser.getTitle();
        });
    }
};