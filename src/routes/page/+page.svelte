<script>
    import { onMount } from 'svelte';
  
    let imageUrl;
  
    onMount(() => {
      if ('connection' in navigator) {
        const effectiveConnectionType = navigator.connection.effectiveType;
  console.log(effectiveConnectionType);
        switch (effectiveConnectionType) {
          case 'slow-2g':
          case '2g':
            imageUrl = 'https://www.aspenhomes.com/wp-content/uploads/2022/11/Herradora-Front-Web-1-300x200.jpg';
            break;
          case '3g':
            imageUrl = 'https://www.aspenhomes.com/wp-content/uploads/2022/11/Herradora-Front-Web-1-768x511.jpg';
            break;
          case '4g':
            imageUrl = 'https://www.aspenhomes.com/wp-content/uploads/2022/11/Herradora-Front-Web-1-1024x681.jpg';
            break;
          case 'fast-4g':
            imageUrl = 'https://www.aspenhomes.com/wp-content/uploads/2022/11/Herradora-Front-Web-1-1024x681.jpg';
            break;
          default:
            imageUrl = 'https://www.aspenhomes.com/wp-content/uploads/2022/11/Herradora-Front-Web-1-1536x1022.jpg';
            break;
        }
      }
    });
  </script>
  
  <div class="test" style="background-image: url({imageUrl});"></div>
  <style>
    .test {
      margin: 0;
      padding: 0;
      background-size: cover;
      background-position: center;
      height: 100vh;
      width: 100%;
    }
  </style>
  