/*var num = Math.floor(Math.random() * 9) + 1;


$(".card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `assets/img/items/${num}.jpg`, // Background (image path or hex color).
  fg: `Images/front.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});

console.log(bg)*/
var c=0;
function select(self){
  
    var id=self.getAttribute("data-id")
    console.log(id)
    if(c==0){
      var num = Math.floor(Math.random() * 9) + 1;  
      document.getElementById(id).src=`assets/img/items/${num}.jpg`
      document.getElementById(`${id}st`).style.display="block"
      c=c+1;
    }
    else{
      alert("You have chosen already")
    }
    

}


