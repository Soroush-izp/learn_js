let lampImage = document.getElementById('image'), 
btn = document.getElementById('btn'), 
flag = false;


function onOff () {
   if (!flag) {
      lampImage.setAttribute('src', "images/onbulb.png");
      btn.innerHTML = "Turn off";
      flag = true;
   } else {
      lampImage.setAttribute('src', "images/offbulb.png");
      btn.innerHTML = "Turn on";
      flag = false;
   }
}
// images/offbulb.png