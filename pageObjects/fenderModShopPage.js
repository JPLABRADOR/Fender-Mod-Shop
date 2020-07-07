var bassModCommands = {

    checkBassPageFunctionality: function () {
        this
            // Bass Angle buttons: Front, Back, 3/4 View, Body, Neck
            .click("@bassAngleFront")
            .click("@bassAngleBack")
            .click("@bassAngle34View")
            .click("@bassAngleBody")
            .click("@bassAngleNeck")

            // Orientation
            .getLocationInView("@shoppingCartLink")
            .waitForElementVisible("@orientation")
            .click("@orientation")
            .click("@orientationRight")
            .click("@orientationLeft")

            // Body
            .waitForElementVisible("@body")
            .click("@body")
            .getLocationInView("@reset")
            .waitForElementNotVisible("@orientationText")
            .waitForElementPresent("@bodyMenuActive")

            .click("@bodyIncaSilver")
            .verify.containsText("@bodyChoiceIncaSilver", "Inca Silver", "Verified: Inca Silver Swatch Choice")
 
            .click("@bodyCharcoalFrostMetallic")
            .verify.containsText("@bodyChoiceCharcoalFrostMetallic", "Charcoal Frost Metallic", "Verified: Charcoal Frost Metallic Swatch Choice")

            .click("@bodyMysticSeafoamGreen")
            .verify.containsText("@bodyChoiceMysticSeafoamGreen", "Mystic Seafoam Green", "Verified: Mystic Seafoam Green Swatch Choice")

            .click("@bodySilverburst")
            .verify.containsText("@bodyChoiceSilverburst", "Silverburst", "Verified: Silverburst Swatch Choice")

            .click("@bodyTobaccoBurst")
            .verify.containsText("@bodyChoiceTobaccoBurst", "Tobacco Burst", "Verified: Tobacco Burst Swatch Choice")

            .click("@bodyMysticAztecGold")
            .verify.containsText("@bodyChoiceMysticAztecGold", "Mystic Aztec Gold", "Verified: Mystic Aztec Gold Swatch Choice")

            .click("@bodySonicBlue")
            .verify.containsText("@bodyChoiceSonicBlue", "Sonic Blue", "Verified: Sonic Blue Swatch Choice")

            .click("@bodyPenny")
            .verify.containsText("@bodyChoicePenny", "Penny", "Verified: Penny Swatch Choice")

            .click("@bodyAutumnBlazeMetallic")
            .verify.containsText("@bodyChoiceAutumnBlazeMetallic", "Autumn Blaze Metallic", "Verified: Autumn Blaze Metallic Swatch Choice")

            .click("@bodyFiestaRed")
            .verify.containsText("@bodyChoiceFiestaRed", "Fiesta Red", "Verified: Fiesta Red Swatch Choice")

            .click("@bodyAntiqueOlive")
            .verify.containsText("@bodyChoiceAntiqueOlive", "Antique Olive", "Verified: Antique Olive Swatch Choice")

            .click("@bodySonicGray")
            .verify.containsText("@bodyChoiceSonicGray", "Sonic Gray", "Verified: Sonic Gray Swatch Choice")

            .click("@bodyDakotaRed")
            .verify.containsText("@bodyChoiceDakotaRed", "Dakota Red", "Verified: Dakota Red Swatch Choice")

            .click("@bodySunsetMetallic")
            .verify.containsText("@bodyChoiceSunsetMetallic", "Sunset Metallic", "Verified: Sunset Metallic Swatch Choice")

            .click("@bodyHotRodRed")
            .verify.containsText("@bodyChoiceHotRodRed", "Hot Rod Red", "Verified: Hot Rod Red Swatch Choice")

            .click("@bodyIceBlueMetallic")
            .verify.containsText("@bodyChoiceIceBlueMetallic", "Ice Blue Metallic", "Verified: Ice Blue Metallic Swatch Choice")

            .click("@bodySherwoodGreen")
            .verify.containsText("@bodyChoiceSherwoodGreen", "Sherwood Green", "Verified: Sherwood Green Swatch Choice")

            .click("@bodyWalnut")
            .verify.containsText("@bodyChoiceWalnut", "Walnut", "Verified: Walnut Swatch Choice")

            .click("@bodyMysticIceBlue")
            .verify.containsText("@bodyChoiceMysticIceBlue", "Mystic Ice Blue", "Verified: Mystic Ice Blue Swatch Choice")

            .click("@bodyBordeauxMetallic")
            .verify.containsText("@bodyChoiceBordeauxMetallic", "Bordeaux Metallic", "Verified: Bordeaux Metallic Swatch Choice")

            .click("@bodyShellPink")
            .verify.containsText("@bodyChoiceShellPink", "Shell Pink", "Verified: Shell Pink Swatch Choice")

            .click("@bodySatinBlack")
            .verify.containsText("@bodyChoiceSatinBlack", "Satin Black", "Verified: Satin Black Swatch Choice")

            .click("@bodyOceanTurquoise")
            .verify.containsText("@bodyChoiceOceanTurquoise", "Ocean Turquoise", "Verified: Ocean Turquoise Swatch Choice")

            .click("@bodySkyburstMetallic")
            .verify.containsText("@bodyChoiceSkyburstMetallic", "Skyburst Metallic", "Verified: Skyburst Metallic Swatch Choice")

            .click("@bodyDesertSand")
            .verify.containsText("@bodyChoiceDesertSand", "Desert Sand", "Verified: Desert Sand Swatch Choice")

            .click("@bodyBlack")
            .verify.containsText("@bodyChoiceBlack", "Black", "Verified: Black Swatch Choice")

            .click("@bodyVintageBlonde")
            .verify.containsText("@bodyChoiceVintageBlonde", "Vintage Blonde", "Verified: Vintage Blonde Swatch Choice")

            .click("@bodyOlympicWhite")
            .verify.containsText("@bodyChoiceOlympicWhite", "Olympic White", "Verified: Olympic White Swatch Choice")

            .click("@bodyLakePlacidBlue")
            .verify.containsText("@bodyChoiceLakePlacidBlue", "Lake Placid Blue", "Verified: Lake Placid Blue Swatch Choice")

            .click("@bodyCandyAppleRed")
            .verify.containsText("@bodyChoiceCandyAppleRed", "Candy Apple Red", "Verified: Candy Apple Red Swatch Choice")

            .click("@bodyDaphneBlue")
            .verify.containsText("@bodyChoiceDaphneBlue", "Daphne Blue", "Verified: Daphne Blue Swatch Choice")

            .click("@bodySurfGreen")
            .verify.containsText("@bodyChoiceSurfGreen", "Surf Green", "Verified: Surf Green Swatch Choice")

            // Neck Shape
            .waitForElementVisible("@neckShape")
            .click("@neckShape")
            .waitForElementNotVisible("@bodyText")
            .waitForElementPresent("@neckShapeMenuActive")
            
            .click("@neckShapeAmericanOriginalRosewood")
            .waitForElementVisible("@closePopUp")
            .click("@closePopUp")
            .verify.containsText("@neckShapeChoiceAmericanOriginalRosewood", "American Original Rosewood ’60’s Jazz Bass", "Verified: American Original Rosewood ’60’s Neck Shape Choice")
            .waitForElementNotPresent("@dialogBoxClosed")
            
            .click("@neckShapeRoasted")
            .waitForElementVisible("@closePopUp")
            .click("@closePopUp")
            .verify.containsText("@neckShapeChoiceRoasted", "Roasted American Professional Jazz Bass", "Verified: Roasted American Professional Neck Shape Choice")
            .waitForElementNotPresent("@dialogBoxClosed")

            .click("@neckShapeCToD")
            .verify.containsText("@neckShapeChoiceCToD", 'C-to-D 9.5" Radius', `Verified: C-to-D 9.5" Radius Neck Shape Choice`)

            .click("@neckShapeAmericanPro")
            .verify.containsText("@neckShapeChoiceAmericanPro", "American Professional", "Verified: American Professional Neck Shape Choice")

            //Fingerboard
            .waitForElementVisible("@fingerboard")
            .click("@fingerboard")
            .waitForElementNotVisible("@neckShapeText")
            .waitForElementPresent("@fingerBoardMenuActive")

            .click("@fingerboardMaple")
            .verify.containsText("@fingerboardChoiceMaple", "Maple", "Verified: Maple Fingerboard Choice")
 
            .click("@fingerboardRosewood")
            .verify.containsText("@fingerboardChoiceRosewood", "Rosewood", "Verified: Rosewood Fingerboard Choice")

            //Pickguard
            .waitForElementVisible("@pickguard")
            .click("@pickguard")
            .waitForElementNotVisible("@fingerboardText")
            .waitForElementPresent("@pickGuardMenuActive")

            .click("@pickguardTortoiseShell")
            .verify.containsText("@pickguardChoiceTortoiseShell", "4 Ply Tortoise Shell", "Verified: 4 Ply Tortoise Shell Pickguard Choice")

            .waitForElementVisible("@pickguard4PlyAgedWhitePearl")
            .click("@pickguard4PlyAgedWhitePearl")
            .verify.containsText("@pickguardChoice4PlyAgedWhitePearl", "4 Ply Aged White Pearl", "Verified: 4 Ply Aged White Pearl Pickguard Choice")

            .waitForElementVisible("@pickguard3PlyMintGreen")
            .click("@pickguard3PlyMintGreen")
            .verify.containsText("@pickguardChoice3PlyMintGreen", "3 Ply Mint Green", "Verified: 3 Ply Mint Green Pickguard Choice")

            .waitForElementVisible("@pickguard3PlyParchment")
            .click("@pickguard3PlyParchment")
            .verify.containsText("@pickguardChoice3PlyParchment", "3 Ply Parchment", "Verified: 3 Ply Parchment Pickguard Choice")

            .waitForElementVisible("@pickguard3PlyBlack")
            .click("@pickguard3PlyBlack")
            .verify.containsText("@pickguardChoice3PlyBlack", "3 Ply Black", "Verified: 3 Ply Black Pickguard Choice")

            // Pickups
            .waitForElementVisible("@pickups")
            .click("@pickups")
            .waitForElementNotVisible("@pickguardText")
            .waitForElementPresent("@pickupsMenuActive")

            .click("@pickupsOriginalJazz")
            .waitForElementVisible("@closePopUp")
            .click("@closePopUp")
            .verify.containsText("@pickupsChoiceOriginalJazz", "Original Jazz Bass", "Verified: Original Jazz Pickups Choice")
            .waitForElementNotPresent("@dialogBoxClosed")

            .click("@pickupsCustomShop60s")
            .waitForElementVisible("@closePopUp")
            .click("@closePopUp")
            .verify.containsText("@pickupsChoiceCustomShop60s", "Custom Shop '60s Jazz Bass", "Verified: Custom Shop '60s Jazz Pickups Choice")
            .waitForElementNotPresent("@dialogBoxClosed")

            .click("@pickupsPureVintage74")
            .waitForElementVisible("@closePopUp")
            .click("@closePopUp")
            .verify.containsText("@pickupsChoicePureVintage74", "Pure Vintage '74 Jazz Bass", "Verified: Pure Vintage '74 Jazz Pickups Choice")

            .click("@pickupsVMOD")
            .verify.containsText("@pickupsChoiceVMOD", "V-MOD Pickups", "Verified: V-MOD Pickups Choice")

            .click("@pickupsPureVintage64JB")
            .verify.containsText("@pickupsChoicePureVintage64JB", "Pure Vintage '64 Jazz Bass", "Verified: Pure Vintage '64 Jazz Pickups Choice")

            .click("@pickupsNoiseless")
            .verify.containsText("@pickupsChoiceNoiseless", "4th Gen Noiseless", "Verified: 4th Gen Noiseless Pickups Choice")

            // Tuning Machines
            .waitForElementVisible("@tuningMachines")
            .click("@tuningMachines")
            .waitForElementNotVisible("@pickupsText")
            .waitForElementPresent("@tuningMachinesMenuActive")

            .click("@tuningMachinesAmericanProfessional")
            .verify.containsText("@tuningMachinesChoiceAP", "American Professional", "Verified: American Professional Tuning Machines Choice")

            // Bridge
            .waitForElementVisible("@bridge")
            .click("@bridge")
            .waitForElementNotVisible("@tuningMachinesText")
            .waitForElementPresent("@bridgeMenuActive")

            .click("@bridgeAmericanPB")
            .verify.containsText("@bridgeChoiceAPB", "American Professional Bass", "Verified: American Professional Tuning Machines Choice")

            // Strings
            .waitForElementVisible("@strings")
            .click("@strings")
            .waitForElementNotVisible("@bridgeText")
            .waitForElementPresent("@stringsMenuActive")

            .click("@stringsGauge45101")
            .verify.containsText("@stringsChoiceGauge45101", "0.045-0.105", "Verified: 0.045-0.105 Strings Choice")

            // Case & Packaging
            .waitForElementVisible("@caseAndPackaging")
            .click("@caseAndPackaging")
            .waitForElementNotVisible("@stringsText")
            .waitForElementPresent("@caseAndPackagingMenuActive")

            .click("@caseAndPackagingJazzBassProLeft")
            .verify.containsText("@caseAndPackagingChoiceJazzBassProLeft", "JazzBass-Pro Case & Packaging-Left", "Verified: JazzBass-Pro Case & Packaging Choice")

            // Reset bass back to default state
            .click("@reset")
            .waitForElementVisible("@closePopUp")

            .click("@closePopUp")
            .waitForElementVisible("@body")
            .click("@body")
            .verify.containsText("@bodyChoiceCharcoalFrostMetallic", "Charcoal Frost Metallic", "Verified: The 'Reset' button reset the bass back to its default state")

            // Add Button
            .api.refresh()
        this
            .waitForElementPresent("@iframeLoad")
            .waitForElementVisible("@addToCart")
            .click("@addToCart")
            .pause(3000)
            .waitForElementVisible("@addToCartPopUp")
            .waitForElementVisible("@closeAddToCartPopUp")
            .click("@closeAddToCartPopUp")
        return this
    },

    editBassWithReset: function (data) {
        this
            .click("@shoppingCartEditBass")
            .waitForElementPresent("@productTitle")
            .verify.title("Jazz Bass | Mod Shop", "Verified: Jazz Bass Mod Shop Page Title")
            .click("@reset")
            .waitForElementVisible("@closePopUp")
            .click("@closePopUp")
            .verify.containsText(data.bodyChoice, data.bodyChoiceString, "Verified: The 'RESET' button did not reset the bass back to its default state")
        return this
    },

    editBassColor: function () {
        this
            .waitForElementVisible("@body")
            .waitForElementVisible("@bodyHotRodRed")
            .click("@bodyHotRodRed")
            .verify.containsText("@bodyChoiceHotRodRed", "Hot Rod Red", "Verified: Hot Rod Red Modified Body Color")
        return this
    },

    updateCart: function () {
        this
            .waitForElementVisible("@addToCart")
            .click("@addToCart")
            .pause(3000)
            .waitForElementVisible("@addToCartPopUp")
            .waitForElementVisible("@clickAddToCartPopUp")
            .click("@clickAddToCartPopUp")
            .verify.title("Cart | My Fender", "Verified: Cart Page Title")
        return this
    },

    deleteBassShoppingCart: function () {
        this
            .waitForElementVisible("@shoppingCartDeleteBass")
            .click("@shoppingCartDeleteBass")
        return this
    },

    verifyEmptyShoppingCart: function () {
        this
            .verify.not.elementPresent("@shoppingCartRemovedOrderSummary", "Verified Empty Cart: The 'ORDER SUMMARY' section has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedItemImage", "Verified Empty Cart: The item image has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedItemInfo", "Verified Empty Cart: The item info has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedItemPricing", "Verified Empty Cart: The item pricing has been removed")
            .verify.not.elementPresent("@shoppingCartRemovedQuantitySection", "Verified Empty Cart: The 'Quantity' section has been removed")
        return this
    },

    navigateToShoppingCart: function () {
        this
            .click("@shoppingCartLink")
            .verify.title("Cart | My Fender", "Verified: Cart Page Title")
        return this
    },

    verifyQuantitySelector: function (data) {
        this
            .waitForElementVisible("@quantitySelector")
            .setValue("@quantitySelector", data.item)
            .waitForElementVisible("@quantityErrorMessage")
            .verify.elementPresent("@quantityErrorMessage", "Verified Error Message: 'Only 1 units available'. Quantity selector on " + data.quantity)
            .pause(1000)
        return this
    },

    verifyBassShoppingCart: function () {
        this
            .waitForElementVisible("@shoppingCartItemNumber")
            .verify.containsText("@shoppingCartItemNumber", "1 Item", "Verified: Cart contains 1 item")
            .waitForElementVisible("@shoppingCartSubTotal")
            .verify.containsText("@shoppingCartSubTotal", "$1,899.99", "Verified: $1,899.99 Cart sub-total")
            .waitForElementVisible("@shoppingCartShippingCost")
            .verify.containsText("@shoppingCartShippingCost", "Free", "Verified: Free cart shipping cost")
            .waitForElementVisible("@shoppingCartGrandTotal")
            .verify.containsText("@shoppingCartGrandTotal", "$1,899.99", "Verified: $1,899.99 Cart grand total")
        return this
    },

    verify2BassShoppingCart: function () {
        this
            .waitForElementVisible("@shoppingCartItemNumber")
            .verify.containsText("@shoppingCartItemNumber", "2 Items", "Verified: Cart contains 2 items")
            .waitForElementVisible("@shoppingCartSubTotal")
            .verify.containsText("@shoppingCartSubTotal", "$3,799.98", "Verified: $3,799.98 Cart sub-total")
            .waitForElementVisible("@shoppingCartShippingCost")
            .verify.containsText("@shoppingCartShippingCost", "Free", "Verified: Free cart shipping cost")
            .waitForElementVisible("@shoppingCartGrandTotal")
            .verify.containsText("@shoppingCartGrandTotal", "$3,799.98", "Verified: $3,799.98 Cart grand total")
        return this
    },

    refreshAndVerifyCartQuantity: function (numString) {
        this
            .api.refresh()
        this
            .waitForElementVisible("@iframeLoad")
            .waitForElementPresent('@fenderBrandLogo')
            .moveToElement("@fenderBrandLogo", 10, 10)
            .waitForElementVisible("@shoppingCartQuantity")
            .verify.containsText("@shoppingCartQuantity", numString, "Verified: Cart contains " + numString + " items")
        return this
    },

    navigateToModPage: function (data) {
        this
            .verify.title("Mod Shop | Fender", "Verified: Mod Shop Page Title")

            // Homepage, click on the "DESIGN NOW" Bass button
            .waitForElementPresent("@designNowButton")
            .click("@designNowButton")

            // Waiting for the product title of the Jazz Bass page to be present before starting
            .waitForElementPresent("@productTitle")
            .verify.title("Jazz Bass | Mod Shop", "Verified: Jazz Bass Mod Shop Page Title")
        return this
    },

    bassMod: function (data) {
        this
            // Reload page to get around the "ADD TO CART" pop-up not working
            .api.refresh()
        this
            .waitForElementVisible("@iframeLoad")
            .getLocationInView("@shoppingCartLink")

            // Orientation
            .waitForElementVisible(data.orientation)
            .click(data.orientation)
            .waitForElementVisible("@orientationText")
            .waitForElementPresent("@orientationMenuActive")
            .click(data.orientationType)
            .verify.containsText(data.orientationChoice, data.orientationChoiceString, "Verified: " + data.orientationChoiceString + " Orientation Choice")

            // Body
            .waitForElementVisible(data.body)
            .click(data.body)
            .getLocationInView("@reset")
            .waitForElementNotVisible("@orientationText")
            .waitForElementPresent("@bodyMenuActive")
            .click(data.bodyType)
            .verify.containsText(data.bodyChoice, data.bodyChoiceString, "Verified: " + data.bodyChoiceString + " Body Choice")

            // Neck Shape
            .waitForElementVisible(data.neckShape)
            .click(data.neckShape)
            .waitForElementNotVisible("@bodyText")
            .waitForElementPresent("@neckShapeMenuActive")
            .click(data.neckShapeType)
            .verify.containsText(data.neckShapeChoice, data.neckShapeChoiceString, "Verified: " +  data.neckShapeChoiceString + " Neck Shape Choice")

            // Fingerboard
            .waitForElementVisible(data.fingerboard)
            .click(data.fingerboard)
            .waitForElementNotVisible("@neckShapeText")
            .waitForElementPresent("@fingerBoardMenuActive")
            .click(data.fingerboardType)
            .verify.containsText(data.fingerboardChoice, data.fingerboardChoiceString, "Verified: " +  data.fingerboardChoiceString + " Fingerboard Choice")

            // Pickguard
            .waitForElementVisible(data.pickguard)
            .click(data.pickguard)
            .waitForElementNotVisible("@fingerboardText")
            .waitForElementPresent("@pickGuardMenuActive")
            .click(data.pickguardType)
            .verify.containsText(data.pickguardChoice, data.pickguardChoiceString, "Verified: " + data.pickguardChoiceString + " Pickguard Choice")

            // Pickups
            .waitForElementVisible(data.pickups)
            .click(data.pickups)
            .waitForElementNotVisible("@pickguardText")
            .waitForElementPresent("@pickupsMenuActive")
            .click(data.pickupsType)
            .verify.containsText(data.pickupsChoice, data.pickupsChoiceString, "Verified: " + data.pickupsChoiceString + " Pickups Choice")

            // Tuning Machines
            .waitForElementVisible(data.tuningMachines)
            .click(data.tuningMachines)
            .waitForElementNotVisible("@pickupsText")
            .waitForElementPresent("@tuningMachinesMenuActive")
            .click(data.tuningMachinesType)
            .verify.containsText(data.tuningMachinesChoice, data.tuningMachinesChoiceString, "Verified: " + data.tuningMachinesChoiceString + " Tuning Machines Choice")

            // Bridge
            .waitForElementVisible(data.bridge)
            .click(data.bridge)
            .waitForElementNotVisible("@tuningMachinesText")
            .waitForElementPresent("@bridgeMenuActive")
            .click(data.bridgeType)
            .verify.containsText(data.bridgeChoice, data.bridgeChoiceString, "Verified: " + data.bridgeChoiceString + " Bridge Choice")

            // Strings
            .waitForElementVisible(data.strings)
            .click(data.strings)
            .waitForElementNotVisible("@bridgeText")
            .waitForElementPresent("@stringsMenuActive")
            .click(data.stringsType)
            .verify.containsText(data.stringsChoice, data.stringsChoiceString, "Verified: " + data.stringsChoiceString + " Strings Choice")

            // Case & Packaging
            .waitForElementVisible(data.caseAndPackaging)
            .click(data.caseAndPackaging)
            .waitForElementNotVisible("@stringsText")
            .waitForElementPresent("@caseAndPackagingMenuActive")
            .click(data.caseAndPackagingType)
            .verify.containsText(data.caseAndPackagingChoice, data.caseAndPackagingChoiceString, "Verified: " + data.caseAndPackagingChoiceString + " Case & Packaging Choice")

            // Add To Cart Button
            .waitForElementVisible(data.addToCart)
            .click(data.addToCart)
            .pause(3000)
            .waitForElementVisible("@addToCartPopUp")
            .waitForElementVisible("@closeAddToCartPopUp")
            .click("@closeAddToCartPopUp")
            .moveToElement("@fenderBrandLogo", 10, 10)

            // Reset
            .waitForElementVisible(data.reset)
            .click(data.reset)
            .waitForElementVisible(data.closeResetPopUp)
            .click(data.closeResetPopUp)
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
        shoppingCartDeleteBass: {
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
            selector: "//a[@class='minicart-link']",
            locateStrategy: 'xpath'
        },
        designNowButton: {
            selector: "//div[6]//a[text()='DESIGN NOW']",
            locateStrategy: 'xpath'
        },
        productTitle: {
            selector: "//div[text()='Jazz Bass']",
            locateStrategy: 'xpath'
        },
        closePopUp: {
            selector: "//div[@class='fc-button fc-fancy-button fc-dialog-submit']",
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: "//div[@class='fc-add-to-cart-container']//div[@class='fc-button-pair fc-outline-target']",
            locateStrategy: 'xpath'
        },
        addToCartPopUp: {
            selector: "//div[@class='shq_modal']",
            locateStrategy: 'xpath'
        },
        addToCartPopUpImageCheckout: {
            selector: "//img[@alt='Your mod shop design has been added to your cart. Complete your set up with the following gear. Checkout.']",
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
        clickAddToCartPopUp: {
            selector: "//div[@class='shq_modal']/div/a",
            locateStrategy: 'xpath'
        },
        goToShoppingCart: {
            selector: "(//div[@id='shq_modal_fender_modshop_modal_-_live']/div[@class='shq_modal']//a)[1]",
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
            selector: "//span[@title='American Pro Painted Headstock Black Jazz Bass']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeAmericanPro: {
            selector: "//div[@class='fc-attribute-selector fc-attribute-selector-alias-neck_shape fc-layout-image']//span[@title='American Professional']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeRoasted: {
            selector: "//span[@title='Roasted American Professional Jazz Bass']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        neckShapeChoiceAP: {
            selector: "//div[@class='fc-attribute-selector fc-attribute-selector-alias-neck_shape fc-layout-image']//div[@class='fc-selected-value-label'][contains(text(),'American Professional')]",
            locateStrategy: 'xpath'
        },
        neckShapeAmericanOriginalRosewood: {
            selector: "//span[@title='American Original Rosewood ’60’s Jazz Bass']//span[@class='fc-swatch']",
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
            selector: "//span[@title='Painted Headstock Black Maple']//span[@class='fc-swatch']",
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
            selector: "//div[@class='fc-attribute-selector fc-attribute-selector-alias-tuningmachines fc-layout-image']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        tuningMachinesChoiceAP: {
            selector: "//div[@class='fc-attribute-selector fc-attribute-selector-alias-tuningmachines fc-layout-image']//div[@class='fc-selected-value-label'][contains(text(),'American Professional')]",
            locateStrategy: 'xpath'
        },
        bridge: {
            selector: "//span[text()='Bridge']",
            locateStrategy: 'xpath'
        },
        bridgeAmericanPB: {
            selector: "//span[@title='American Professional Bass']//span[@class='fc-swatch']",
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
            selector: "//span[@title='JazzBass-Pro Case & Packaging-Right']//span[@class='fc-swatch']",
            locateStrategy: 'xpath'
        },
        caseAndPackagingJazzBassProLeft: {
            selector: "//span[@title='JazzBass-Pro Case & Packaging-Left']//span[@class='fc-swatch']",
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
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-orientation fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        bodyMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-body fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        neckShapeMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-neck_shape fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        fingerBoardMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-neckoption fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        pickGuardMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-pickguardmaterial fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        pickupsMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-pickups fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        tuningMachinesMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-tuningmachines fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        bridgeMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-bridge fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        stringsMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-stringsselection fc-nav-flyout-active']",
            locateStrategy: 'xpath'
        },
        caseAndPackagingMenuActive: {
            selector: "//li[@class='fc-nav-flyout-ca fc-ca-alias-case_&_packaging fc-nav-flyout-active']",
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