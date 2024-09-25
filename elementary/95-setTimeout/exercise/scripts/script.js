let Profile = "";

Profile = prompt("set your Profile :\n1.image1\n2.image2\n3.image3");

let time = setTimeout(() => {
   if (!Profile) {
      alert("Please select a profile photo!")
   }
}, 5000)