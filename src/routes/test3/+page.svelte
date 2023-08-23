<script>
    import { onMount } from "svelte";
    import { scrollTrigger } from "gsap/dist/scrolltrigger";
    
    let images = [
      {
        src: "https://picsum.photos/2000/1000",
      },
      {
        src: "https://picsum.photos/2000/1000?grayscale",
      },
      {
        src: "https://picsum.photos/2000/1000?blur=5",
      },
    ];
    
    let container = document.querySelector(".container");
    
    onMount(() => {
      images.forEach((image) => {
        const { src } = image;
        const imageEl = document.createElement("img");
        imageEl.src = src;
        container.appendChild(imageEl);
      });
    
      scrollTrigger(".container", {
        onEnter: () => {
          images.forEach((image) => {
            image.el.style.opacity = 1;
          });
        },
        onLeave: () => {
          images.forEach((image) => {
            image.el.style.opacity = 0;
          });
        },
      });
    });
    </script>
    
    <style>
    .container {
      height: 100vh;
      overflow: hidden;
    }
    
    .image {
      width: 100%;
      height: 100vh;
      opacity: 0;
    }
    </style>
    
    <div class="container">
      <div class="image" data-gs-parallax="0">
        <img src="https://picsum.photos/2000/1000" />
      </div>
      <div class="image" data-gs-parallax="0">
        <img src="https://picsum.photos/2000/1000?grayscale" />
      </div>
      <div class="image" data-gs-parallax="0">
        <img src="https://picsum.photos/2000/1000?blur=5" />
      </div>
    </div>