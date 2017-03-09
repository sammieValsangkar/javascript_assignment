window.onload = function () {
  var s,
  SwitchControl = {

    settings: {
      switchState : "OFF",
      switcher : document.getElementById('switcher')
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
        SwitchControl.setBackground(SwitchControl.selectById('switch-container'),"yellow");
        SwitchControl.showMessage();
        SwitchControl.alternator('black','grey');
        return 'ON';
      }
      else {
        SwitchControl.selectById('switch-status').innerHTML = 'OFF';
        SwitchControl.setBackground(SwitchControl.selectById('switch-container'),"red");
        SwitchControl.hideMessage();
        SwitchControl.alternator('grey','black');
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
      var rows = table.getElementsByTagName("li");
      for(i = 0; i < rows.length; i++){
          if(i%2==0){
            SwitchControl.setBackground(rows[i],color1);
          }else{
            SwitchControl.setBackground(rows[i],color2);
          }
      }
    },

    changeButtonColor : function() {
      switcher = SwitchControl.selectById('switcher');
      if(SwitchControl.selectById('capture').checked)
      {
        SwitchControl.setBackground(SwitchControl.selectById('switcher'),"green");
      }
      else
      {
        s.switcher.style.backgroundColor = "";
      }
    },

    selectById : function(arg) {
      return document.getElementById(arg);
    },

    setBackground : function(contex,color) {
      contex.style.backgroundColor = color;
    }

  };
  SwitchControl.init();
}