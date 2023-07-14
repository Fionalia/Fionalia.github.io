var gameData = {
   Salay: 0,
    SalayPerSalay: 1,
    AwstenKnightMusicCost: 10
  }
  
  function doSalay() {
    gameData.Salay += gameData.SalayPerSalay
    document.getElementById("SalaysDone").innerHTML = gameData.Salay + " Salay Points"
  }
  
  function buySalayUpgrade() {
    if (gameData.Salay >= gameData.AwstenKnightMusicCost) {
      gameData.Salay -= gameData.AwstenKnightMusicCost
      gameData.SalayPerSalay += 1
      gameData.AwstenKnightMusicCost *= 2
      document.getElementById("SalaysDone").innerHTML = gameData.Salay + " Salay Points"
      document.getElementById("perClickUpgrade").innerHTML = "Listen to Awsten Knight (Currently listened to " + gameData.SalayPerSalay + "songs) Cost: " + gameData.AwstenKnightMusicCost + " Salay Points"
    }
  }
  
  var mainGameLoop = window.setInterval(function() {
    doSalay()
  }, 1000)