import React from 'react';
import currency from './currency';
//const api = "";
var jalaali = require('jalaali-js')
const dateBuilder = (d) => {
  let months = ["January" , "February" , "March" , "April" , "May", "June" , "July" , "August" , "September" , "October" , "November" , "December"];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  
  return ` ${year} ${month} ${date} `
}
const solardatebuilder=(r) => {
  let months = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
  var solar= jalaali.toJalaali(r.getFullYear(), r.getMonth(), r.getDate())
  let month = months[solar.jm];
  return `${month} ${solar.jy}  `
}
const daybuilder= (d) => {
  let days = ["یک شنبه" , "دوشنبه" , "سه شنبه" , "چهارشنبه" , "پنج شنبه" , "جمعه" , "شنبه"];

    let day = days[d.getDay()];
    var solar= jalaali.toJalaali(d.getFullYear(), d.getMonth(), d.getDate())
    return `${day} ${solar.jd}`
}



function App() {
  return (
    <div className="App">
      <main>

      <div className="date-box">
      <div>
        {daybuilder(new Date())}
        {solardatebuilder(new Date())}
        </div>
     <div className="date">{dateBuilder(new Date())}</div>
     </div>
      </main>
    </div>
  );
}

export default App;
