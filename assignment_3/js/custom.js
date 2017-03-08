window.onload = function() {
  switchState = "OFF";
  switcher = document.getElementById('switcher');
  switcher.onclick = function () {
  switchState =  changeState(switchState);
    }
  document.getElementById("capture").onclick = function () {
    changeButtonColor();
  }
}

function changeState(switchState) {
  if( switchState =='OFF') {
    //document.getElementById('switcher').innerHTML='ON';
    document.getElementById('switch-status').innerHTML = 'ON';
    document.getElementById('switch-container').style.backgroundColor = "yellow";
    showMessage();
    alternator('black','grey');
    return 'ON';
  }
  else {
    //document.getElementById('switcher').innerHTML='OFF';
    document.getElementById('switch-status').innerHTML = 'OFF';
    document.getElementById('switch-container').style.backgroundColor = "red";
    hideMessage();
    alternator('grey','black');
    return 'OFF';
  }
}

function showMessage() {
  document.getElementById('message').innerHTML = "Hellow ";
  setTimeout(function(){ document.getElementById('message').innerHTML = ""; }, 5000);
}

function hideMessage() {
  document.getElementById('message').innerHTML = "";
}

function alternator(color1,color2) {
  var table = document.getElementById("rows");
  var rows = table.getElementsByTagName("li");
  for(i = 0; i < rows.length; i++){
      if(i%2==0){
        rows[i].style.backgroundColor = color1;
      }else{
        rows[i].style.backgroundColor = color2;
      }
  }
}

function changeButtonColor() {
  switcher = document.getElementById('switcher');
  if(document.getElementById('capture').checked)
  {
    document.getElementById('switcher').style.backgroundColor = "green";
  }
  else
  {
    switcher.style.backgroundColor = "";
  }
}