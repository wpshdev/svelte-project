// To use: 
// Import the needed animation functions
// Use the function by adding it on element with 'in' attribute e.g in:textAnimate
// NOTE: Need to always add ID on the element you want to animate

// Dynamic attributes
// Add 'gsap-delay' on the element to add delay in seconds. e.g gsap-delay="1" (1s delay)
// Add 'gsap-duration' on the element to add duration in seconds. e.g gsap-duration="1" (1s duration)

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Default Values

const delayDefault = '0';
const durationDefault = '1';

// FadeIn

export function fadeIn(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;

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

// FlyUp

export function flyUp(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;
    targetElement.style.opacity = '0';

    // FlyUp animation

    ScrollTrigger.create({
        trigger: '#' + targetElementID,
        onEnter: function() { 
            const tl = gsap.timeline();
            tl.set(
                '#' + targetElementID,
                {
                    opacity: 0,
                    yPercent: 70,
                }
            );
            tl.to(
                '#' + targetElementID,
                {
                    duration: duration,
                    yPercent: 0,
                    opacity: 1,
                    delay: delay,
                }
            ); 
        }, 
    })
}

// Text Animate

export function textAnimate(node) {

    const targetElement = node; // target element
    const targetElementID = targetElement.id;
    const delay = targetElement.getAttribute("gsap-delay") ? targetElement.getAttribute("gsap-delay") : delayDefault;
    const duration = targetElement.getAttribute("gsap-duration") ? targetElement.getAttribute("gsap-duration") : durationDefault;

    // Split text
    const text = targetElement.textContent;
    const charSplit = text.split('');
    let splittedHTML = '';
    charSplit.forEach((c)=> {
      splittedHTML += `<span> ${c === ' ' ? '&nbsp' : c} </span>`;
    })
    targetElement.innerHTML = splittedHTML;

    // Text animation
    ScrollTrigger.create({
        trigger: '#' + targetElementID,
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