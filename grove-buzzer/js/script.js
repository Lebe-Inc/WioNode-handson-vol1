var virtual_keyboard = {
  1: "523.251",
  2: "554.365",
  3: "587.330",
  4: "622.254",
  5: "659.255",
  6: "698.456",
  7: "739.989",
  8: "783.991",
  9: "830.609",
  a: "880.000",
  b: "932.328",
  c: "987.767",
  d: "1046.502"
};

$(".play").on("click",function(){
  var input = $(".auto-play-input").val()
  var delay = 600
  for(var i = 0; i < input.length; i++){
    var char = input[i];
    var scale = virtual_keyboard[char]

    setTimeout(function(){
      playTheSounds(scale)
    }, i * delay)
  }
});

$(".js-keyboard").on("click",function(e){
  var scale = changeScale(e.target.dataset.vs);
  playTheSounds(scale);
})

/**
 *  changeScale
 *  音階をWioNode用に上げる
 *
 *  @return { number }
 */
function changeScale(num){
  return Number(num) * 5;
}

/**
 *  playTheSounds
 *  音を鳴らす
 *
 *  @param { number } scale
 */
function playTheSounds(scale){
  var token = "1d1b1571e08c528ad954b42f951cdc52"
  var url = "https://us.wio.seeed.io/v1/node/GroveSpeakerD1/sound_ms/"+scale+"/500?access_token="+token;
  $.ajax({
    url: url,
    type: "POST"
  })
}