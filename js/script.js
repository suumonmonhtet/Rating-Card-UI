const link = document.querySelector(".click");

const submitbtn = document.querySelector(".submit");
const card = document.querySelector(".card");
const thankyou = document.querySelector(".thankyou");

const ratingno = document.querySelectorAll(".ratinglist");
const selectedno = document.querySelector(".selectedno");

ratingno.forEach((rate) => {
    rate.addEventListener("click", () => {
    selectedno.innerHTML = rate.innerHTML;
    })
})

submitbtn.onclick = function(){
    // alert(selectedno);
    if(selectedno.innerHTML != ""){
    card.style.display = "none";
    thankyou.style.display = "block";    
    }
           
}
link.onclick = function(){
    //console.log("test");
    card.style.display = "block";  
    thankyou.style.display = "none";                 
}