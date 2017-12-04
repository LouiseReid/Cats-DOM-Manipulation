

var catsArray = [
  {name: "Boba", favFood: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg", width: "400"},
  {name: "Barnaby", favFood: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg", width: "400"},
  {name: "Max", favFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg", width: "400"},
  {name: "Maggie", favFood: "Dreamies", image: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", width: "400"},
  {name: "Fergus", favFood: "Ham", image: "https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166", width: "400"},
  {name: "Clio", favFood: "Chicken", image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-08/17/19/enhanced/buzzfeed-prod-fastlane-01/enhanced-6925-1503011583-15.jpg?downsize=715:*&output-format=auto&output-quality=auto", width: "400"}
];

var createObject = function(){
  var catObject = document.createElement('ul');
  catObject.classList.add('cat');
  return catObject
}

var createName = function(name){
  var listName = document.createElement('li');
  listName.innerText = "Name: " + name;
  return listName;
}

var createFood = function(food){
  var favouritefood = document.createElement('li');
  favouritefood.innerText = "Favourite Food: " + food;
  return favouritefood;
}

var createImage = function(){
  var image = document.createElement('li');
  return image;
}

var createPicture = function(src, width){
  var picture = document.createElement('img');
  picture.src = src
  picture.width = width
  return picture;
}

var appendElements = function(catObject, name, favouritefood, image, picture){
  catObject.appendChild(name);
  catObject.appendChild(favouritefood);
  image.appendChild(picture);
  catObject.appendChild(image);

  var cats = document.querySelector('#cats');
  cats.appendChild(catObject);
}

var addCat = function(name, favouritefood, picture, width){
  var catObject = createObject();
  var name = createName(name);
  var favouritefood = createFood(favouritefood);
  var image = createImage();
  var picture = createPicture(picture, width);

  appendElements(catObject, name, favouritefood, image, picture);
}


var app = function(){
  for(var cat of catsArray){
    addCat(cat.name, cat.favFood, cat.image, cat.width);
  }

}

window.onload = app;
