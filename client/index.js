// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);





/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */
// 🎯 TODO: The cheapest t-shirt

var cheapest_tshirt ="https://www.loom.fr/products/le-t-shirt";
console.log(cheapest_tshirt);

// 🎯 TODO: Number of products

var number_product = marketplace.length
console.log("Number of products : " + number_product)

// 🎯 TODO: Brands name

var brands_name = [];
marketplace.forEach(element => brands_name.push(element.brand))
console.log("Brands names : " + brands_name)
console.log("Number of brands : " + brands_name.length)



// 🎯 TODO: Sort by price

var marketplacebyprice = marketplace.sort(function(a,b) {
  return a.price - b.price;
});
console.log(marketplacebyprice);

// 🎯 TODO: Sort by date

var marketplacebydate = marketplace.sort(function(a,b) {
  a = new Date(a.date);
  b = new Date(b.date)
  return b - a;
});
console.log(marketplacebydate);

// 🎯 TODO: Filter a specific price range

var list = []
marketplace.forEach(element => {
  if((element.price > 50) & (element.price < 100)){
    list.push(element);
  }
});
console.log(list);

// 🎯 TODO: Average Basket

var moyenne=0;
marketplace.forEach(element => {
  moyenne+=element.price;
});
moyenne /= numProducts;
console.log(moyenne);



/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

const brands = {}
var i;
var prodB;
for(i=0;i< brand_names.length;i++){
  prodB=[];
  var j;
  for(j=0;j<nb_products;j++){
    if(marketplace[j].brand == brand_names[i]){
      var product=[marketplace[j].name,marketplace[j].price,marketplace[j].link,marketplace[j].date];
      prodB.push(product);
    }
  }
  brands[brand_names[i]] = prodB;
}
console.log(brands);
var k;
var qtB = "";
for(var b in brands){
  qtB = b+ " : "+ brands[b].length +" products";
  console.log(qtB);
}

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

for(var b in brands){
  brands[b]=brands[b].sort(function(a1,a2){
    return a1[1] - a2[1];
  });
};
console.log(brands);

// 🎯 TODO: Sort by date for each brand

for(var b in brands){
  brands[b]=brands[b].sort(function(a1,a2){
    a1[3]=new Date(a1[3].toString());
    a2[3]=new Date(a2[3].toString());
    return a1[3] - a2[3];
  });
};
console.log(brands);



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

brandlist.forEach(element => {
  var l = brands[element].length;
  var p90 = l*0.9;
  p90 = Math.round(p90);
  console.log(p90,brands[element][p90])
});



/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var current = Date(date);
COTELE_PARIS.forEach(element => {
  var tocompare = Date(element.released);
  var Difference_In_Time = date - element.released;
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  console.log(current,tocompare)
});

// 🎯 TODO: Reasonable price

var reasonnable = true;
COTELE_PARIS.forEach(element => {
  if(element.price>100){
    reasonnable = false;
  }
});
if(reasonnable){
  console.log("It's a reasonable price shop")
}
else{
  console.log("It's not a reasonable price shop");
}

// 🎯 TODO: Find a specific product

COTELE_PARIS.forEach(element => {
  if(element.uuid == 'b56c6d88-749a-5b4c-b571-e5b5c6483131'){
    console.log(element);
  }
});

// 🎯 TODO: Delete a specific product

delete COTELE_PARIS[3];
console.log(COTELE_PARIS);


// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;
jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
