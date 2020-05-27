/* JUMBO ANIMATION */
let jumboTL = gsap.timeline();

jumboTL
    .fromTo("#jumbo .transparent-color",
        {
            opacity: 0,
            backgroundColor: "black"
        },
        {
            opacity: .5,
            duration: 2
        }
    ).fromTo(".logo",
        {
            x: -200,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1.5
        }
    ).fromTo(".menu",
        {
            x: 200,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1.3
        },
        '> -1.3s'
    ).fromTo("#jumbo .titles h1",
        {
            x: 0,
            opacity: 0
        },
        {
            x: 100,
            opacity: 1,
            duration: 1
        },
        '> -.3s'
    ).fromTo("#jumbo .titles h2",
        {
            x: 0,
            opacity: 0
        },
        {
            x: 135,
            opacity: 1,
            duration: 1
        },
        '> -.8s'
    ).fromTo("#jumbo .state",
        {
            x: "100%"
        },
        {
            x: 0,
            duration: 1
        }
    ).fromTo("#jumbo .store-info",
        {
            y: "100%"
        },
        {
            y: 0,
            duration: 1
        },
        '> -1.8'
    ).fromTo("#jumbo .store-info img",
        {
            y: 400,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: .2
        },
        '> -1.8'
    );
/* JUMBO TWO COLLECTION ANIMATION */

const twoCollectionTL = gsap.timeline();

twoCollectionTL
    .fromTo('#two-collections .col-md-6',
        {
            y: 300,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1
        }
    ).fromTo('#two-collections .left-c span',
        {
            y: 300,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1
        }
    ).fromTo('#two-collections .right-c span',
        {
            y: 300,
            opacity: 0
        },
        {
            y: -100,
            opacity: 1,
            duration: 1
        },
        '> -.8'
    );

let homeController = new ScrollMagic.Controller();

let twoCScene = new ScrollMagic.Scene({
        triggerElement: "#two-collections",
        triggerHook: .9,
        reverse: false,
        offset: 100,
        duration: 0
        //duration: document.querySelector("#two-collections").offsetHeight
    })
    .setTween(twoCollectionTL)
    //.addIndicators()
    .addTo(homeController)

/* HEADER ANIMATION */
const headerTL = gsap.timeline();

headerTL
    .fromTo(
        "header",
        {
            backgroundColor: "rgba(0,0,0,0)"
        },
        {
            backgroundColor: "rgba(0,0,0,1)",
            duration: .4
        }
    ).fromTo(
        "header .logo a",
        {
            scale: 1
        },
        {
            scale: .8,
            duration: .4
        },
        "> .-4"
    );

let headerScene = new ScrollMagic.Scene({
        triggerElement: "#jumbo",
        triggerHook: 1,
        reverse: true,
        offset: (document.querySelector("#jumbo").offsetHeight) + 100,
        duration: 0
    })
    .setTween(headerTL)
    .addTo(homeController)
    

/* HORIZONTAL SALE ANIMATION */
const horizontalSaleTL = gsap.timeline();

horizontalSaleTL
    .fromTo(
        "#horizontal-sale",
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ).fromTo(
        "#horizontal-sale .percent-number",
        {
            scale: 0
        },
        {
            scale: 1,
            duration: 1
        }
    ).fromTo(
        "#horizontal-sale .title",
        {
            scale: 0
        },
        {
            scale: 1
        },
        ">-1"
    )

let horizontalSaleScene = new ScrollMagic.Scene({
        triggerElement: "#horizontal-sale",
        triggerHook: 1,
        reverse: true,
        offset: 150,
        duration: document.querySelector("#horizontal-sale").offsetHeight
    })
    .setTween(horizontalSaleTL)
    .addTo(homeController)
    
    
/* PRODUCTS GROUP SALE ANIMATION */
const productsGroupTL = gsap.timeline();

productsGroupTL
    .fromTo(
        "#products-group .product-bg",
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            stagger: .3,
            duration: .3
        }
    )

let productsGroupScene = new ScrollMagic.Scene({
        triggerElement: "#products-group",
        triggerHook: 1,
        reverse: true,
        offset: 0,
        duration: 0
    })
    .setTween(productsGroupTL)
    .addTo(homeController)

/* FOOTER ANIMATION */
const footerTL = gsap.timeline();

footerTL
    .fromTo(
        "footer .footer-fade-in",
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            stagger: .3,
            duration: .3
        }
    )

let footerScene = new ScrollMagic.Scene({
        triggerElement: "footer",
        triggerHook: 1,
        reverse: false,
        offset: 0,
        duration: 0
    }) 
    .setTween(footerTL)
    .addTo(homeController)

/* TOGGLE MENU */

const menu = document.getElementById('mobile-menu');
const closingMenu = document.querySelector('.closing-mobile-menu');

const openMenu = () => {
    menu.classList.toggle('active');
}

closingMenu.onclick = function () { 
    menu.classList.toggle('active');
};

// document.querySelector(".open-mobile-menu")
//     .addEventListener("click", function() {
//     if (this.classList.contains("active")) {
//         this.classList.remove("active");
//     } else this.classList.add("active");
//     });

