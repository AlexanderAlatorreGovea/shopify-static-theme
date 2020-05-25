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
    )