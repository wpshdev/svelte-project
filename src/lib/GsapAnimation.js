// To use: 
// Import the needed animation functions
// Use the function by adding it on element with 'in' attribute e.g in:textAnimate
// NOTE: Need to always add ID on the element you want to animate - to be specific on the element

// Dynamic attributes
// Add 'gsap-delay' on the element to add delay in seconds. e.g gsap-delay="1" (1s delay)
// Add 'gsap-duration' on the element to add duration in seconds. e.g gsap-duration="1" (1s duration)
// Add 'gsap-y' on the element to add starting position of fly in
// Add 'gsap-x' on the element to add starting position of slide in
// Add 'gsap-start' on the element to specify trigger point of scroll trigger

import {gsap}  from "gsap/dist/gsap";        
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
import {SplitText} from "gsap/dist/SplitText";   
// import {ScrollSmoother} from "gsap/dist/ScrollSmoother";   

gsap.registerPlugin(ScrollTrigger, SplitText);

// Default Values

const delayDefault = '0';
const durationDefault = '0.5';
const flyY = '70';
const slideX = '7';
const startDefault = "top bottom";

let mm = gsap.matchMedia();

// FadeIn

export function fadeIn(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;
    targetElement.style.opacity = '0';
    
    // FadeIn animation
    mm.add("(min-width: 769px)", () => {
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: start,
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                tl.set(
                    '#' + targetElementID,
                    {
                        opacity: 0,
                    }
                );

                tl.to(
                    '#' + targetElementID,
                    {
                        duration: duration,
                        opacity: 1,
                        delay: delay,
                    }
                );
            }
        });
    });

    mm.add("(max-width: 768px)", () => { // default start on tablet and below
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: startDefault,
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                tl.set(
                    '#' + targetElementID,
                    {
                        opacity: 0,
                    }
                );

                tl.to(
                    '#' + targetElementID,
                    {
                        duration: duration,
                        opacity: 1,
                        delay: delay,
                    }
                );
            }
        });
    });

}

// fadeOut

export function fadeOut(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;
    
    // fadeOut animation
    ScrollTrigger.create({
        trigger: '#' + targetElementID,
        start: start,
        once: true,
        // markers: true,
        onEnter: function() { 
            const tl = gsap.timeline();
            tl.set(
                '#' + targetElementID,
                {
                    opacity: 1,
                }
            );

            tl.to(
                '#' + targetElementID,
                {
                    duration: duration,
                    opacity: 0,
                    delay: delay,
                }
            );
        }
    });

}

// Fly

export function fly(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const y = targetElement.getAttribute("gsap-y") ? targetElement.getAttribute("gsap-y") : flyY;
    const endY = targetElement.getAttribute("gsap-endY") ? targetElement.getAttribute("gsap-endY") : 0;
    const element_opacity = targetElement.getAttribute("gsap-opacity") ? targetElement.getAttribute("gsap-opacity") : 0;
    const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;
    targetElement.style.opacity = element_opacity;

    // Fly animation
    // setTimeout(() => {
        mm.add("(min-width: 769px)", () => {
            ScrollTrigger.create({
                trigger: '#' + targetElementID,
                start: start,
                once: true,
                // markers: true,
                onEnter: function() { 
                    const tl = gsap.timeline();
                    tl.set(
                        '#' + targetElementID,
                        {
                            opacity: element_opacity,
                            yPercent: y,
                        }
                    );
                    tl.to(
                        '#' + targetElementID,
                        {
                            duration: duration,
                            opacity: 1,
                            yPercent: endY,
                            delay: delay,
                        }
                    );
                }, 
            })
        })

        mm.add("(max-width: 768px)", () => { // default start on tablet and below
            ScrollTrigger.create({
                trigger: '#' + targetElementID,
                start: startDefault,
                once: true,
                // markers: true,
                onEnter: function() { 
                    const tl = gsap.timeline();
                    tl.set(
                        '#' + targetElementID,
                        {
                            opacity: element_opacity,
                            yPercent: 30,
                        }
                    );
                    tl.to(
                        '#' + targetElementID,
                        {
                            duration: duration,
                            opacity: 1,
                            yPercent: 0,
                            delay: delay,
                        }
                    );
                }, 
            })
        })
    // }, 100);
}


// Slide

export function slide(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const x = targetElement.getAttribute("gsap-x") ? targetElement.getAttribute("gsap-x") : slideX;
    const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;
    targetElement.style.opacity = '0';

    // slide animation
    mm.add("(min-width: 769px)", () => {
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: start,
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                tl.set(
                    '#' + targetElementID,
                    {
                        opacity: 0,
                        xPercent: x,
                    }
                );
                tl.to(
                    '#' + targetElementID,
                    {
                        duration: duration,
                        xPercent: 0,
                        opacity: 1,
                        delay: delay,
                    }
                ); 
            },
        });
    });

    mm.add("(max-width: 768px)", () => { // default start on tablet and below
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: startDefault,
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                tl.set(
                    '#' + targetElementID,
                    {
                        opacity: 0,
                        xPercent: x,
                    }
                );
                tl.to(
                    '#' + targetElementID,
                    {
                        duration: duration,
                        xPercent: 0,
                        opacity: 1,
                        delay: delay,
                    }
                ); 
            },
        });
    });
}

// Text Animate
// Add text-animate class on the element

export function textAnimate(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;
    targetElement.style.opacity = '0';

    // Split text
    const text = targetElement.textContent;
    const charSplit = text.split('');
    let currentDiv = '';
    let transformedHTML = '';
    charSplit.forEach((c, index) => {
        currentDiv += `<span class="letter">${c === ' ' ? '&nbsp;' : c}</span>`;
      
        if (c === ' ' || index === charSplit.length - 1) {
          if (currentDiv.trim() !== '') {
            transformedHTML += `<span>${currentDiv}</span>`;
          } else {
            transformedHTML += currentDiv; // Preserve the space as it is
          }
          currentDiv = ''; // Reset currentDiv for the next group
        }
      });
    targetElement.innerHTML = transformedHTML;

    // Text animation
    mm.add("(min-width: 769px)", () => {
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: start,
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                let letter = targetElement.querySelectorAll('span.letter');
                
                tl.set(
                    '#' + targetElementID,
                    {
                        autoAlpha: 1,
                    }
                );

                tl.set(
                    letter, 
                    {
                        yPercent: 100,
                        opacity: 0,
                    }
                );

                tl.to(
                    letter,
                    {
                        duration: duration,
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.05,
                        delay: delay,
                        ease: "back"
                    }
                );
            },
        });
    });

    mm.add("(max-width: 768px)", () => { // default start on tablet and below
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: startDefault,
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                let letter = targetElement.querySelectorAll('span.letter');
                
                tl.set(
                    '#' + targetElementID,
                    {
                        autoAlpha: 1,
                    }
                );

                tl.set(
                    letter, 
                    {
                        yPercent: 100,
                        opacity: 0,
                    }
                );

                tl.to(
                    letter,
                    {
                        duration: duration,
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.05,
                        delay: delay,
                        ease: "back"
                    }
                );
            },
        });
    });

}

// Written by parth
// for minus scroll animation where section is going upwards

// Image scaleUp

export function scaleUp(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;
    // scaleUp animation

    ScrollTrigger.create({
        trigger: '#' + targetElementID,
        start: start,
        once: true,
        // markers: true,
        onEnter: function() { 
            const tl = gsap.timeline();
            tl.to(
                '#' + targetElementID,
                {
                    duration: duration,
                    scale: 1,
                    delay: delay,
                }
            ); 
        }, 
    })
}



// slowDownSection

export function slowDownSection(node) {

    const parentElement = node; // target element
    const parentElementID = parentElement.id;
    const container = parentElement.querySelector('.container');

    const defaultDistance = '-120';
    const yDistance = parentElement.getAttribute("gsap-ydistance") ? parentElement.getAttribute("gsap-ydistance") : defaultDistance;

    // slowdown effect on the main container on desktop
    mm.add("(min-width: 769px)", () => {
        gsap.to(container, {
            yPercent: yDistance, 
            ease: "none", 
            scrollTrigger: {
                trigger: '#' + parentElementID, 
                scrub: 4,
                start: 'clamp(top 30% top)',
                // end: 'clamp(bottom top)',
                end: "+=" + (window.innerHeight * 5),
                pin: true,
                // markers: true,
                onEnter: () => {
                    gsap.to('#' + parentElementID, {
                        opacity: 1,
                        yPercent: 0,
                    });
                },
                onLeave: () => {
                    gsap.to('#' + parentElementID, {
                        opacity: 0,
                        yPercent: -100,
                        duration: 1,
                    });
                },
                onEnterBack: () => {
                    gsap.to('#' + parentElementID, {
                        opacity: 1,
                        yPercent: 0,
                    });
                },
            }
        });
    });

}

// Fly 2 new fly animation to move the element same with scrolling - usually for image


export function fly2(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const y = targetElement.getAttribute("gsap-y") ? targetElement.getAttribute("gsap-y") : flyY;
    // const start = targetElement.getAttribute("gsap-start") ? targetElement.getAttribute("gsap-start") : startDefault;

    // Fly2 animation
    mm.add("(min-width: 769px)", () => {
        gsap.to('#' + targetElementID, {
            yPercent: y, 
            ease: "none", 
            scrollTrigger: {
                trigger: '#' + targetElementID, 
                scrub: true,
                start: "top center",
                // end: "bottom top",
                end: "+=" + (window.innerHeight * 3.5),
                // pin: true,
                // markers: true,
            }
        });
    });

    mm.add("(max-width: 768px)", () => { // default start on tablet and below
        ScrollTrigger.create({
            trigger: '#' + targetElementID,
            start: 'startDefault',
            once: true,
            // markers: true,
            onEnter: function() { 
                const tl = gsap.timeline();
                tl.set(
                    '#' + targetElementID,
                    {
                        opacity: 0,
                        yPercent: 30,
                    }
                );
                tl.to(
                    '#' + targetElementID,
                    {
                        duration: duration,
                        opacity: 1,
                        yPercent: 0,
                        delay: delay,
                    }
                );
            }, 
        })
    })
}