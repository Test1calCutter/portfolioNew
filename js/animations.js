document.addEventListener("DOMContentLoaded",function(){
    const animate = document.getElementById("animate");
    const welcome    = document.getElementById("welcome");
    const header     = document.getElementById("header");

    animate.style.marginTop = "-100%";
    
    setTimeout(() => {
        animate.style.transition = "1.5s ease-in-out";
        animate.style.marginTop = "0%";
        setTimeout(() => {
            welcome.style.transition = ".2s ease-in-out";
            welcome.style.marginTop = "1.5%";
        }, 1000);
        setTimeout(() => {
            header.style.transition = "1s ease-in-out";
            header.style.marginTop = "0.8%";
            setTimeout(() => {
                welcome.style.transition = ".2s ease-in-out";
                welcome.style.marginTop = "0%";
            }, 800);
            setTimeout(() => {
                header.style.transition = ".2s ease-in-out";
                header.style.marginTop = "0%";
            }, 1100);
        }, 600);
    
    }, 100);

})