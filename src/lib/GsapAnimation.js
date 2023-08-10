// To use: 
// Import the needed animation functions
// Use the function by adding it on element with 'in' attribute e.g in:textAnimate
// NOTE: Need to always add ID on the element you want to animate

// Dynamic attributes
// Add 'gsap-delay' on the element to add delay in seconds. e.g gsap-delay="1" (1s delay)
// Add 'gsap-duration' on the element to add duration in seconds. e.g gsap-duration="1" (1s duration)
// Add 'gsap-y' on the element to add starting position of fly in
// Add 'gsap-x' on the element to add starting position of slide in

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Default Values

const delayDefault = '0';
const durationDefault = '1';
const flyY = '70';
const slideX = '7';

// FadeIn

export function fadeIn(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    targetElement.style.opacity = '0';
    
    // FadeIn animation
    ScrollTrigger.create({
        trigger: '#' + targetElementID,
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
        },
    });

}

// Fly

export function fly(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const y = targetElement.getAttribute("gsap-y") ? targetElement.getAttribute("gsap-y") : flyY;
    targetElement.style.opacity = '0';

    // Fly animation

    ScrollTrigger.create({
        trigger: '#' + targetElementID,
        onEnter: function() { 
            const tl = gsap.timeline();
            tl.set(
                '#' + targetElementID,
                {
                    opacity: 0,
                    yPercent: y,
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
}


// Slide

export function slide(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    const x = targetElement.getAttribute("gsap-x") ? targetElement.getAttribute("gsap-x") : slideX;
    targetElement.style.opacity = '0';

    // slide animation

    ScrollTrigger.create({
        trigger: '#' + targetElementID,
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
}

// Text Animate
// Add text-animate class on the element

export function textAnimate(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    targetElement.style.opacity = '0';

    // Split text
    const text = targetElement.textContent;
    const charSplit = text.split('');
    let splittedHTML = '';
    charSplit.forEach((c)=> {
      splittedHTML += `<span>${c === ' ' ? '&nbsp' : c}</span>`;
    })
    targetElement.innerHTML = splittedHTML;

    // Text animation
    ScrollTrigger.create({
        trigger: '#' + targetElementID,
        // markers: true,
        onEnter: function() { 
            const tl = gsap.timeline();
            let letter = targetElement.querySelectorAll('span');
            
            tl.set(
                '#' + targetElementID,
                {
                    autoAlpha: 1,
                }
            );

            tl.set(
                letter, 
                {
                    yPercent: -20,
                    opacity: 0,
                }
            );

            tl.to(
                letter,
                {
                    duration: duration,
                    yPercent: 0,
                    opacity: 1,
                    stagger: 0.03,
                    delay: delay,
                    ease: "ease"
                }
            );
        },
    });

}