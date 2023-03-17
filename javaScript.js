let popup=document.getElementById("divz");
let con=document.getElementById("divMain");

function contact(){
  popup.classList.add("active");
  con.classList.add("when");
  
}
function back(){
  popup.classList.remove("active");
  con.classList.remove("when");
  
}
let btnabt=document.getElementById("divAbout");

function btn3(){
  btnabt.classList.add("how");
  popup.classList.add("active");
}

function btn0(){
  btnabt.classList.remove("how");
  popup.classList.remove("active");
  
}





























