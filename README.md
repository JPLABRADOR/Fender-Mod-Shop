# Fender-Mod-Shop
Solo project for the DevMountain Software QA Bootcamp. Manual and automated testing of The Fender Mod Shop website. Testing focuses on the user workflow and functionality between the bass modification page and the shopping cart page. Browser automation created using Nightwatch.js.

Website: https://shop.fender.com/en-US/mod-shop.html

#### Instructions:
Install NodeJS (includes npm): https://nodejs.org/en/download/

Open a terminal or command line and install nightwatch globally on your machine:
```
npm i -g nightwatch
```
Navigate to your local project folder.
Clone the following repository: 
```
git clone https://github.com/JPLABRADOR/Fender-Mod-Shop.git
```
Navigate to the newly cloned directory:
```
cd Fender-Mod-Shop
```
Install chromedriver for the project:
```
npm install chromedriver --save-dev
```
Execute the "Fender-Mod-Shop" automation:
```
nightwatch tests/fenderModShop.js
```
