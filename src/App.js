import React , { useState }from 'react';
const api = "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json";
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
  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState({});

  fetch(`${api}`)
      .then(res => res.json())
      .then(result => {
        setCurrency(result);
        setQuery('');
        console.log(result);
      });
  return (
    
    <div className="App">
      <main>
       
      <div className="date-box">
      
        {daybuilder(new Date())}
        {solardatebuilder(new Date())}
        <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="update">
           آخرین بروز رسانی نرخ ها 
          {currency.sana.data[0].t}
          </div>
            <div className="currency">
            <p>دلار</p>
       <p>خرید:      { currency.sana.data[0].p}</p>
       <p>فروش: { currency.sana.data[16].p}</p>
     </div>
     <div className="currency">
            <p>یورو</p>
       <p>خرید:    {currency.sana.data[1].p}</p>
       <p>فروش: { currency.sana.data[17].p}</p>
     </div>
     <div className="currency">
            <p>پوند انگلیس</p>
            <p>خرید: { currency.sana.data[11].p}</p>
       <p>فروش: { currency.sana.data[27].p}</p>
     </div>
     <div className="currency">
            <p>فرانک سوئیس</p>
            <p>خرید: { currency.sana.data[8].p}</p>
       <p>فروش:{ currency.sana.data[24].p}</p>
     </div>
     <div className="currency">
            <p>درهم امارات</p>
            <p>خرید: { currency.sana.data[2].p}</p>
       <p>فروش: { currency.sana.data[18].p}</p>
     </div><div className="currency">
            <p> روپیه هند</p>
            <p>خرید:{ currency.sana.data[3].p}</p>
       <p>فروش: { currency.sana.data[19].p}</p>
     </div><div className="currency">
            <p>لیر ترکیه</p>
            <p>خرید: { currency.sana.data[4].p}</p>
       <p>فروش: { currency.sana.data[20].p}</p>
      
     </div>
     <div className="currency">
            <p> یوان چین</p>
            <p>خرید: { currency.sana.data[6].p}</p>
       <p>فروش: { currency.sana.data[22].p}</p>
     </div>
     <div className="currency">
            <p>وون کره جنوبی</p>
            <p>خرید: { currency.sana.data[7].p}</p>
       <p>فروش: { currency.sana.data[23].p}</p>
     </div>
     <div className="currency">
            <p>روبل روسیه</p>
            <p>خرید: { currency.sana.data[5].p}</p>
       <p>فروش: { currency.sana.data[21].p}</p>
     </div>
     <div className="currency">
            <p>ین ژاپن</p>
            <p>خرید: { currency.sana.data[9].p}</p>
       <p>فروش: { currency.sana.data[25].p}</p>
     </div>
     <div className="currency">
            <p>کرون سوئد</p>
            <p>خرید: { currency.sana.data[12].p}</p>
       <p>فروش: { currency.sana.data[28].p}</p>
     </div>
      </main>  
    </div>
  );
}

export default App;
