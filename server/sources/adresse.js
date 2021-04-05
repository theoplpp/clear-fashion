const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 */
const parse = data => {
  const $ = cheerio.load(data);

  return $('.product_list.grid.row .product-container')
    .map((i, element) => {
      
      const name = $(element)
        .find('.right-block .product-name-container.versionmob .product-name')
        .text()
        .trim()
        .replace(/\s/g, ' ');
      const price = parseInt(
        $(element)
          .find('.right-block .price.product-price')
          .text()
      );
      const brand = "adresse"
      const photo = $(element)
        .find('.left-block .product-image-container .product_img_link .replace-2x.img-responsive.lazy.img_0.img_1e')
        .attr('data-original');

      return {brand,name, price,photo};
    })
    .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};




