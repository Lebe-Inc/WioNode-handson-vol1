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