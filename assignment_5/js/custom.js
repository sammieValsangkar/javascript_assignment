window.onload = function () {
  var s,
  SwitchControl = {

    settings: {
      switchState : "OFF",
      switcher : document.getElementById('switcher'),
      backgroundColor1 : "red",
      backgroundColor2 : "yellow",
      rowColor1 : "black",
      rowColor2 : "grey",
      buttonColor1 : "green"
    },

    init: function() {
      s = this.settings;
      this.bindUIActions();
    },

    bindUIActions: function() {
      switcher.onclick = function () {
        s.switchState =  SwitchControl.changeState(s.switchState);
          }
        SwitchControl.selectById("capture").onclick = function () {
          SwitchControl.changeButtonColor();
        }
    },

    getMoreArticles: function(numToGet) {
      // $.ajax or something
      // using numToGet as param
    },

    changeState: function(switchState) {
      if( switchState =='OFF') {
        SwitchControl.selectById('switch-status').innerHTML = 'ON';
        SwitchControl.setBackground(SwitchControl.selectById('switch-container'),s.backgroundColor2);
        SwitchControl.showMessage();
        SwitchControl.alternator(s.rowColor1,s.rowColor2);
        return 'ON';
      }
      else {
        SwitchControl.selectById('switch-status').innerHTML = 'OFF';
        SwitchControl.setBackground(SwitchControl.selectById('switch-container'),s.backgroundColor1);
        SwitchControl.hideMessage();
        SwitchControl.alternator(s.rowColor2,s.rowColor1);
        return 'OFF';
      }
    },

    showMessage : function() {
      SwitchControl.selectById('message').innerHTML = "Hellow ";
      setTimeout(function(){ SwitchControl.selectById('message').innerHTML = ""; }, 5000);
    },

    hideMessage : function() {
      SwitchControl.selectById('message').innerHTML = "";
    },

    alternator :function(color1,color2) {
      var table = SwitchControl.selectById("rows");
      var rows = $("#rows li");
      for(i = 0; i < rows.length; i++){
          if(i%2==0){
            SwitchControl.setBackground(rows.eq(i),color1);
          }else{
            SwitchControl.setBackground(rows.eq(i),color2);
          }
      }
    },

    changeButtonColor : function() {
      switcher = SwitchControl.selectById('switcher');
      if(SwitchControl.selectById('capture').checked)
      {
        SwitchControl.setBackground(SwitchControl.selectById('switcher'),s.buttonColor1);
      }
      else
      {
        s.switcher.style.backgroundColor = "";
      }
    },

    selectById : function(arg) {
      return $("#"+arg);
    },

    setBackground : function(contex,color) {
      contex.css('backgroundColor',color);
    }

  };
  SwitchControl.init();
}