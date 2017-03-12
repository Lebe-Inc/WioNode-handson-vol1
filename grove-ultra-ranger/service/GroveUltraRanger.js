const key = require("../key");
const request = require("request");

function GroveUltraRanger(){
  this.url = "https://us.wio.seeed.io/v1/node/GroveUltraRangerD1/range_in_cm?access_token="+key.token
}

GroveUltraRanger.prototype.fetchDistance = function(){

  var option = {
    url: this.url,
    json: true
  }

  var promiseProcess = new Promise(function(resolve,reject){

    request.get(option,function(err,response,body){
      resolve(body.range_cm)
    })

  })

  return promiseProcess

}

module.exports = new GroveUltraRanger()