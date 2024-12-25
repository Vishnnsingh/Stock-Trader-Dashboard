let api_KEY = 'fO55_1dYWctNsZ7o2mNTorftVcRJhtBo';
let currency = document.querySelector("#currency");
let time = document.querySelector("#TF");
let fromDate = document.querySelector(".From-date");
let toDate = document.querySelector(".To-date");
let btn = document.querySelector(".btn");
let forexTicker;
let multiplier;
let timespan;
let op_open = document.querySelector(".op_open");
let op_close = document.querySelector(".op_close");
let op_high  = document.querySelector(".op_high");
let op_low = document.querySelector(".op_low");
let op_n = document.querySelector(".op_n");
let op_vol = document.querySelector(".op_vol");
let op_avg = document.querySelector(".op_avg");
let cls_open = document.querySelector(".cls_open");
let cls_close = document.querySelector(".cls_close");
let cls_high = document.querySelector(".cls_high");
let cls_low = document.querySelector(".cls_low");
let cls_n= document.querySelector(".cls_n");
let cls_vol = document.querySelector(".cls_vol");
let cls_avg= document.querySelector(".cls_avg");
let stockName = document.querySelector(".stock-name");
let stockNameGraph = document.querySelector(".stock-name-graph");
let searchInput = document.querySelector(".search");
let searchBtn = document.querySelector(".searchBtn")
let opening = document.querySelector(".open");
let closeing = document.querySelector(".close");


searchBtn.addEventListener("click" , () =>{
  let searchValue = searchInput.value.toUpperCase();
  // console.log(searchValue);
  stockName.innerText = searchValue
  stockNameGraph.innerText =searchValue
  let url =  `https://api.polygon.io/v2/aggs/ticker/${searchValue}/range/1/${"week"}/${"2024-01-01"}/${"2024-12-20"}?adjusted=true&sort=asc&apiKey=${api_KEY}`
   fetchData(url)
})

btn.addEventListener("click" , () =>{
  forexTicker = currency.value;
  timespan =  time.value;
  opening.innerText = time.value;
  closeing.innerText = time.value;
  opening.style.textTransform = "capitalize";
  closeing.style.textTransform = "capitalize";
  stockName.innerText = currency.value 
  stockNameGraph.innerText = currency.value 
 let link = `https://api.polygon.io/v2/aggs/ticker/${forexTicker}/range/1/${timespan}/${fromDate.value}/${toDate.value}?adjusted=true&sort=asc&apiKey=${api_KEY}`
  fetchData(link);
  
})

async function fetchData(link){
 try{
  let promise = await fetch(link)
 let res = await promise.json();
//  console.log(res);

// console.log(res.results);
op_open.innerText = res.results[0].o;
op_close.innerText = res.results[0].c;
op_high.innerText = res.results[0].h;
op_low.innerText = res.results[0].l;
op_n.innerText = res.results[0].n;
op_vol.innerText = res.results[0].v;
op_avg.innerText = res.results[0].vw;
//closing data
cls_open.innerText = res.results[res.results.length - 1].o;
cls_close.innerText = res.results[res.results.length - 1].c;
cls_high.innerText = res.results[res.results.length - 1].h;
cls_low.innerText = res.results[res.results.length - 1].l;
cls_n.innerText = res.results[res.results.length - 1].n;
cls_vol.innerText = res.results[res.results.length - 1].v;
cls_avg.innerText = res.results[res.results.length - 1].vw;

let newArr = res.results.map((ele, idx) =>{
  return ele.h;
})

let index = res.results.map((ele , idx) =>{
  return idx;
})

// console.log("newArr", newArr);
// console.log("idx", index);

chart(index , newArr);

let tableBody = document.querySelector(".table-body");

let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
td1.innerText = currency.value; 

if(currency.value == ""){
td1.innerText = searchInput.value.toUpperCase(); 

}
td2.innerText = "$ " + res.results[res.results.length - 1].c;
td3.innerText = res.results[0].c- res.results[res.results.length - 1].c;
td4.innerText = res.results.map((ele) =>{
  return ele.v;
}).reduce((acc , curr) =>{
  return acc + curr;
},0);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);

tableBody.appendChild(tr);

 }catch(err){
    alert("Error : Enter Valid Stock Name !! (eg : MFST , AMZN , NVDA , TSLA , FB , GOOGL) " );
  return;
  }

}
// chart();

function chart (index , newArr) {
  let chartDiv = document.querySelector(".chart-div");
//  if(chartDiv.hasChildNodes()){
//   chartDiv.childNodes.remove();
//  }
if(chartDiv.hasChildNodes()){
  chartDiv.childNodes.forEach((val) =>{
    // console.log(val);
    
    val.remove();
  })
}

chartDiv.innerHTML = `
 <div class="chart_inner">
            <canvas id="myChart"></canvas>
 </div>
`

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  label : currency.value,
  data: {
    labels:index,
    datasets: [{
      label: 'PRICE',
      data:newArr ,
      borderWidth: 1,
      fill : true,
      borderWidth :2,
      color : "white" ,
      borderColor : "#051937",
      backgroundColor : "#051937"
    }],
    color : "white" 

  },
  options: {
    plugins:{
      legend : {
        lables :{
          font :{
            size: 55
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    elements : {
      point : {
        pointRadius : 0,
        pointBackgroundColor : '#ff0000',
        pointBorderColor : '#fff'
      }
    }
  }
});

Chart.defaults.font.size = 14;
// Chart.defaults.backgroundColor = 'white';
// Chart.defaults.borderColor = 'white';
Chart.defaults.color = 'rgb(255,255,255 , 0.5)';

}