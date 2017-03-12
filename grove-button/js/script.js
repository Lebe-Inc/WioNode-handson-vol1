var
  isOn = false,
  led = document.querySelector(".led img"),
  bg = document.querySelector(".bg"),
  ws = new WebSocket('wss://us.wio.seeed.io/v1/node/event');

ws.onopen = function() {
    ws.send("1d1b1571e08c528ad954b42f951cdc52");
};
ws.onmessage = function (e) {
  isOn = !isOn;
  led.src = isOn ? "img/led-on.png" : "img/led-off.png";
  bg.classList.toggle("on")
};