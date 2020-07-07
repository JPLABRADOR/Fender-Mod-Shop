var fender = {}
var modData = require('../testAssets/fenderModShopArray')
var editData = require('../testAssets/fenderModShopEditArray')
var quantityData = require('../testAssets/fenderModShopQuantityArray')

module.exports = {
    beforeEach: browser => {
        fender = browser.page.fenderModShopPage()
        fender.maximizeWindow()
        fender.navigate()
    },
    afterEach: browser => {
        fender.end()
    },

    'Test 1 - Verify Jazz Bass Mod Shop Page UI Functionality': browser => {
        fender
            .navigateToModPage()
            .checkBassPageFunctionality()
            .refreshAndVerifyCartQuantity("1")
    },

    'Test 2 - Verify Shopping Cart Details and Remove From Cart Functionality': browser => {
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
            .deleteBassShoppingCart()
            .verifyBassShoppingCart()
            .deleteBassShoppingCart()
            .verifyEmptyShoppingCart()
    },
    
    'Test 3 - Verify Cart Quantity Selector Functionality': browser => {
        fender
            .navigateToModPage()
            .bassMod(editData[0])
            .refreshAndVerifyCartQuantity("1")
            .navigateToShoppingCart()
            .verifyBassShoppingCart()

        quantityData.forEach(test => {
        fender
            .verifyQuantitySelector(test)
        })

        fender
            .verifyBassShoppingCart()
    },
    
    'Test 4 - Verify Edit and Update Cart Functionality': browser => {
        fender
            .navigateToModPage()
            .bassMod(editData[0])
            .refreshAndVerifyCartQuantity("1")
            .navigateToShoppingCart()
            .editBassWithReset(editData[0])
            .editBassColor()
            .updateCart()
    }

}