//console.log(document.body.onload());
document.body.onload = (function () {
  console.log("SCRIPT BY Sebaa ismail"); //, 104, 124, 21, 20, 87, 104);

  //canvas.width = width || 0;
  //canvas.height = height || 0;
  //canvas.context.drawImage(imgPast, 0, 0);//, 104, 124, 21, 20, 87, 104);
})();
//console.log("SCRIPT BY Sebaa ismail");

var parent = document.getElementById("animation_container");

parent.style.marginLeft = "auto";
parent.style.marginRight = "auto";

var width, height;
var img = new Image();
img.onload = function () {
  console.log(this.width, this.height);
  canvas.style.width = `${this.width}px`;
  canvas.style.height = `${this.height}px`;
  width = `${this.width}px`;
  height = `${this.height}px`;
};
img.src = "https://i.ibb.co/4TL3Sb0/gogo.png";

var imgPastUrl = "https://i.ibb.co/wZtS3Fk/pastille.png";
var imgPastEl;

var imgPast = new Image();
imgPast.onload = function () {
  imgPastEl = document.createElement("img");
  imgPastEl.id = "pastille";
  imgPastEl.src = imgPastUrl;
  parent.appendChild(imgPastEl);
  imgPastEl.style.display = "none";
  imgPastEl.style.width = "165px";
  imgPastEl.style.height = "165px";

  //imgPastEl.style.display = "block";

  //imgPastEl = document.getElementById("pastille");
};

imgPast.src = imgPastUrl;

//canvas.style.backgroundImage="url('https://i.ibb.co/4TL3Sb0/gogo.png')";
canvas.style.display = "block";
canvas.style.marginLeft = "auto";
canvas.style.marginRight = "auto";
canvas.style.position = "relative";
canvas.style.paddingLeft = "0";
canvas.style.paddingRight = "0";

setTimeout(() => {
  var canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  //	ctx.clearRect(0, 0, canvas.width, canvas.height);
  //imgPastEl.style.display = "block";
  ctx.drawImage(imgPast, 200, 200);
}, 2000);
