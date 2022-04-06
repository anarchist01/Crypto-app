(()=>{"use strict";const e=new class{async get(e){const t=await fetch(e);return await t.json()}async post(e,t){const r=await fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});return await r.json()}async update(e,t){const r=await fetch(e,{method:"PUT",body:{"Content-type":"application;/json"},headers:JSON.stringify(t)});return await r.json()}async delete(e){return await fetch(e,{method:"Delete"}),"Resource Deleted..."}};function t(e,t){let r,a,i=[],s=[],o="",n="";for(let t=0;t<e.length;t++){const c=e[t].price_change_percentage_24h,l=e[t].price_change_percentage_7d_in_currency;r=parseFloat(c)>0?"green":parseFloat(c)<0?"red":"#333333",a=parseFloat(l)>0?"green":parseFloat(l)<0?"red":"#333333",i.push(`<tr id="${e[t].id}"><td>${e[t].market_cap_rank}</td>`),i.push(`<td><a href="#"><img src="${e[t].image.replace("large","thumb")}" alt="${e[t].name}"><span>${e[t].name}</span></a>\n        <span>${e[t].symbol}</span></td>`),i.push(`<td>$${parseFloat(e[t].current_price.toFixed(2)).toLocaleString()}</td>`),i.push(`<td>$${parseFloat(e[t].market_cap.toFixed(0)).toLocaleString().replace(".",",")}</td>`),i.push(`<td style="color:${r}">`,parseFloat(e[t].price_change_percentage_24h)>0?`<i class="fas fa-caret-up" style="color:${r}"></i> ${parseFloat(e[t].price_change_percentage_24h).toFixed(2)}%`:parseFloat(e[t].price_change_percentage_24h)<0?`<i class="fas fa-caret-down" style="color:${r}"></i> ${parseFloat(e[t].price_change_percentage_24h).toFixed(2).replace("-","")}%`:`${parseFloat(e[t].price_change_percentage_24h).toFixed(2)}%</td>`),i.push(`<td style="color:${a}">`,parseFloat(e[t].price_change_percentage_7d_in_currency)>0?`<i class="fas fa-caret-up" style="color:${a}"></i> ${parseFloat(e[t].price_change_percentage_7d_in_currency).toFixed(2)}%`:parseFloat(e[t].price_change_percentage_7d_in_currency)<0?`<i class="fas fa-caret-down" style="color:${a}"></i> ${parseFloat(e[t].price_change_percentage_7d_in_currency).toFixed(2).replace("-","")}%`:`${parseFloat(e[t].price_change_percentage_7d_in_currency).toFixed(2)}%</td>`),i.push(`<td>$${parseFloat(e[t].total_volume.toFixed(0)).toLocaleString().replace(".",",")}</td>`),i.push('<td><canvas class="tableChart"></canvas></td>'),localStorage.coins&&(s=JSON.parse(localStorage.getItem("coins")),o=s.indexOf(e[t].id)>=0?"newFav":"favHover"),i.push(`<td><a href="#" data-fav="Add to favorites" id="fav"><i class="fas fa-star ${o}"></i></a><a href="#" data-port="Add to portfolio" id="portf"><i class="fas fa-plus"></i></a></td></tr>`),n+=i.join(""),i=[]}t.innerHTML=n}const r=new class{constructor(){this.homeSection=document.querySelector("#home-a"),this.table=document.querySelector("#main-table"),this.tBody=document.querySelector("#mt-body"),this.rank=document.querySelector("#rank"),this.fav=document.querySelector("#favorites")}async tableData(e){t(e,this.tBody),this.table.style.visibility="visible",document.getElementById("footer").style.visibility="visible";let r=document.querySelector(".message");1==this.tBody.rows[0].firstChild.innerHTML&&(document.querySelector(".left").classList.remove("hover"),document.querySelector(".left").setAttribute("id",""),document.querySelector(".right").setAttribute("id",1)),r&&r.remove()}sort(e){let t=this.tBody.querySelectorAll("tr"),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("ordered")){e.className="reversed",a=Array.from(t).sort(((e,t)=>t.firstChild.innerHTML-e.firstChild.innerHTML));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("reversed")){e.className="ordered",a=Array.from(t).sort(((e,t)=>e.firstChild.innerHTML-t.firstChild.innerHTML));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}sort_2(e){let t=this.tBody.querySelectorAll("tr"),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("unordered")){e.className="ordered",a=Array.from(t).sort(((e,t)=>e.childNodes[1].firstChild.childNodes[1].innerHTML>t.childNodes[1].firstChild.childNodes[1].innerHTML?1:e.childNodes[1].firstChild.childNodes[1].innerHTML<t.childNodes[1].firstChild.childNodes[1].innerHTML?-1:0));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("ordered")){e.className="unordered",a=Array.from(t).sort(((e,t)=>t.childNodes[1].firstChild.childNodes[1].innerHTML.localeCompare(e.childNodes[1].firstChild.childNodes[1].innerHTML)));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}sort_3(e){let t=this.tBody.querySelectorAll("tr"),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("unordered")){e.className="ordered",e.firstChild.classList.add("down"),a=Array.from(t).sort(((e,t)=>parseFloat(t.childNodes[2].innerHTML.match(/[\d+|,|.]+/g).join().replace(/,+/g,""))-parseFloat(e.childNodes[2].innerHTML.match(/[\d+|,|.]+/g).join().replace(/,+/g,""))));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("ordered")){e.className="unordered",e.firstChild.classList.remove("down"),a=Array.from(t).sort(((e,t)=>parseFloat(e.childNodes[2].innerHTML.match(/[\d+|,|.]+/g).join().replace(/,+/g,""))-parseFloat(t.childNodes[2].innerHTML.match(/[\d+|,|.]+/g).join().replace(/,+/g,""))));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}sort_4(e){let t=this.tBody.querySelectorAll("tr"),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("unordered")){e.className="ordered",e.firstChild.classList.add("down"),a=Array.from(t).sort(((e,t)=>parseFloat(t.childNodes[3].innerHTML.match(/\d+/g).join().replace(/,+/g,""))-parseFloat(e.childNodes[3].innerHTML.match(/\d+/g).join().replace(/,+/g,""))));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("ordered")){e.className="unordered",e.firstChild.classList.remove("down"),a=Array.from(t).sort(((e,t)=>parseFloat(e.childNodes[3].innerHTML.match(/\d+/g).join().replace(/,+/g,""))-parseFloat(t.childNodes[3].innerHTML.match(/\d+/g).join().replace(/,+/g,""))));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}sort_5(e){let t=Array.from(this.tBody.querySelectorAll("tr")),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("unordered")){e.className="ordered",e.firstChild.classList.add("down"),a=[...t.filter((e=>e.childNodes[4].firstChild.classList.contains("fa-caret-down"))).sort(((e,t)=>parseFloat(t.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(e.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,".")))),...t.filter((e=>e.childNodes[4].firstChild.classList.contains("fa-caret-up"))).sort(((e,t)=>parseFloat(e.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(t.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))))];for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("ordered")){e.className="unordered",e.firstChild.classList.remove("down"),a=[...t.filter((e=>e.childNodes[4].firstChild.classList.contains("fa-caret-up"))).sort(((e,t)=>parseFloat(t.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(e.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,".")))),...t.filter((e=>e.childNodes[4].firstChild.classList.contains("fa-caret-down"))).sort(((e,t)=>parseFloat(e.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(t.childNodes[4].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))))];for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}sort_6(e){let t=Array.from(this.tBody.querySelectorAll("tr")),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("unordered")){e.className="ordered",e.firstChild.classList.add("down"),a=[...t.filter((e=>e.childNodes[5].firstChild.classList.contains("fa-caret-up"))).sort(((e,t)=>parseFloat(t.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(e.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,".")))),...t.filter((e=>e.childNodes[5].firstChild.classList.contains("fa-caret-down"))).sort(((e,t)=>parseFloat(e.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(t.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))))];for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("ordered")){e.className="unordered",e.firstChild.classList.remove("down"),a=[...t.filter((e=>e.childNodes[5].firstChild.classList.contains("fa-caret-down"))).sort(((e,t)=>parseFloat(t.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(e.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,".")))),...t.filter((e=>e.childNodes[5].firstChild.classList.contains("fa-caret-up"))).sort(((e,t)=>parseFloat(e.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))-parseFloat(t.childNodes[5].innerHTML.match(/\d+|\,+/g).join().replace(/\,+/g,"."))))];for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}sort_7(e){let t=this.tBody.querySelectorAll("tr"),r=t.length,a=[];if(this.tBody.innerHTML="",e.classList.contains("unordered")){e.className="ordered",e.firstChild.classList.add("down"),a=Array.from(t).sort(((e,t)=>parseFloat(t.childNodes[6].innerHTML.match(/\d+/g).join().replace(/,+/g,""))-parseFloat(e.childNodes[6].innerHTML.match(/\d+/g).join().replace(/,+/g,""))));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}else if(e.classList.contains("ordered")){e.className="unordered",e.firstChild.classList.remove("down"),a=Array.from(t).sort(((e,t)=>parseFloat(e.childNodes[6].innerHTML.match(/\d+/g).join().replace(/,+/g,""))-parseFloat(t.childNodes[6].innerHTML.match(/\d+/g).join().replace(/,+/g,""))));for(let e=0;e<r;e++){let t=this.tBody.insertRow(e);t.innerHTML=a[e].innerHTML;const r=a[e].children[7].firstChild;t.children[7].firstChild.getContext("2d").drawImage(r,0,0)}}}addToFav(e){let t=e.firstChild;t.classList.contains("newFav")?(t.classList.remove("newFav"),t.classList.add("favHover"),e.setAttribute("data-fav","Add to favorites")):(t.classList.add("newFav"),t.classList.remove("favHover"),e.setAttribute("data-fav","Remove"))}showFav(e,r){const a=this.messageTemplate();t(r,this.tBody),this.tBody.addEventListener("click",(t=>{if(e.classList.contains("active")){let e=t.target.closest("#fav");if(!e)return;e.closest("tr").remove()}0!==this.tBody.rows.length||document.querySelector(".message")||this.homeSection.appendChild(a)}))}displayCoin(e){t(e,this.tBody)}messageTemplate(){const e=document.createElement("div");return e.className="message",e.appendChild(document.createElement("h1")).appendChild(document.createTextNode("You haven't added anything...")),e.appendChild(document.createElement("a")).appendChild(document.createElement("i")).className="fas fa-arrow-left",e.childNodes[1].setAttribute("href","#"),e.childNodes[1].setAttribute("data-message","Go Back"),e.childNodes[1].setAttribute("class","back"),e}},a=new class{constructor(){}addToStorage(e){let t=e.closest("tr").id,r=[];localStorage.coins?(r=JSON.parse(localStorage.getItem("coins")),r.indexOf(t)<0?r.push(t):r.splice(r.indexOf(t),1),localStorage.coins=JSON.stringify(r)):e.firstChild.classList.contains("newFav")||(r.push(t),localStorage.coins=JSON.stringify(r))}};document.getElementById("burgerMenu").addEventListener("click",(e=>{e.preventDefault(),e.currentTarget.classList.toggle("burgerActive"),document.getElementById("navbar").classList.toggle("menuActive")}));const i=new class{constructor(){this.topNav=document.getElementById("nav-data"),this.total,this.exchanges,document.querySelector("#total")&&document.querySelector("#markets")&&(this.total=document.querySelector("#total").firstElementChild,this.exchanges=document.querySelector("#markets").firstElementChild)}async getMarketData(t){await e.get(t).then((e=>{!function(e,t,r,a){const i=parseFloat(e.data.market_cap_change_percentage_24h_usd).toFixed(2);let s;s=i>0?`<i class="fas fa-caret-up"></i> <b>${i}%</b>`:i<0?`<i class="fas fa-caret-down"></i> <b>${i.replace("-","")}%</b>`:`${i}%`,t.innerHTML=`<li><div><span>Total Market Cap: </span><a href='global.html'>$${parseFloat(e.data.total_market_cap.usd.toFixed(0)).toLocaleString()}</a><span> ${s}</span></div></li>\n  <li>24h Vol: <a href='global.html'>$${parseFloat(e.data.total_volume.usd.toFixed(0)).toLocaleString().replace(".",",")}</a></li>\n  <li>Btc dominance: <b>${parseFloat(e.data.market_cap_percentage.btc).toFixed(2)}%</b></li>`;let o=t.firstChild.firstChild.firstChild.nextElementSibling.nextElementSibling;parseFloat(i)>0?(o.style.color="green",o.querySelector("i").style.color="green"):parseFloat(i)<0?(o.style.color="red",o.querySelector("i").style.color="red"):o.style.color="#333333",r&&a&&(r.innerHTML=`Coins: <span class="span-info">${e.data.active_cryptocurrencies}</span>`,a.innerHTML=`Exchanges: <span class="span-info">${e.data.markets}</span>`)}(e,this.topNav,this.total,this.exchanges)})).catch((e=>{console.log(e)}))}},s=new class{constructor(){}pageLeft(e,t){let r=e.getAttribute("id"),a=t.getAttribute("id"),i=r.valueOf();return t.setAttribute("id",a-1),e.setAttribute("id",r-1),document.querySelector("#main-table")?`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${i}&sparkline=false&price_change_percentage=7d`:document.querySelector("#market-table")?`https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${i}`:void 0}pageRight(e,t){let r=t.getAttribute("id"),a=e.getAttribute("id"),i=r.valueOf();return 1==a&&t.classList.remove("hover"),1==r&&""==a?(i++,e.setAttribute("id",i)):(i=parseInt(a.valueOf())+1,e.setAttribute("id",parseInt(a.valueOf())+1),t.setAttribute("id",a)),document.querySelector("#main-table")?`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${i}&sparkline=true&price_change_percentage=7d`:document.querySelector("#market-table")?`https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${i}`:void 0}},o=new class{constructor(){this.homeSection=document.querySelector("#home-a"),this.table=document.querySelector("#main-table"),this.mTable=document.querySelector("#market-table"),this.tBody=document.querySelector("#mt-body")}filterList(e,t){if(null==e.value)return;const r=Array.from(this.tBody.querySelectorAll("tr"));for(let a=0;a<r.length;a++)null!=r[a].childNodes[t].firstChild.childNodes[1].innerHTML.toUpperCase().match(e.value.toUpperCase())?r[a].style.display="":r[a].style.display="none"}},n="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=true&price_change_percentage=7d",c=document.querySelector("#favorites").childNodes[2];async function l(t){document.getElementById("loader").className="loader",await e.get(t).then((e=>{r.tableData(e),d(e)})).catch((e=>{console.log(e)}));const a=document.getElementById("mt-body").innerHTML;""!==a&&null!=a||console.log("failed loading"),document.getElementById("loader").className=""}function d(e){Array.from(document.getElementsByClassName("tableChart")).forEach(((t,r)=>{const a=t.getContext("2d"),i=[],s=e[r].sparkline_in_7d.price;let o,n;o=s[0].toFixed(4)>s[s.length-1].toFixed(4)?"rgba(255,0,0,0.5)":s[0].toFixed(4)<s[s.length-1].toFixed(4)?"rgba(0,255,0,0.3)":"rgba(128,128,128,0.5)",n=s[0].toFixed(4)>s[s.length-1].toFixed(4)?"rgba(255,0,0)":s[0].toFixed(4)<s[s.length-1].toFixed(4)?"rgba(0,255,0)":"rgba(128,128,128)";for(let e=0;e<7;e++)0===e&&i.push(s[0].toFixed(4)),7===e&&i.push(s[s.length-1].toFixed(4)),e>0&&e<7&&i.push(s[Math.floor(s.length/7*e)].toFixed(4));new Chart(a,{type:"line",data:{labels:[1,2,3,4,5,6,7],datasets:[{data:i,pointRadius:0,fill:!0,lineTension:.2,backgroundColor:o,borderColor:n}]},options:{responsive:!1,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{ticks:{display:!1},grid:{display:!1,drawBorder:!1}},y:{ticks:{display:!1},grid:{display:!1,drawBorder:!1}}},layout:{}}})}))}function h(t){t.preventDefault();let a=document.querySelector("#search").value,i="";const s=document.querySelector("#mt-body").querySelectorAll("tr");if(a&&0!==a.length&&a.trim()){for(let e=0;e<s.length;e++)if(s[e].firstChild.innerHTML.toUpperCase().indexOf(a.toUpperCase())>=0)return;i=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${a}&order=market_cap_desc&price_change_percentage=7d`,e.get(i).then((e=>{r.displayCoin(e)})).catch((e=>console.log(e)))}}document.addEventListener("DOMContentLoaded",async function(){i.getMarketData("https://api.coingecko.com/api/v3/global"),await l(n)}()),document.querySelector("#rank").addEventListener("click",(function(e){r.sort(e.target),e.preventDefault()})),document.querySelector("#coin").addEventListener("click",(function(e){r.sort_2(e.target),e.preventDefault()})),document.querySelector("#price").addEventListener("click",(function(e){r.sort_3(e.currentTarget),e.preventDefault()})),document.querySelector("#mcap").addEventListener("click",(function(e){r.sort_4(e.currentTarget),e.preventDefault()})),document.querySelector("#daily").addEventListener("click",(function(e){r.sort_5(e.currentTarget),e.preventDefault()})),document.querySelector("#weekly").addEventListener("click",(function(e){r.sort_6(e.currentTarget),e.preventDefault()})),document.querySelector("#volume").addEventListener("click",(function(e){r.sort_7(e.currentTarget),e.preventDefault()})),document.querySelector("#mt-body").addEventListener("click",(function(e){let t=e.target.closest("#fav");t&&(a.addToStorage(t),r.addToFav(t),e.preventDefault())})),document.querySelector("#favorites").addEventListener("click",(function(t){let a=t.currentTarget.childNodes[2];if(a.classList.contains("active"))a.classList.remove("active"),l(n);else{a.classList.add("active");let t=JSON.parse(localStorage.getItem("coins"));if(t[0]||t[1]){const i=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${t.join()}&order=market_cap_desc&sparkline=true&price_change_percentage=7d`;e.get(i).then((e=>{r.showFav(a,e),d(e)})).catch((e=>console.log(e)))}else document.querySelector("#mt-body").innerHTML="",document.querySelector(".message")||document.querySelector("#home-a").appendChild(r.messageTemplate())}t.preventDefault()})),document.querySelector("#home-a").addEventListener("click",(function(e){e.target.closest(".back")&&(document.querySelector("#favorites").childNodes[2].classList.remove("active"),l(n))})),document.querySelector("#total").addEventListener("click",(()=>{c.classList.remove("active")})),document.querySelector("#markets").addEventListener("click",(()=>{c.classList.remove("active")})),document.querySelector("#list-pages").addEventListener("click",(function(e){c.classList.remove("active");const t=e.target,r=document.querySelector(".left"),a=document.querySelector(".right");t.classList.contains("left")?l(s.pageLeft(t,a)):t.classList.contains("right")&&(l(s.pageRight(t,r)),r.classList.add("hover"))})),document.querySelector("#search").addEventListener("keyup",(e=>{o.filterList(e.target,1)})),document.querySelector("#searchIcon").addEventListener("click",h),document.querySelector("#searchForm").addEventListener("submit",h)})();