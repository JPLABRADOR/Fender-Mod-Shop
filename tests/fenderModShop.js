var fender = {}
var angleData = require('../testAssets/fenderModShopBassAngleArray')
var modData1 = require('../testAssets/fenderModShopArray1')
var modData2 = require('../testAssets/fenderModShopArray2')
var editData = require('../testAssets/fenderModShopEditArray')
var quantityData = require('../testAssets/fenderModShopQuantityArray')
var bodData = require('../testAssets/fenderModShopBodyArray')
var orienData = require('../testAssets/fenderModShopOrientationArray')
var neckData1 = require('../testAssets/fenderModShopNeckShapeCloseWindowArray')
var neckData2 = require('../testAssets/fenderModShopNeckShapeArray')
var fboardData = require('../testAssets/fenderModShopFingerboardArray')
var pickguardData = require('../testAssets/fenderModShopPickguardArray')
var pickupsData1 = require('../testAssets/fenderModShopPickupsCloseWindowArray')
var pickupsData2 = require('../testAssets/fenderModShopPickupsArray')

module.exports = {
    beforeEach: browser => {
        fender = browser.page.fenderModShopPage()
        fender
            .maximizeWindow()
            .navigate()
    },
    afterEach: browser => {
        fender.end()
    },
    'Test 1 - Verify Jazz Bass Mod Shop Page UI Functionality': browser => {
        fender.verifyBassPageUI(angleData, orienData, bodData, neckData1, 
            neckData2, fboardData, pickguardData, pickupsData1, pickupsData2)
    },
    'Test 2 - Verify Cart Details and Remove From Cart Functionality': browser => {
        fender.verifyCartDetailsAndRemoval(modData1, modData2)
    },
    'Test 3 - Verify Cart Quantity Selector Functionality': browser => {
        fender.verifyCartQuantitySelector(editData, quantityData)
    },
    'Test 4 - Verify Edit and Update Cart Functionality': browser => {
        fender.verifyEditAndUpdateCart(editData)
    }
}