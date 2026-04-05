document.addEventListener('DOMContentLoaded', () => {

    /* --- Accordon (FAQ) --- */
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            /* Toggle active state */
            this.classList.toggle('active');

            /* Get content element */
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                /* Accordion is open, we need to close it */
                content.style.maxHeight = null;
            } else {
                /* Accordion is closed, let's close all other accordions first */
                const allContents = document.querySelectorAll('.accordion-content');
                const allHeaders = document.querySelectorAll('.accordion-header');
                
                allContents.forEach(c => c.style.maxHeight = null);
                allHeaders.forEach(h => {
                    if (h !== this) h.classList.remove('active')
                });

                /* Open this accordion */
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    });

    /* --- Scroll Animation (Header Shrink & Reveal) --- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
            header.style.padding = "5px 0";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            header.style.padding = "0";
        }
    });

    /* --- Smooth Scrolling for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, /* Adjust for fixed header */
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
