const navBarC= document.getElementById("navbarC");
const logo= document.getElementById("logo");
const list= document.getElementById("list")
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset>35){
        navBarC.classList.add("shadow-xl");
        logo.classList.remove("scale-125");
        list.classList.add('gap-60')
        list.classList.remove('gap-12')
        console.log("added")
    }else{
        navBarC.classList.remove("shadow-xl");
        logo.classList.add("scale-125");
        list.classList.remove('gap-60')
        list.classList.add('gap-12')
        console.log("removed")
    }
});