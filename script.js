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


/*  Ab ek aur important cheez

Agar kal tum style.css me color change karti ho.

To GitHub automatically update nahi hoga.

Har baar ye 3 commands chalani hongi:

git add .
git commit -m "Change button color"
git push

Bas.

Ab git remote add origin dobara kabhi nahi karna padega is project me, kyunki ek baar connection ban chuka hai. */