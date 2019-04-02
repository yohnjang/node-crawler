const request = require('request');
const cheerio = require('cheerio');

request('http://localhost/demosite', (error, response, html) => {
  if( !error && response.statusCode == 200) { 
   const $ = cheerio.load(html);

   const h = $('.node');

   console.log(h.text());

   const output = h.find('h1').text();

   console.log(output);
  }
});
