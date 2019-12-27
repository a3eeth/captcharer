// ECHO is on.

const textToImage = require('text-to-image')
const cryptoRandomString = require('crypto-random-string')

let gibberish = cryptoRandomString({
	length: 11,
	type: 'url-safe'
})

textToImage.generate(gibberish).then(function(dataURI) {
	console.log(dataURI)
});