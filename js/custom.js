// menu toggle

const menu = document.querySelector(".menu");
const icon = document.querySelector(".menu i");

menu.addEventListener("click", function(){
    this.classList.toggle("active");

    if(this.classList.contains("active"))
    {
        icon.setAttribute("class","ri-close-line");
    }
    else
    {
        icon.setAttribute("class","ri-menu-line");
    }

    //this.classList.contains('active') ?  icon.setAttribute("class","ri-close-line") : icon.setAttribute("class","ri-menu-line") ;


})

console.log(menu);






