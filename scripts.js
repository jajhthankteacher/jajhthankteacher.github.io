const footeryear = document.querySelector('.year').innerHTML=new Date().getFullYear();
const navlistbtn = document.querySelector('#navlistbtn');
const navlist = document.querySelector('.navlist');
const body = document.querySelector('body');
navlistbtn.onclick=function(){
    navlist.classList.toggle('active');
    navlistbtn.classList.toggle('active');
}
//change navlistbtn content when onclick 
// function changeText(idElement) {
//     var navlistbtn = document.getElementById('navlistbtn' + idElement);
//     if (idElement === 1) {
//         if (navlistbtn.innerHTML === '&ensp;<i class="bi bi-link-45deg"></i>快速連結&ensp;')navlistbtn.innerHTML = '關閉選單';
//         else {
//             navlistbtn.innerHTML = '&ensp;<i class="bi bi-link-45deg"></i>快速連結&ensp;';
//         }
//     }
// }
console.log("")