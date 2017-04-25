var Time = {
    initialize: function(time){
      if(typeof(time) == "undefined"){
        return false;
      }
      time = time.replace(/年|月|日/g,",");
      time=time.substring(0,time.length-1);
      time_A = new Array;
      time_A = time.split(",")
      if(time_A.length != 3){
        return false;
      }
      for(var i=0; i<3;i++)
      {
        var reg = /^\+?[1-9][0-9]*$/;
        if(!reg.test(parseInt(time_A[i])))
        {
          return false;
        }
      }
      return time_A;
    },
    year: function(time){
      var data = new Array;
      data = Time.initialize(time);
      Time.error(data);
      return data[0];
    },
    month: function(time){
      var data = new Array;
      data = Time.initialize(time);
      Time.error(data);
      return data[1];
    },
    day: function(time){
      var data = new Array;
      data = Time.initialize(time);
      Time.error(data);
      return data[2];
    },
    error: function(data){
      if(data==false){
        window.console&&window.console.log&&(console.log("时间格式解析失败"))
      }
    }
  }

  //加天数
  function addDate(date,days){
    var d = new Date(date);
    d.setDate(d.getDate()+days);
    var month=d.getMonth()+1;
    var day = d.getDate();
    if(month<10){
    month = "0"+month;
    }
    if(day<10){
    day = "0"+day;
    }
    var val = d.getFullYear()+"年"+month+"月"+day+"日";
    return val;
  }

  // 减天数
  function minDate(date,days){
    var d = new Date(date);
    d.setDate(d.getDate()-days);
    var month=d.getMonth()+1;
    var day = d.getDate();
    if(month<10){
    month = "0"+month;
    }
    if(day<10){
    day = "0"+day;
    }
    var val = d.getFullYear()+"年"+month+"月"+day+"日";
    return val;
  }