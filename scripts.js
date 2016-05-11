function initialize() {
  // Register an event listener to call the resizeCanvas()
  // function each time the window is resized.
  window.addEventListener('resize', resizeCanvas, false);

  // Draw the canvas for the first time
  resizeCanvas();
}

function resizeCanvas() {
  var canvas = document.getElementById("canvas");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawCanvas(canvas);
}

function drawCanvas(canvas) {
  var ctx = canvas.getContext("2d");

  // Global offset variables

  var canvasTop = 100;
  var canvasHeight = canvas.height - 180;

  // Draw the initiatives

  for (var x = 0; x < data.length; ++x) {

    // Get the box in which the current initiative will be drawn

    var boxTop = 50 + canvasTop;
    var boxLeft = 0 + (x * (canvas.width / data.length));
    var boxHeight = canvasHeight - 100;
    var boxWidth = (canvas.width / data.length) - 100;

    // Title the current initiative

    var titleTop = boxTop - 100;
    var titleLeft = boxLeft + (boxWidth / 2);

    ctx.font = "2em sans-serif";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    ctx.fillText(data[x].title, titleLeft, titleTop);

    // Draw a bar representing the current initiative

    var barProgress = data[x].step / data[x].milestones.length;
    var barWidth = 30;
    var barLeft = Math.floor(boxLeft + (boxWidth / 2) - (barWidth / 2));
    var barTop = boxTop + (boxHeight * (1 - barProgress));

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.rect(
      barLeft,
      boxTop,
      barWidth,
      boxHeight
    );
    ctx.stroke();

    // Draw the bulb of the thermometer

    var bulbRadius = 40;
    var bulbLeft = boxLeft + (boxWidth / 2);
    var bulbTop = boxTop + boxHeight + 10;

    ctx.beginPath();
    ctx.arc(bulbLeft, bulbTop, bulbRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Fill the bar of the thermometer

    ctx.beginPath();
    ctx.fillRect(
      barLeft,
      barTop,
      barWidth,
      boxHeight * barProgress
    );

    // Draw text corresponding to each milestone

    var textLeftPadding = 20;
    var textLeft = barLeft + barWidth + textLeftPadding;
    var incr = Math.floor(boxHeight / data[x].milestones.length);

    ctx.font = "1.2em sans-serif"
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000000";
    for (var i = 0; i < data[x].milestones.length; ++i) {
      ctx.fillText(
        data[x].milestones[i],
        textLeft,
        boxTop + boxHeight - (incr * (i + 1))
      );
    }

    // Draw lines to demarcate each milestone

    var lineOffset = 5;
    var lineLength = barWidth - (2 * lineOffset);

    for (var i = 0; i < data[x].milestones.length - 1; ++i) {
      ctx.rect(
        barLeft + lineOffset,
        boxTop + boxHeight - (incr * (i + 1)),
        lineLength,
        1
      );
    }
    ctx.stroke();
  }
}
