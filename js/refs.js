document.addEventListener("DOMContentLoaded", function () {
    const home = document.getElementById('home');
    const pricing = document.getElementById('pricing');
    //const projects = document.getElementById('projects');
    const pricingButton = document.getElementById("pricingButton");
    const pricingButtonTOP = document.getElementById("pricingButtonTOP");
    //const projectsButton = document.getElementById("projectsButton");

    let currentSection = "home";

    function navigateTo(targetSection) {
        const sections = { home, pricing}; //, projects
        const currentElement = sections[currentSection];
        const targetElement = sections[targetSection];

        const direction = getAnimationDirection(currentSection, targetSection);

        currentElement.style.transition = "margin-left 0.5s ease-in-out";
        currentElement.style.marginLeft = direction === "right" ? "-200%" : "200%";

        setTimeout(() => {
            currentElement.classList.add("hidden");
            targetElement.style.marginLeft = direction === "right" ? "200%" : "-200%";
            targetElement.classList.remove("hidden");

            setTimeout(() => {
                targetElement.style.transition = "margin-left 0.5s ease-in-out";
                targetElement.style.marginLeft = "0%";

                if (targetSection === "home") {
                    pricingButton.innerHTML = "Pricing";
                    //projectsButton.innerHTML = "projects";
                } else if (targetSection === "pricing") {
                    pricingButton.innerHTML = "Home";
                    //projectsButton.innerHTML = "projects";
                } 
                /* 
                else if (targetSection === "projects") {
                    pricingButton.innerHTML = "Pricing";
                    projectsButton.innerHTML = "Home";
                }
                */

                currentSection = targetSection;
            }, 100);
        }, 300);
    }

    function getAnimationDirection(current, target) {
        const order = ["home", "pricing"]; //, "projects"
        const currentIndex = order.indexOf(current);
        const targetIndex = order.indexOf(target);

        return targetIndex > currentIndex ? "right" : "left";
    }

    pricingButton.addEventListener("click", function () {
        if (currentSection !== "pricing") {
            navigateTo("pricing");
        } else {
            navigateTo("home");
        }
    });

    pricingButtonTOP.addEventListener("click", function () {
        if (currentSection !== "pricing") {
            navigateTo("pricing");
        } else {
            navigateTo("home");
        }
    });
    /*
    projectsButton.addEventListener("click", function () {
        if (currentSection !== "projects") {
            navigateTo("projects");
        } else {
            navigateTo("home");
        }
    });
    */
});