exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['SisenceGoogleTests.js','SisenseDashBoardTests.js'],
    capabilities: {
        'shardTestFiles': false,
        'browserName': 'chrome'
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(5000);
        browser.driver.manage().timeouts().pageLoadTimeout(40000);
        browser.waitForAngularEnabled(false);        
    }
};