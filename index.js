
function navSlider (){
    const navList = document.querySelector(".nav-list")
    const burger = document.querySelector(".hamburger")

    burger.addEventListener("click", ()=>{
        navList.classList.toggle("active");
    })
}
navSlider();




let  productImg = document.getElementById("productImg")
let  smallImg = document.getElementsByClassName("smallImg")

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}
smallImg[4].onclick = function(){
    productImg.src = smallImg[4].src;
}
smallImg[5].onclick = function(){
    productImg.src = smallImg[5].src;
}


let a;
function show_hide() {
    if (a==1) 
    {
        document.getElementById("search").style.display="block";
        return a= 0;
    }
    else{
        document.getElementById("search").style.display="none";
        return a=1;
    }
}