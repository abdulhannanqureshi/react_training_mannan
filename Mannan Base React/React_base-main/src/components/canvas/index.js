import React, { useEffect } from 'react'

const CanvasComponent = props => {
  useEffect(() => {
    setCanvas()
  })

  const setCanvas = () => {
    var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = 200,
    height = canvas.height = 200,
    handle = {
      x: width / 2,
      y: height / 2
    },
    startX, startY, 
    dragok = false,
    text = 'Mannan'

    draw();

    function draw() {
      context.clearRect(0, 0, width, height);
      context.font = "14px Arial";
      context.fillText(text, handle.x, handle.y);
    }

    canvas.addEventListener('mousedown', function(event) {
      var textLength = context.measureText(text).width
      let leftPosition = ((event.currentTarget.offsetLeft + handle.x < event.clientX) && (event.currentTarget.offsetLeft + handle.x + textLength >  event.clientX))
      let topPosition = ((event.currentTarget.offsetTop + handle.y - 14 < event.clientY) && (event.currentTarget.offsetTop + handle.y >  event.clientY))
      let isDrage = leftPosition && topPosition
      if(isDrage) {
        dragok = true
        startX = handle.x - event.clientX
        startY = handle.y - event.clientY
        canvas.addEventListener('mousemove', onMouseMove)
        canvas.addEventListener('mouseup', onMouseUpOrOut)
        canvas.addEventListener('mouseout', onMouseUpOrOut)
      }
    })

    function onMouseMove(event) {
      if(dragok) {
        var mouseX = event.clientX + startX
        var mouseY = event.clientY + startY
        handle.x = mouseX
        handle.y = mouseY
        draw();
      }
    }

    function onMouseUpOrOut() {
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUpOrOut);
      dragok = false;
    }
  }

  const handleSelect = e => {
    let file = e.target.files[0]
    if(file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        var img = new Image();
        img.onload = function(){
            // canvas.width = img.width;
            // canvas.height = img.height;
            // ctx.drawImage(img,0,0);
        }
        img.src = e.target.result;
      }
    }
  }

  return (
    <div>
      <input type="file" onChange={handleSelect} />
      <canvas id="myCanvas" width="200" height="100"></canvas>
    </div>
  )
}

export default CanvasComponent