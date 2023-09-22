<script>
  let isDragging = false;
  let startX = 0;
  let initialLeft = 0;


  function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX - initialLeft;
  }

  function handleMouseMove(event) {
    if (isDragging) {
      const newX = event.clientX - startX;
      const container = document.querySelector('.movable-div');
      container.style.left = newX + "px";
    }
  }

  function handleMouseUp() {
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
    /* transform: translateY(-50%); */
    cursor: grab;
  }
</style>

<div
  class="container"
  on:mousedown={handleMouseDown}
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
>
  <div class="movable-div"></div>
</div>
