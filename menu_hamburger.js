export default function hamburgerMenu(hamburger,panel,menuLink){
    document.addEventListener("click",e=>{
        if(e.target.matches(hamburger)|| e.target.matches(`${hamburger} *`)){
        document.querySelector(panel).classList.toggle("is-active");
        document.querySelector(hamburger).classList.toggle("is-active");
    }
        if(e.target.matches(menuLink)){
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(hamburger).classList.remove("is-active");  
        }
    }) 
}