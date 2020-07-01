var fender = {}
var modData = require('../testAssets/fenderModShopArray')
var editData = require('../testAssets/fenderModShopEditArray')

module.exports = {
    beforeEach: browser => {
        fender = browser.page.fenderModShopPage()
        fender.maximizeWindow()
        fender.navigate()
    },
    afterEach: browser => {
        fender.end()
    },

    'Test 1 - UI Functionality on the Jazz Bass Mod Shop Page': browser => {
        fender
            .navigateToModPage()
            .checkBassPageFunctionality()
            .refreshAndVerifyCartQuantity("1")
    },

    'Test 2 - Add and Remove Basses': browser => {
        fender
            .navigateToModPage()

        modData.forEach(test => {
            fender
                .bassMod(test)
        })

        fender
            .refreshAndVerifyCartQuantity("2")
            .navigateToShoppingCart()
            .verify2BassShoppingCart()
            .verifyEmptyShoppingCart()
    },
    
    'Test 3 - Add, Edit and Remove Basses': browser => {
        fender
            .navigateToModPage()
        fender
            .bassMod(editData[0])
        fender
            .refreshAndVerifyCartQuantity("1")
            .navigateToShoppingCart()
            .verifyBassShoppingCart()
            .navigateToEditBassReset(editData[0])
            .verifyEmptyShoppingCart()
    }

}