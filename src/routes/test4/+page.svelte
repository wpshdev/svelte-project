<script>
  let isDragging = false;
  let startX = 0;
  let initialLeft = 0;

  function handleStart(event) {
    isDragging = true;
    if (event.touches) {
      startX = event.touches[0].clientX - initialLeft;
    } else {
      startX = event.clientX - initialLeft;
    }
  }

  function handleMove(event) {
    if (isDragging) {
      let clientX;
      if (event.touches) {
        clientX = event.touches[0].clientX;
      } else {
        clientX = event.clientX;
      }
      const newX = clientX - startX;
      const container = document.querySelector('.movable-div');
      container.style.left = newX + 'px';
    }
  }

  function handleEnd() {
    if (isDragging) {
      isDragging = false;
    }
  }
</script>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .movable-div {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    position: absolute;
    top: 50%;
    cursor: grab;
  }
</style>

<div
  class="container"
  on:mousedown={handleStart}
  on:mousemove={handleMove}
  on:mouseup={handleEnd}
  on:touchstart={handleStart}
  on:touchmove={handleMove}
  on:touchend={handleEnd}
>
  <div class="movable-div"></div>
</div>
