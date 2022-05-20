const footeryear = document.querySelector('.year').innerHTML=new Date().getFullYear();
const navlistbtn = document.querySelector('#navlistbtn');
const navlist = document.querySelector('.navlist');
const body = document.querySelector('body');
navlistbtn.onclick=function(){
    navlist.classList.toggle('active');
    // body.classList.toggle('active');
    navlistclose.style.display="block";
}
