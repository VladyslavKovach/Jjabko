

const model =
new URLSearchParams(window.location.search).get("model")
|| "iphone11";

const prices = {

iphone11: {
title: "Ремонт iPhone 11",
display: "2200 грн",
battery: "1000 грн",
glass: "1500 грн",
body: "1800 грн"
},

iphone11pro: {
title: "Ремонт iPhone 11Pro",
display: "2500 грн",
battery: "1200 грн",
glass: "1700 грн",
body: "2000 грн"
},

iphone11promax: {
title: "Ремонт iPhone 11ProMax",
display: "2900 грн",
battery: "1300 грн",
glass: "1800 грн",
body: "2200 грн"
},

iphone12: {
title: "Ремонт iPhone 12",
display: "2800 грн",
battery: "1200 грн",
glass: "1800 грн",
body: "2200 грн"
},

iphone12mini: {
title: "Ремонт iPhone 12Mini",
display: "2600 грн",
battery: "1200 грн",
glass: "1800 грн",
body: "2200 грн"
},

iphone12pro: {
title: "Ремонт iPhone 12Pro",
display: "3200 грн",
battery: "1300 грн",
glass: "1900 грн",
body: "2300 грн"
},

iphone12promax: {
title: "Ремонт iPhone 12ProMax",
display: "3800 грн",
battery: "1400 грн",
glass: "2000 грн",
body: "2500 грн"
},

iphone13: {
title: "Ремонт iPhone 13",
display: "3200 грн",
battery: "1400 грн",
glass: "2000 грн",
body: "2500 грн"
},
    
iphone13mini: {
title: "Ремонт iPhone 13 Mini",
display: "3000 грн",
battery: "1300 грн",
glass: "1900 грн",
body: "2400 грн"
},
    
iphone13pro: {
title: "Ремонт iPhone 13 Pro",
display: "4200 грн",
battery: "1600 грн",
glass: "2300 грн",
body: "2900 грн"
},
    
iphone13promax: {
title: "Ремонт iPhone 13 Pro Max",
display: "4800 грн",
battery: "1700 грн",
glass: "2500 грн",
body: "3200 грн"
},
    
iphone14: {
title: "Ремонт iPhone 14",
    display: "3500 грн",
    battery: "1500 грн",
    glass: "2200 грн",
    body: "2800 грн"
    },
        
iphone14plus: {
title: "Ремонт iPhone 14 Plus",
display: "3800 грн",
battery: "1600 грн",
glass: "2300 грн",
body: "2900 грн"
},
        
iphone14pro: {
title: "Ремонт iPhone 14 Pro",
display: "5200 грн",
battery: "1800 грн",
glass: "2800 грн",
body: "3500 грн"
},
        
iphone14pm: {
title: "Ремонт iPhone 14 Pro Max",
display: "5800 грн",
battery: "1900 грн",
glass: "3000 грн",
body: "3800 грн"
},
        
iphone15: {
title: "Ремонт iPhone 15",
display: "4200 грн",
battery: "1700 грн",
glass: "2500 грн",
body: "3200 грн"
},
        
iphone15plus: {
title: "Ремонт iPhone 15 Plus",
display: "4600 грн",
battery: "1800 грн",
glass: "2700 грн",
body: "3400 грн"
},
        
iphone15pro: {
title: "Ремонт iPhone 15 Pro",
display: "6500 грн",
battery: "2200 грн",
glass: "3400 грн",
body: "4500 грн"
},
        
iphone15pm: {
title: "Ремонт iPhone 15 Pro Max",
display: "7200 грн",
battery: "2400 грн",
glass: "3700 грн",
body: "4900 грн"
},
        
iphone16: {
title: "Ремонт iPhone 16",
display: "4800 грн",
battery: "1900 грн",
glass: "2900 грн",
body: "3600 грн"
},
        
iphone16plus: {
title: "Ремонт iPhone 16 Plus",
display: "5200 грн",
battery: "2000 грн",
glass: "3000 грн",
body: "3800 грн"
},
        
iphone16pro: {
title: "Ремонт iPhone 16 Pro",
display: "7800 грн",
battery: "2600 грн",
glass: "4000 грн",
body: "5200 грн"
},
        
iphone16pm: {
title: "Ремонт iPhone 16 Pro Max",
display: "8500 грн",
battery: "2800 грн",
glass: "4300 грн",
body: "5600 грн"
},
        
iphone17: {
title: "Ремонт iPhone 17",
display: "13999 грн",
battery: "2200 грн",
glass: "3200 грн",
body: "4000 грн"
},
        
iphone17air: {
title: "Ремонт iPhone 17 Air",
display: "12399 грн",
battery: "2300 грн",
glass: "3400 грн",
body: "4300 грн"
},
        
iphone17pro: {
title: "Ремонт iPhone 17 Pro",
display: "15999 грн",
battery: "3000 грн",
glass: "4700 грн",
body: "6200 грн"
},
        
iphone17pm: {
title: "Ремонт iPhone 17 Pro Max",
display: "17777 грн",
battery: "3200 грн",
glass: "5000 грн",
body: "6700 грн"
}

};

const phone = prices[model];

document.getElementById("phoneTitle").innerHTML = phone.title;

document.getElementById("priceGrid").innerHTML = `

<div class="price-card">
<h3>Заміна дисплея</h3>
<p>${phone.display}</p>
</div>

<div class="price-card">
<h3>Заміна батареї</h3>
<p>${phone.battery}</p>
</div>

<div class="price-card">
<h3>Заміна заднього скла</h3>
<p>${phone.glass}</p>
</div>

<div class="price-card">
<h3>Заміна корпусу</h3>
<p>${phone.body}</p>
</div>

<div class="price-card">
<h3>Діагностика</h3>
<p>Безкоштовно</p>
</div>

`;


const select = document.getElementById("modelSelect");

if(select){

    select.value = model;

    select.addEventListener("change", function(){

        window.location.href =
        "prices.html?model=" + this.value;

    });

}