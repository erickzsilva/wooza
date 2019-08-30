import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStored {

  constructor() { }

  name = 'Local storage';
  favorites = new Array();
  favorite = {code: "", description: ""}

  set(plan){

    var stringToStore = JSON.stringify(plan);
    ProChartStorage.setItem("dto", stringToStore);
  }

  get(){
    var dto = ProChartStorage.getItem("dto");
    var data = JSON.parse(dto)
    console.log(data)
    return data
  }
    

}

var ProChartStorage = {

  getItem: function (key) {
      return localStorage.getItem(key);
  },

  setItem: function (key, value) {
     console.log("prochart setItem")
     localStorage.setItem(key, value);
  },

  removeItem: function (key) {
      return localStorage.removeItem(key);
  },

  clear: function () {
      var keys = new Array();
      for (var i = 0, len = localStorage.length; i < len; i++) {
          var key = localStorage.key(i);
          if (key.indexOf("prochart") != -1 || key.indexOf("ProChart") != -1)
              keys.push(key);
      }
      for (var i = 0; i < keys.length; i++)
          localStorage.removeItem(keys[i]);
  }

}