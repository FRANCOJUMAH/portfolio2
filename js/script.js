navbar = document.querySelector(".navbar").querySelectorAll("a");

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
});

var typed = new Typed(".typing",{
    strings:["", "Network Engineer", "Front-End Developer","Web Designer","Graphics Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

