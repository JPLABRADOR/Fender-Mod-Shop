var bassModCommands = {
    bassAngleButtonsSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.bassAngleType)

                    .getAttribute(test.bassAngleType, 'class', function (result) {
                        var bassAnglePick = result.value

                        if (bassAnglePick === test.bassAngleAttribute) {
                            self
                                .verify.attributeContains(test.bassAngleType, 'class', 'fc-view-active', 
                                    test.bassAngleMessage)
                        } else {
                            self
                                .verify.not.attributeContains(test.bassAngleType, 'class', 'fc-view-active', 
                                    "BUG: Incorrect bass image selected: " + test.bassAngleChoiceString)
                        }

                    })
            })
        return this
    },
    navigateToOrientationSelection: function () {
        this
            .moveToElement("@fenderBrandLogo", undefined, undefined)
            .waitForElementVisible("@orientation", 
                "VERIFIED: 'Orientation' attribute header present")
            .click("@orientation")
        return this
    },
    orientationSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.orienType)

                    .getText(test.orienChoice, function (result) {
                        var orienPick = result.value

                        if (orienPick === test.orienChoiceString) {
                            self
                                .verify.containsText(test.orienChoice, test.orienChoiceString, 
                                    "VERIFIED: " + test.orienChoiceString + " orientation choice")
                        } else {
                            self
                                .verify.not.containsText(test.orienChoice, test.orienChoiceString, 
                                    "BUG: " + test.orienChoiceString + " incorrect orientation choice")
                        }

                    })
            })
        return this
    },
    navigateToBodySelection: function () {
        this
            .waitForElementVisible("@body", 
                "VERIFIED: 'Body' attribute header visible")
            .click("@body")
            .moveToElement("@reset", undefined, undefined)
            .waitForElementNotVisible("@orientationText", 
                "VERIFIED: 'Orientation' flyout panel header hidden")
            .waitForElementPresent("@bodyMenuActive", 
                "VERIFIED: 'Body' flyout menu active")
        return this
    },
    bodySelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.bodyType)

                    .getText(test.bodyChoice, function (result) {
                        var bodyPick = result.value

                        if (bodyPick === test.bodyChoiceString) {
                            self
                                .verify.containsText(test.bodyChoice, test.bodyChoiceString, 
                                    "VERIFIED: " + test.bodyChoiceString + " swatch choice")
                        } else {
                            self
                                .verify.not.containsText(test.bodyChoice, test.bodyChoiceString, 
                                    "BUG: " + test.bodyChoiceString + " incorrect swatch choice")
                        }
 
                    })
            })
        return this
    },
    navigateToNeckShapeSelection: function () {
        this
            .waitForElementVisible("@neckShape", 
                "VERIFIED: 'Neck Shape' attribute header visible")
            .click("@neckShape")
            .waitForElementNotVisible("@bodyText", 
                "VERIFIED: 'Body' flyout panel header hidden")
            .waitForElementPresent("@neckShapeMenuActive", 
                "VERIFIED: 'Neck Shape' flyout menu active")
        return this
    },
    neckShapeCloseWindowSelection: function (data) {
        this
            data.forEach(test => {
                this
                    .click(test.neckType)
                    .waitForElementVisible("@closePopUp", 
                        "VERIFIED: 'Neck shape' pop-up OK button visible")
                    .click("@closePopUp")
                    .verify.containsText(test.neckChoice, test.neckChoiceString, 
                        "VERIFIED: " +  test.neckChoiceString + " neck shape choice")
                    .waitForElementNotPresent("@dialogBoxClosed", 
                        "VERIFIED: 'Neck shape' pop-up closed")
            })
        return this
    },
    neckShapeSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.neckType)

                    .getText(test.neckChoice, function (result) {
                        var neckPick = result.value

                        if (neckPick === test.neckChoiceString) {
                            self
                                .verify.containsText(test.neckChoice, test.neckChoiceString, 
                                    "VERIFIED: " +  test.neckChoiceString + " neck shape choice")
                        } else {
                            self
                                .verify.not.containsText(test.neckChoice, test.neckChoiceString, 
                                    "BUG: " +  test.neckChoiceString + " incorrect neck shape choice")
                        }

                    })
            })
        return this
    },
    navigateToFingerboardSelection: function () {
        this
            .waitForElementVisible("@fingerboard", 
                "VERIFIED: 'Fingerboard' attribute header visible")
            .click("@fingerboard")
            .waitForElementNotVisible("@neckShapeText", 
                "VERIFIED: 'Neck Shape' flyout panel header hidden")
            .waitForElementPresent("@fingerBoardMenuActive", 
                "VERIFIED: 'Fingerboard' flyout menu active")
        return this
    },
    fingerboardSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.fboardType)

                    .getText(test.fboardChoice, function (result) {
                        var fboardPick = result.value

                        if (fboardPick === test.fboardChoiceString) {
                            self
                                .verify.containsText(test.fboardChoice, test.fboardChoiceString, 
                                    "VERIFIED: " +  test.fboardChoiceString + " fingerboard choice")
                        } else {
                            self
                                .verify.not.containsText(test.fboardChoice, test.fboardChoiceString, 
                                    "BUG: " +  test.fboardChoiceString + " incorrect fingerboard choice")
                        }

                    })
            })
        return this
    },
    navigateToPickguardSelection: function () {
        this
            .waitForElementVisible("@pickguard", 
                "VERIFIED: 'Pickguard' attribute header visible")
            .click("@pickguard")
            .waitForElementNotVisible("@fingerboardText", 
                "VERIFIED: 'Fingerboard' flyout panel header hidden")
            .waitForElementPresent("@pickGuardMenuActive", 
                "VERIFIED: 'Pickguard' flyout menu active")
        return this
    },
    pickguardSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.pickguardType)

                    .getText(test.pickguardChoice, function (result) {
                        var pickguardPick = result.value

                        if (pickguardPick === test.pickguardChoiceString) {
                            self
                                .verify.containsText(test.pickguardChoice, test.pickguardChoiceString, 
                                    "VERIFIED: " + test.pickguardChoiceString + " pickguard choice")
                        } else {
                            self
                                .verify.not.containsText(test.pickguardChoice, test.pickguardChoiceString, 
                                    "BUG: " + test.pickguardChoiceString + " incorrect pickguard choice")
                        }
 
                    })
            })
        return this
    },
    navigateToPickupsSelection: function () {
        this
            .waitForElementVisible("@pickups", 
                "VERIFIED: 'Pickups' attribute header visible")
            .click("@pickups")
            .waitForElementNotVisible("@pickguardText", 
                "VERIFIED: 'Pickguard' flyout panel header hidden")
            .waitForElementPresent("@pickupsMenuActive", 
                "VERIFIED: 'Pickups' flyout menu active")
        return this
    },
    pickupsCloseWindowSelection: function (data) {
        this
            data.forEach(test => {
                this
                    .click(test.pickupsType)
                    .waitForElementVisible("@closePopUp", 
                        "VERIFIED: 'Pickups' pop-up OK button visible")
                    .click("@closePopUp")
                    .verify.containsText(test.pickupsChoice, test.pickupsChoiceString, 
                        "VERIFIED: " + test.pickupsChoiceString + " pickups choice")
                    .waitForElementNotPresent("@dialogBoxClosed", 
                        "VERIFIED: 'Pickups' pop-up closed")
            })
        return this
    },
    pickupsSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.pickupsType)

                    .getText(test.pickupsChoice, function (result) {
                        var pickupsPick = result.value

                        if (pickupsPick === test.pickupsChoiceString) {
                            self
                                .verify.containsText(test.pickupsChoice, test.pickupsChoiceString, 
                                    "VERIFIED: " + test.pickupsChoiceString + " pickups choice")
                        } else {
                            self
                                .verify.not.containsText(test.pickupsChoice, test.pickupsChoiceString, 
                                    "BUG: " + test.pickupsChoiceString + " incorrect pickups choice")
                        }

                    })
            })
        return this
    },
    tuningMachinesSelection: function () {
        this
            .waitForElementVisible("@tuningMachines", 
                "VERIFIED: 'Tuning Machines' attribute header visible")
            .click("@tuningMachines")
            .waitForElementNotVisible("@pickupsText", 
                "VERIFIED: 'Pickups' flyout panel header hidden")
            .waitForElementPresent("@tuningMachinesMenuActive", 
                "VERIFIED: 'Tuning Machines' flyout menu active")
            .click("@tuningMachinesAmericanProfessional")
            .verify.containsText("@tuningMachinesChoiceAP", "American Professional", 
                "VERIFIED: American Professional tuning machines choice")
        return this
    },
    bridgeSelection: function () {
        this
            .waitForElementVisible("@bridge", 
                "VERIFIED: 'Bridge' attribute header visible")
            .click("@bridge")
            .waitForElementNotVisible("@tuningMachinesText", 
                "VERIFIED: 'Tuning Machines' flyout panel header hidden")
            .waitForElementPresent("@bridgeMenuActive", 
                "VERIFIED: 'Bridge' flyout menu active")
            .click("@bridgeAmericanPB")
            .verify.containsText("@bridgeChoiceAPB", "American Professional Bass", 
                "VERIFIED: American Professional bridge Choice")
        return this
    },
    stringsSelection: function () {
        this
            .waitForElementVisible("@strings", 
                "VERIFIED: 'Strings' attribute header visible")
            .click("@strings")
            .waitForElementNotVisible("@bridgeText", 
                "VERIFIED: 'Bridge' flyout panel header hidden")
            .waitForElementPresent("@stringsMenuActive", 
                "VERIFIED: 'Strings' flyout menu active")
            .click("@stringsGauge45101")
            .verify.containsText("@stringsChoiceGauge45101", "0.045-0.105", 
                "VERIFIED: 0.045-0.105 strings choice")
        return this
    },
    navigateToCaseAndPackagingSelection: function () {
        this
            .waitForElementVisible("@caseAndPackaging", 
                "VERIFIED: 'Case And Packaging' attribute header visible")
            .click("@caseAndPackaging")
            .waitForElementNotVisible("@stringsText", 
                "VERIFIED: 'Strings' flyout panel header hidden")
            .waitForElementPresent("@caseAndPackagingMenuActive", 
                "VERIFIED: 'Case And Packaging' flyout menu active")
        return this
    },
    caseAndPackagingLeftSelection: function () {
        this
            .click("@caseAndPackagingJazzBassProLeft")
            .verify.containsText("@caseAndPackagingChoiceJazzBassProLeft", 
                "JazzBass-Pro Case & Packaging-Left", 
                "VERIFIED: JazzBass-Pro case & Packaging-Left choice")
        return this
    },
    caseAndPackagingRightSelection: function () {
        this
            .click("@caseAndPackagingJazzBassProRight")
            .verify.containsText("@caseAndPackagingChoiceJazzBassProRight", 
                "JazzBass-Pro Case & Packaging-Right", 
                "VERIFIED: JazzBass-Pro case & Packaging-Right choice")
        return this
    },
    caseAndPackagingSelection: function (data) {
        var self = this
        this
            data.forEach(test => {
                this
                    .click(test.caseType)

                    .getText(test.caseChoice, function (result) {
                        var casePick = result.value

                        if (casePick === test.caseChoiceString) {
                            self
                                .verify.containsText(test.caseChoice, 
                                    test.caseChoiceString, 
                                    "VERIFIED: " + test.caseChoiceString + " case & packaging choice")
                        } else {
                            self
                                .verify.not.containsText(test.caseChoice, 
                                    test.caseChoiceString, 
                                    "BUG: " + test.caseChoiceString + " incorrect case & packaging choice")
                        }

                    })
            })
        return this
    },
    resetBassSelection: function () {
        this
            .click("@reset")
            .waitForElementVisible("@closePopUp", 
                "VERIFIED: 'Neck shape' pop-up OK button visible")
            .click("@closePopUp")
            .waitForElementVisible("@body", 
                "VERIFIED: 'Body' attribute header present")
            .click("@body")
            .verify.containsText("@bodyChoiceCharcoalFrostMetallic", "Charcoal Frost Metallic", 
                "VERIFIED: The 'Reset' button reset the bass back to its default state")
        return this
    },
    addBassSelection: function () {
        this
            .api.refresh()
        this
            .waitForElementVisible("@iframeLoad", 
                "VERIFIED: 'Help' floating button visible")
            .waitForElementVisible("@addToCart", 
                "VERIFIED: 'Add To Cart' button visible")
            .click("@addToCart")
            .pause(3000)
            .waitForElementVisible("@addToCartPopUp", 
                "VERIFIED: 'Add To Cart' pop-up visible")
            .waitForElementVisible("@closeAddToCartPopUp", 
                "VERIFIED: 'Add To Cart' pop-up close button visible")
            .click("@closeAddToCartPopUp")
        return this
    },
    verifyBassPageUI: function (angleData, orienData, bodData, neckData1, 
        neckData2, fboardData, pickguardData, pickupsData1, pickupsData2) {
        this
            .navigateToModPage()
            // Bass Angle Button
            .bassAngleButtonsSelection(angleData)
            // Orientation
            .navigateToOrientationSelection()
            .orientationSelection(orienData)
            // Body
            .navigateToBodySelection()
            .bodySelection(bodData)
            // Neck Shape
            .navigateToNeckShapeSelection()
            .neckShapeCloseWindowSelection(neckData1)
            .neckShapeSelection(neckData2)
            // Fingerboard
            .navigateToFingerboardSelection()
            .fingerboardSelection(fboardData)
            // Pickguard
            .navigateToPickguardSelection()
            .pickguardSelection(pickguardData)
            // Pickups
            .navigateToPickupsSelection()
            .pickupsCloseWindowSelection(pickupsData1)
            .pickupsSelection(pickupsData2)
            // Tuning Machines
            .tuningMachinesSelection()
            // Bridge
            .bridgeSelection()
            // Strings
            .stringsSelection()
            // Case & Packaging
            .navigateToCaseAndPackagingSelection()
            .caseAndPackagingLeftSelection()
            // Reset
            .resetBassSelection()
            // Add To Cart
            .addBassSelection()
            // Verify Cart Quantity
            .refreshAndVerifyCartQuantity("1")
        return this
    },
    editBassWithReset: function () {
        this
            .click("@shoppingCartEditBass")
            .waitForElementPresent("@productTitle", 
                "VERIFIED: Jazz Bass page product title present")
            .verify.title("Jazz Bass | Mod Shop", 
                "VERIFIED: Jazz Bass Mod Shop Page Title")
            .click("@reset")
            .waitForElementVisible("@closePopUp", 
                "VERIFIED: 'Reset' pop-up OK button visible")
            .click("@closePopUp")
            .verify.containsText("@bodyChoiceSilverburst", "Silverburst", 
                "VERIFIED: The 'RESET' button did not reset the bass back to its default state")
        return this
    },
    editBassColor: function () {
        this
            .waitForElementVisible("@body", 
                "VERIFIED: 'Body' attribute header visible")
            .waitForElementVisible("@bodyHotRodRed", 
                "VERIFIED: 'Hot Rod Red' swatch visible")
            .click("@bodyHotRodRed")
            .verify.containsText("@bodyChoiceHotRodRed", "Hot Rod Red", 
                "VERIFIED: Hot Rod Red Modified Body Color")
        return this
    },
    updateCart: function () {
        this
            .waitForElementVisible("@addToCart", 
                "VERIFIED: 'Add To Cart' button visible")
            .click("@addToCart")
            .pause(3000)
            .waitForElementVisible("@addToCartPopUp", 
                "VERIFIED: 'Add To Cart' pop-up visible")
            .waitForElementVisible("@checkoutLink", 
                "VERIFIED: 'Checkout' pop-up link visible")
            .click("@checkoutLink")
            .verify.title("Cart | My Fender", 
                "VERIFIED: Cart Page Title")
        return this
    },
    removeBassShoppingCart: function () {
        this
            .waitForElementVisible("@shoppingCartRemoveBass", 
                "VERIFIED: 'Remove' link is visible")
            .click("@shoppingCartRemoveBass")
        return this
    },
    verifyEmptyShoppingCart: function () {
        this
            .verify.not.elementPresent("@shoppingCartRemovedOrderSummary", 
                "VERIFIED Empty Cart: The 'ORDER SUMMARY' section has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedItemImage", 
                "VERIFIED Empty Cart: The item image has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedItemInfo", 
                "VERIFIED Empty Cart: The item info has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedItemPricing", 
                "VERIFIED Empty Cart: The item pricing has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedQuantitySection", 
                "VERIFIED Empty Cart: The 'Quantity' section has been removed")
        return this
    },
    navigateToShoppingCart: function () {
        this
            .click("@shoppingCartLink")
            .verify.title("Cart | My Fender", 
                "VERIFIED: Cart Page Title")
        return this
    },
    verifyQuantitySelector: function (data) {
        this
            .waitForElementVisible("@quantitySelector", 
                "VERIFIED: 'Quantity' cart counter is visible")
            .setValue("@quantitySelector", data.item)
            .waitForElementVisible("@quantityErrorMessage", 
                "VERIFIED: 'Quantity' cart error message is visible")
            .verify.elementPresent("@quantityErrorMessage", 
                "VERIFIED Error Message: 'Only 1 units available'. Quantity selector on " + 
                data.quantity)
            .pause(1000)
        return this
    },
    verifyBassShoppingCart: function () {
        this
            .waitForElementVisible("@shoppingCartItemNumber", 
                "VERIFIED: Shopping cart 'item number' is visible")
            .verify.containsText("@shoppingCartItemNumber", "1 Item", 
                "VERIFIED: Cart contains 1 item")
            .waitForElementVisible("@shoppingCartSubTotal", 
                "VERIFIED: Shopping cart 'Subtotal' is visible")
            .verify.containsText("@shoppingCartSubTotal", "$1,899.99", 
                "VERIFIED: $1,899.99 cart sub-total")
            .waitForElementVisible("@shoppingCartShippingCost", 
                "VERIFIED: Shopping cart 'Shipping Cost' is visible")
            .verify.containsText("@shoppingCartShippingCost", "Free", 
                "VERIFIED: Free cart shipping cost")
            .waitForElementVisible("@shoppingCartGrandTotal", 
                "VERIFIED: Shopping cart 'Estimated Total' is visible")
            .verify.containsText("@shoppingCartGrandTotal", "$1,899.99", 
                "VERIFIED: $1,899.99 cart estimated total")
        return this
    },
    verify2BassShoppingCart: function () {
        this
            .waitForElementVisible("@shoppingCartItemNumber", 
                "VERIFIED: Shopping cart 'item number' is visible")
            .verify.containsText("@shoppingCartItemNumber", "2 Items", 
                "VERIFIED: Cart contains 2 items")
            .waitForElementVisible("@shoppingCartSubTotal", 
                "VERIFIED: Shopping cart 'Subtotal' is visible")
            .verify.containsText("@shoppingCartSubTotal", "$3,799.98", 
                "VERIFIED: $3,799.98 cart sub-total")
            .waitForElementVisible("@shoppingCartShippingCost", 
                "VERIFIED: Shopping cart 'Shipping Cost' is visible")
            .verify.containsText("@shoppingCartShippingCost", "Free", 
                "VERIFIED: Free cart shipping cost")
            .waitForElementVisible("@shoppingCartGrandTotal", 
                "VERIFIED: Shopping cart 'Estimated Total' is visible")
            .verify.containsText("@shoppingCartGrandTotal", "$3,799.98", 
                "VERIFIED: $3,799.98 cart estimated total")
        return this
    },
    refreshAndVerifyCartQuantity: function (numString) {
        var self = this
        this
            .api.refresh()
        this
            .waitForElementVisible("@iframeLoad", 
                "VERIFIED: 'Help' floating button visible")
            .waitForElementVisible('@fenderBrandLogo', 
                "VERIFIED: 'Fender Logo' visible")
            .moveToElement("@fenderBrandLogo", undefined, undefined)
            .waitForElementVisible("@shoppingCartQuantity", 
                "VERIFIED: 'Shopping Cart Quantity' visible")

            .getText("@shoppingCartQuantity", function (result) {
                var cartQuantity = result.value

                if (cartQuantity === numString) {
                    self
                        .verify.containsText("@shoppingCartQuantity", numString, 
                            "VERIFIED: Cart contains " + numString + " items")
                } else {
                    self
                        .verify.not.containsText("@shoppingCartQuantity", numString, 
                            "BUG: Cart does not contain " + numString + " items")
                }

            })
        return this
    },
    navigateToModPage: function () {
        this
            .verify.title("Shop Fender | Electric Guitars, Acoustics, Bass, Amps & More", 
                "VERIFIED: Mod Shop Homepage Title")

            // Homepage, click on the "Get Started" Jazz Bass page link
            .waitForElementPresent("@getStartedLink", 
                "VERIFIED: 'Get Started' Jazz Bass page link present")
            .click("@getStartedLink")

            // Waiting for the product title of the Jazz Bass page to be present before starting
            .waitForElementPresent("@productTitle", 
                "VERIFIED: Jazz Bass page product title present")
            .verify.title("Jazz Bass | Mod Shop", 
                "VERIFIED: Jazz Bass Mod Shop Page Title")
        return this
    },
    addToCartWithPopUp: function () {
        this
            .waitForElementVisible("@addToCart", 
                "VERIFIED: 'Add To Cart' button visible")
            .click("@addToCart")
            .pause(3000)
            .waitForElementVisible("@addToCartPopUp", 
                "VERIFIED: 'Add To Cart' pop-up visible")
            .waitForElementVisible("@closeAddToCartPopUp", 
                "VERIFIED: 'Add To Cart' pop-up close button visible")
            .click("@closeAddToCartPopUp")
            .moveToElement("@fenderBrandLogo", undefined, undefined)
        return this
    },
    resetToDefault: function () {
        this
            .waitForElementVisible("@reset", 
                "VERIFIED: 'Reset' button visible")
            .click("@reset")
            .waitForElementVisible("@closeResetPopUp", 
                "VERIFIED: 'Reset' pop-up OK button visible")
            .click("@closeResetPopUp")
        return this
    },
    refreshPageForPopup: function () {
        this
            // Reload page to get around the "ADD TO CART" pop-up not working
            .api.refresh()
        this
            .waitForElementVisible("@iframeLoad", 
                "VERIFIED: 'Help' floating button visible")
            .moveToElement("@fenderBrandLogo", undefined, undefined)
        return this
    },
    bassMod: function (data) {
        this
            // Reload page to get around the "ADD TO CART" pop-up not working
            .refreshPageForPopup()
            // Orientation
            .navigateToOrientationSelection()
            .orientationSelection(data)
            // Body
            .navigateToBodySelection()
            .bodySelection(data)
            // Neck Shape
            .navigateToNeckShapeSelection()
            .neckShapeSelection(data)
            // Fingerboard
            .navigateToFingerboardSelection()
            .fingerboardSelection(data)
            // Pickguard
            .navigateToPickguardSelection()
            .pickguardSelection(data)
            // Pickups
            .navigateToPickupsSelection()
            .pickupsSelection(data)
            // Tuning Machines
            .tuningMachinesSelection()
            // Bridge
            .bridgeSelection()
            // Strings
            .stringsSelection()
            // Case & Packaging
            .navigateToCaseAndPackagingSelection()
            .caseAndPackagingSelection(data)
            // Add To Cart Button
            .addToCartWithPopUp()
            // Reset
            .resetToDefault()
        return this
    },
    verifyCartDetailsAndRemoval: function (modData1, modData2) {
        this
            .navigateToModPage()
            .bassMod(modData1)
            .bassMod(modData2)
        this
            .refreshAndVerifyCartQuantity("2")
            .navigateToShoppingCart()
            .verify2BassShoppingCart()
            .removeBassShoppingCart()
            .verifyBassShoppingCart()
            .removeBassShoppingCart()
            .verifyEmptyShoppingCart()
        return this
    },
    quantitySelection: function (data) {
        this
            data.forEach(test => {
                this.verifyQuantitySelector(test)
            })
        return this
    },
    verifyCartQuantitySelector: function (editData, quantityData) {
        this
            .navigateToModPage()
            .bassMod(editData)
            .refreshAndVerifyCartQuantity("1")
            .navigateToShoppingCart()
            .verifyBassShoppingCart()
            .quantitySelection(quantityData)
            .verifyBassShoppingCart()
        return this
    },
    verifyEditAndUpdateCart: function (editData) {
        this
            .navigateToModPage()
            .bassMod(editData)
            .refreshAndVerifyCartQuantity("1")
            .navigateToShoppingCart()
            .editBassWithReset()
            .editBassColor()
            .updateCart()
        return this
    }
}

module.exports = {
    url: 'https://shop.fender.com/en-US/mod-shop/',
    commands: [bassModCommands],
    elements: {
        shoppingCartRemovedQuantitySection: {
            selector: "(//div[contains(@class,'quantity-form')])[1]",
            locateStrategy: 'xpath'
        },
        shoppingCartRemovedItemPricing: {
            selector: "//div[contains(text(),'$1,899.99')]",
            locateStrategy: 'xpath'
        },
        shoppingCartRemovedItemInfo: {
            selector: "//div[@class='d-none d-sm-block item-header']",
            locateStrategy: 'xpath'
        },
        shoppingCartRemovedItemImage: {
            selector: "//div[@class='item-image']",
            locateStrategy: 'xpath'
        },
        shoppingCartRemovedOrderSummary: {
            selector: "//div[@class='cart-totals']",
            locateStrategy: 'xpath'
        },
        shoppingCartRemoveBass: {
            selector: "(//a[contains(@class,'remove-product')])[1]",
            locateStrategy: 'xpath'
        },
        shoppingCartEditBass: {
            selector: "//a[@class='edit']",
            locateStrategy: 'xpath'
        },
        shoppingCartGrandTotal: {
            selector: "//p[@class='text-right grand-total']",
            locateStrategy: 'xpath'
        },
        shoppingCartShippingCost: {
            selector: "//p[@class='text-right shipping-cost free']",
            locateStrategy: 'xpath'
        },
        shoppingCartSubTotal: {
            selector: "//p[@class='text-right sub-total']",
            locateStrategy: 'xpath'
        },
        shoppingCartItemNumber: {
            selector: "//span[@class='number-of-items']",
            locateStrategy: 'xpath'
        },
        fenderBrandLogo: {
            selector: "//div[@class='brand']//a",
            locateStrategy: 'xpath'
        },
        shoppingCartQuantity: {
            selector: "//a[@class='minicart-link']//span[@class='minicart-quantity']",
            locateStrategy: 'xpath'
        },
        shoppingCartLink: {
            selector: "//div[@class='minicart utility-icon']",
            locateStrategy: 'xpath'
        },
        getStartedLink: {
            selector: "(//a[contains(@href,'jazz-bass')])[7]",
            locateStrategy: 'xpath'
        },
        productTitle: {
            selector: "//div[contains(text(),'Jazz Bass')]",
            locateStrategy: 'xpath'
        },
        closePopUp: {
            selector: "//div[@class='fc-button fc-fancy-button fc-dialog-submit']",
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: "//div[@class='fc-add-to-cart-container']" +
                "//div[@class='fc-button-pair fc-outline-target']",
            locateStrategy: 'xpath'
        },
        addToCartPopUp: {
            selector: "//div[@class='shq_modal']",
            locateStrategy: 'xpath'
        },
        addToCartPopUpImageCheckout: {
            selector: "//img[@alt='Your mod shop design has been added to your cart. " +
                "Complete your set up with the following gear. Checkout.']",
            locateStrategy: 'xpath'
        },
        addToCartPopUpImageGear: {
            selector: "//img[@alt='Complete your setup with the following gear:']",
            locateStrategy: 'xpath'
        },
        reset: {
            selector: "//div[@class='fc-reset-container']//div[@class='fc-button-pair']",
            locateStrategy: 'xpath'
        },
        closeAddToCartPopUp: {
            selector: "//img[@class='shq_exit']",
            locateStrategy: 'xpath'
        },
        checkoutLink: {
            selector: "//div[@class='shq_modal']/div/a",
            locateStrategy: 'xpath'
        },
        goToShoppingCart: {
            selector: "(//div[@id='shq_modal_fender_modshop_modal_-_live']" +
                "/div[@class='shq_modal']//a)[1]",
            locateStrategy: 'xpath'
        },
        reset: {
            selector: "//div[@class='fc-reset-container']//div[@class='fc-button-pair']",
            locateStrategy: 'xpath'
        },
        closeResetPopUp: {
            selector: "//div[@class='fc-button fc-fancy-button fc-dialog-submit']",
            locateStrategy: 'xpath'
        },
        orientation: {
            selector: "//span[text()='Orientation']",
            locateStrategy: 'xpath'
        },
        orientationRight: {
            selector: "//span[@class='fc-label-text'][contains(text(),'Right Handed')]",
            locateStrategy: 'xpath'
        },
        orientationLeft: {
            selector: "//span[@class='fc-label-text'][contains(text(),'Left Handed')]",
            locateStrategy: 'xpath'
        },
        orientationChoiceRight: {
            selector: "//div[contains(text(),'Right Handed')]",
            locateStrategy: 'xpath'
        },
        orientationChoiceLeft: {
            selector: "//div[contains(text(),'Left Handed')]",
            locateStrategy: 'xpath'
        },
        body: {
            selector: "//span[text()='Body']",
            locateStrategy: 'xpath'
        },
        bodyHotRodRed: {
            selector: "//span[@title='Hot Rod Red']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyMysticSeafoamGreen: {
            selector: "//span[@title='Mystic Seafoam Green']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyOceanTurquoise: {
            selector: "//span[@title='Ocean Turquoise']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyIncaSilver: {
            selector: "//span[@title='Inca Silver']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySilverburst: {
            selector: "//span[@title='Silverburst']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyCharcoalFrostMetallic: {
            selector: "//span[@title='Charcoal Frost Metallic']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyTobaccoBurst: {
            selector: "//span[@title='Tobacco Burst']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyMysticAztecGold: {
            selector: "//span[@title='Mystic Aztec Gold']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySonicBlue: {
            selector: "//span[@title='Sonic Blue']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyPenny: {
            selector: "//span[@title='Penny']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyAutumnBlazeMetallic: {
            selector: "//span[@title='Autumn Blaze Metallic']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyFiestaRed: {
            selector: "//span[@title='Fiesta Red']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyAntiqueOlive: {
            selector: "//span[@title='Antique Olive']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySonicGray: {
            selector: "//span[@title='Sonic Gray']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyDakotaRed: {
            selector: "//span[@title='Dakota Red']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySunsetMetallic: {
            selector: "//span[@title='Sunset Metallic']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyIceBlueMetallic: {
            selector: "//span[@title='Ice Blue Metallic']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySherwoodGreen: {
            selector: "//span[@title='Sherwood Green']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyWalnut: {
            selector: "//span[@title='Walnut']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyMysticIceBlue: {
            selector: "//span[@title='Mystic Ice Blue']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyBordeauxMetallic: {
            selector: "//span[@title='Bordeaux Metallic']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyShellPink: {
            selector: "//span[@title='Shell Pink']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySatinBlack: {
            selector: "//span[@title='Satin Black']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySkyburstMetallic: {
            selector: "//span[@title='Skyburst Metallic']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyDesertSand: {
            selector: "//span[@title='Desert Sand']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyBlack: {
            selector: "//span[@title='Black']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyVintageBlonde: {
            selector: "//span[@title='Vintage Blonde']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyOlympicWhite: {
            selector: "//span[@title='Olympic White']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyLakePlacidBlue: {
            selector: "//span[@title='Lake Placid Blue']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyCandyAppleRed: {
            selector: "//span[@title='Candy Apple Red']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyDaphneBlue: {
            selector: "//span[@title='Daphne Blue']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodySurfGreen: {
            selector: "//span[@title='Surf Green']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bodyChoiceSurfGreen: {
            selector: "//div[contains(text(),'Surf Green')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceDaphneBlue: {
            selector: "//div[contains(text(),'Daphne Blue')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceCandyAppleRed: {
            selector: "//div[contains(text(),'Candy Apple Red')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceLakePlacidBlue: {
            selector: "//div[contains(text(),'Lake Placid Blue')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceOlympicWhite: {
            selector: "//div[contains(text(),'Olympic White')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceVintageBlonde: {
            selector: "//div[contains(text(),'Vintage Blonde')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceBlack: {
            selector: "//div[contains(text(),'Black')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceDesertSand: {
            selector: "//div[contains(text(),'Desert Sand')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSkyburstMetallic: {
            selector: "//div[contains(text(),'Skyburst Metallic')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSatinBlack: {
            selector: "//div[contains(text(),'Satin Black')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSatinBlack: {
            selector: "//div[contains(text(),'Satin Black')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceShellPink: {
            selector: "//div[contains(text(),'Shell Pink')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceBordeauxMetallic: {
            selector: "//div[contains(text(),'Bordeaux Metallic')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceMysticIceBlue: {
            selector: "//div[contains(text(),'Mystic Ice Blue')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceWalnut: {
            selector: "//div[contains(text(),'Walnut')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSherwoodGreen: {
            selector: "//div[contains(text(),'Sherwood Green')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceIceBlueMetallic: {
            selector: "//div[contains(text(),'Ice Blue Metallic')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSunsetMetallic: {
            selector: "//div[contains(text(),'Sunset Metallic')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceDakotaRed: {
            selector: "//div[contains(text(),'Dakota Red')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSonicGray: {
            selector: "//div[contains(text(),'Sonic Gray')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceAntiqueOlive: {
            selector: "//div[contains(text(),'Antique Olive')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceFiestaRed: {
            selector: "//div[contains(text(),'Fiesta Red')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceAutumnBlazeMetallic: {
            selector: "//div[contains(text(),'Autumn Blaze Metallic')]",
            locateStrategy: 'xpath'
        },
        bodyChoicePenny: {
            selector: "//div[contains(text(),'Penny')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSonicBlue: {
            selector: "//div[contains(text(),'Sonic Blue')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceMysticAztecGold: {
            selector: "//div[contains(text(),'Mystic Aztec Gold')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceTobaccoBurst: {
            selector: "//div[contains(text(),'Tobacco Burst')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceCharcoalFrostMetallic: {
            selector: "//div[contains(text(),'Charcoal Frost Metallic')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceSilverburst: {
            selector: "//div[contains(text(),'Silverburst')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceIncaSilver: {
            selector: "//div[contains(text(),'Inca Silver')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceMysticSeafoamGreen: {
            selector: "//div[contains(text(),'Mystic Seafoam Green')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceOceanTurquoise: {
            selector: "//div[contains(text(),'Ocean Turquoise')]",
            locateStrategy: 'xpath'
        },
        bodyChoiceHotRodRed: {
            selector: "//div[contains(text(),'Hot Rod Red')]",
            locateStrategy: 'xpath'
        },
        neckShape: {
            selector: "//span[text()='Neck Shape']",
            locateStrategy: 'xpath'
        },
        neckShapePaintedHeadstock: {
            selector: "//span[@title='American Pro Painted Headstock Black Jazz Bass']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeAmericanPro: {
            selector: "//div[@class='fc-attribute-selector " +
                "fc-attribute-selector-alias-neck_shape " +
                "fc-layout-image']//span[@title='American Professional']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeRoasted: {
            selector: "//span[@title='Roasted American Professional Jazz Bass']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeChoiceAP: {
            selector: "//div[@class='fc-attribute-selector " +
                "fc-attribute-selector-alias-neck_shape " +
                "fc-layout-image']//div[@class='fc-selected-value-label']" +
                "[contains(text(),'American Professional')]",
            locateStrategy: 'xpath'
        },
        neckShapeAmericanOriginalRosewood: {
            selector: "//span[@title='American Original Rosewood ’60’s Jazz Bass']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeChoiceAmericanOriginalRosewood: {
            selector: "//div[contains(text(),'American Original Rosewood')]",
            locateStrategy: 'xpath'
        },
        neckShapeChoiceRoasted: {
            selector: "//div[contains(text(),'Roasted American Professional Jazz Bass')]",
            locateStrategy: 'xpath'
        },
        neckShapeCToD: {
            selector: `//span[@title='C-to-D 9.5" Radius']//span[@class='fc-swatch']`,
            locateStrategy: 'xpath'
        },
        neckShapeChoiceCToD: {
            selector: `//div[contains(text(),'C-to-D 9.5" Radius')]`,
            locateStrategy: 'xpath'
        },
        neckShapeChoiceAmericanPro: {
            selector: "//div[contains(text(),'American Professional')]",
            locateStrategy: 'xpath'
        },
        fingerboard: {
            selector: "//span[text()='Fingerboard Option']",
            locateStrategy: 'xpath'
        },
        fingerboardPaintedHeadstockBlackMaple: {
            selector: "//span[@title='Painted Headstock Black Maple']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        fingerboardMaple: {
            selector: "//span[@title='Maple']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        fingerboardRoastedMaple: {
            selector: "//span[@title='Roasted Maple']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        fingerboardRosewood: {
            selector: "//span[@title='Rosewood']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        fingerboardChoiceRosewood: {
            selector: "//div[contains(text(),'Rosewood')]",
            locateStrategy: 'xpath'
        },
        fingerboardChoiceMaple: {
            selector: "//div[contains(text(),'Maple')]",
            locateStrategy: 'xpath'
        },
        pickguard: {
            selector: "//span[text()='Pickguard Material']",
            locateStrategy: 'xpath'
        },
        pickguardTortoiseShell: {
            selector: "//span[@title='4 Ply Tortoise Shell']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickguard4PlyAgedWhitePearl: {
            selector: "//span[@title='4 Ply Aged White Pearl']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickguard3PlyMintGreen: {
            selector: "//span[@title='3 Ply Mint Green']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickguard3PlyParchment: {
            selector: "//span[@title='3 Ply Parchment']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickguard3PlyBlack: {
            selector: "//span[@title='3 Ply Black']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickguardChoice3PlyBlack: {
            selector: "//div[contains(text(),'3 Ply Black')]",
            locateStrategy: 'xpath'
        },
        pickguardChoiceTortoiseShell: {
            selector: "//div[contains(text(),'4 Ply Tortoise Shell')]",
            locateStrategy: 'xpath'
        },
        pickguardChoice3PlyParchment: {
            selector: "//div[contains(text(),'3 Ply Parchment')]",
            locateStrategy: 'xpath'
        },
        pickguardChoice3PlyMintGreen: {
            selector: "//div[contains(text(),'3 Ply Mint Green')]",
            locateStrategy: 'xpath'
        },
        pickguardChoice4PlyAgedWhitePearl: {
            selector: "//div[contains(text(),'4 Ply Aged White Pearl')]",
            locateStrategy: 'xpath'
        },
        pickups: {
            selector: "//span[text()='Pickups']",
            locateStrategy: 'xpath'
        },
        pickupsPureVintage64JB: {
            selector: `//span[@title="Pure Vintage '64 Jazz Bass"]//span[@class='fc-swatch']`,
            locateStrategy: 'xpath'
        },
        pickupsVMOD: {
            selector: "//span[@title='V-MOD Pickups']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickupsChoiceVMOD: {
            selector: "//div[contains(text(),'V-MOD Pickups')]",
            locateStrategy: 'xpath'
        },
        pickupsOriginalJazz: {
            selector: "//span[@title='Original Jazz Bass']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickupsChoiceOriginalJazz: {
            selector: "//div[contains(text(),'Original Jazz Bass')]",
            locateStrategy: 'xpath'
        },
        pickupsCustomShop60s: {
            selector: `//span[@title="Custom Shop '60s Jazz Bass"]//span[@class='fc-swatch']`,
            locateStrategy: 'xpath'
        },
        pickupsChoiceCustomShop60s: {
            selector: `//div[contains(text(),"Custom Shop '60s Jazz Bass")]`,
            locateStrategy: 'xpath'
        },
        pickupsPureVintage74: {
            selector: `//span[@title="Pure Vintage '74 Jazz Bass"]//span[@class='fc-swatch']`,
            locateStrategy: 'xpath'
        },
        pickupsChoicePureVintage74: {
            selector: `//div[contains(text(),"Pure Vintage '74 Jazz Bass")]`,
            locateStrategy: 'xpath'
        },
        pickupsNoiseless: {
            selector: "//span[@title='4th Gen Noiseless']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        pickupsChoiceNoiseless: {
            selector: "//div[contains(text(),'4th Gen Noiseless')]",
            locateStrategy: 'xpath'
        },
        pickupsChoicePureVintage64JB: {
            selector: `//div[contains(text(),"Pure Vintage '64 Jazz Bass")]`,
            locateStrategy: 'xpath'
        },
        tuningMachines: {
            selector: "//span[text()='Tuning Machines']",
            locateStrategy: 'xpath'
        },
        tuningMachinesAmericanProfessional: {
            selector: "//div[@class='fc-attribute-selector " +
                "fc-attribute-selector-alias-tuningmachines " +
                "fc-layout-image']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        tuningMachinesChoiceAP: {
            selector: "//div[@class='fc-attribute-selector " +
                "fc-attribute-selector-alias-tuningmachines " +
                "fc-layout-image']//div[@class='fc-selected-value-label']" +
                "[contains(text(),'American Professional')]",
            locateStrategy: 'xpath'
        },
        bridge: {
            selector: "//span[text()='Bridge']",
            locateStrategy: 'xpath'
        },
        bridgeAmericanPB: {
            selector: "//span[@title='American Professional Bass']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        bridgeChoiceAPB: {
            selector: "//div[contains(text(),'American Professional Bass')]",
            locateStrategy: 'xpath'
        },
        strings: {
            selector: "//span[text()='Strings']",
            locateStrategy: 'xpath'
        },
        stringsGauge45101: {
            selector: "//span[@class='fc-label-text'][contains(text(),'0.045-0.105')]",
            locateStrategy: 'xpath'
        },
        stringsChoiceGauge45101: {
            selector: "//div[contains(text(),'0.045-0.105')]",
            locateStrategy: 'xpath'
        },
        caseAndPackaging: {
            selector: "//span[text()='Case & Packaging']",
            locateStrategy: 'xpath'
        },
        caseAndPackagingJazzBassProRight: {
            selector: "//span[@title='JazzBass-Pro Case & Packaging-Right']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        caseAndPackagingJazzBassProLeft: {
            selector: "//span[@title='JazzBass-Pro Case & Packaging-Left']" +
                "//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        caseAndPackagingChoiceJazzBassProRight: {
            selector: "//div[contains(text(),'JazzBass-Pro Case & Packaging-Right')]",
            locateStrategy: 'xpath'
        },
        caseAndPackagingChoiceJazzBassProLeft: {
            selector: "//div[contains(text(),'JazzBass-Pro Case & Packaging-Left')]",
            locateStrategy: 'xpath'
        },
        bassAngleFront: {
            selector: "//li[contains(text(),'Front')]",
            locateStrategy: 'xpath'
        },
        bassAngleBack: {
            selector: "//li[contains(text(),'Back')]",
            locateStrategy: 'xpath'
        },
        bassAngle34View: {
            selector: "//li[contains(text(),'3')]",
            locateStrategy: 'xpath'
        },
        bassAngleBody: {
            selector: "//li[contains(text(),'Body')]",
            locateStrategy: 'xpath'
        },
        bassAngleNeck: {
            selector: "//li[contains(text(),'Neck')]",
            locateStrategy: 'xpath'
        },
        quantitySelector: {
            selector: "//select[@id='quantity']",
            locateStrategy: 'xpath'
        },
        quantityErrorMessage: {
            selector: "//div[@style='display: block;']",
            locateStrategy: 'xpath'
        },
        orientationText: {
            selector: "//h2[contains(text(),'Orientation')]",
            locateStrategy: 'xpath'
        },
        bodyText: {
            selector: "//h2[contains(text(),'Body')]",
            locateStrategy: 'xpath'
        },
        neckShapeText: {
            selector: "//h2[contains(text(),'Neck Shape')]",
            locateStrategy: 'xpath'
        },
        fingerboardText: {
            selector: "//h2[contains(text(),'Fingerboard Option')]",
            locateStrategy: 'xpath'
        },
        pickguardText: {
            selector: "//h2[contains(text(),'Pickguard Material')]",
            locateStrategy: 'xpath'
        },
        pickupsText: {
            selector: "//h2[contains(text(),'Pickups')]",
            locateStrategy: 'xpath'
        },
        tuningMachinesText: {
            selector: "//h2[contains(text(),'Tuning Machines')]",
            locateStrategy: 'xpath'
        },
        bridgeText: {
            selector: "//h2[contains(text(),'Bridge')]",
            locateStrategy: 'xpath'
        },
        stringsText: {
            selector: "//h2[contains(text(),'Strings')]",
            locateStrategy: 'xpath'
        },
        caseAndPackagingText: {
            selector: "//h2[contains(text(),'Case & Packaging')]",
            locateStrategy: 'xpath'
        },
        orientationMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-orientation " + 
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        bodyMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-body " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        neckShapeMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-neck_shape " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        fingerBoardMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-neckoption " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        pickGuardMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-pickguardmaterial " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        pickupsMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-pickups " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        tuningMachinesMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-tuningmachines " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        bridgeMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-bridge " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        stringsMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-stringsselection " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        caseAndPackagingMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-case_&_packaging " +
                "fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        dialogBoxClosed: {
            selector: "(//div[@role='dialog'])[2]",
            locateStrategy: 'xpath'
        },
        iframeLoad: {
            selector: "//iframe[@id='launcher']",
            locateStrategy: 'xpath'
        }
    }
}