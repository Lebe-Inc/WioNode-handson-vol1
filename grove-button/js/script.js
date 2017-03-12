var
  isOn = false,
  led = document.querySelector(".led img"),
  ws = new WebSocket('wss://us.wio.seeed.io/v1/node/event');

ws.onopen = function() {
    ws.send("1d1b1571e08c528ad954b42f951cdc52");
};
ws.onmessage = function (e) {
  var json = JSON.parse(e.data);
  var num = json.msg.button_pressed;
  if(num == 5) isOn = !isOn;

  if(isOn){
    led.src = "img/led-on.png";
  }else{
    led.src = "img/led-off.png";
  }
};