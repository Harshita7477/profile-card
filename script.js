let btn= document.getElementById("followBtn");
let msg=document.getElementById("messageBtn");
btn.addEventListener("click", function(){
    if(btn.textContent==="Follow"){
      btn.textContent="Following";
      
}else{
  btn.textContent="Follow";
}
btn.classList.toggle("following");
});

msg.addEventListener("click", function(){
 alert("Message sent to Rosy! 📩");
});