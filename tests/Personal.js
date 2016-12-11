module.exports = {
	beforeEach: function(browser,done){
		setTimeout(function(){
			done();
		},1000)
	},

	'Check for presence of body and title of Personal page' : function(browser){
		browser
		 .useCss()
		 .url('http://stage.cgu.iagdev.net/personal')
		 .waitForElementVisible('body',2000)
		 .assert.title('Personal Insurance - Make A Claim Online | CGU Insurance')
	},

	'Verify the urls in the header region' : function(browser){
		 browser.useCss()
		 browser.expect.element('nav.site-nav ul').to.have.attribute('class').which.contains('menu')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(1) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/learn-about-insurance')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(2) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(3) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/claims')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(4) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/contact')
	},

	'Check for text in the big tabs region' : function(browser){
		 browser.useXpath().assert.containsText("//nav[@class='big-tabs']/ul/li/a/h2[contains(text(),'Our insurance products')]",'OUR INSURANCE PRODUCTS')
		 browser.useXpath().assert.containsText("//nav[@class='big-tabs']/ul/li/a/h2[contains(text(),'Learn about insurance')]",'LEARN ABOUT INSURANCE')
	},

	'Validate the components of the product section' : function(browser){
		browser.useCss()
		browser.expect.element('div.container div').to.be.visible
		browser.expect.element('div.xs-accordian div:nth-child(1) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/car-insurance')
		browser.expect.element('div.xs-accordian div:nth-child(2) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/home-insurance')
		browser.expect.element('div.xs-accordian div:nth-child(3) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/boat-insurance')
		browser.expect.element('div.xs-accordian div:nth-child(4) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/travel-insurance')
		browser.expect.element('div.xs-accordian div:nth-child(5) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/residential-strata-insurance')
		browser.expect.element('div.xs-accordian div:nth-child(5) div:nth-child(2) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/caravan-insurance')
		browser.expect.element('div.xs-accordian div:nth-child(6) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/life-insurance')
		browser.end()
	}
}