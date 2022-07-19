
const navSlide = () => {
    const nav = document.querySelector("#links");
    const navLinks = document.querySelectorAll(".lista-nav li");

    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        document.querySelector("#hamburger").classList.toggle("toggleMenu")

    })

    // navLinks.forEach( (link, index ) => {
        
    //     link.style.animation = `navLinkFade 0.5 ease forwards ${index/7}s`
    //     console.log(index(7));
    // })
}

navSlide();




