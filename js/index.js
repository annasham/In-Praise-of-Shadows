let now = new Date(); // Get the current time
let elem = document.querySelector(`div[data-hour="${now.getHours()}"]`); // Select the element that's supposed to be shown for the current time

if (elem) { // If its exists, show it
  elem.style.display = 'block';
}
//font//
  (function(d) {
    var config = {
      kitId: 'oim2hje',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

//time - based - background change
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 1900);
  console.log(h);
  console.log(t);
  x = document.getElementById("paragraph");

  if (h=="00"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="01"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="02"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="03"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="04"){
    document.getElementById('body').style.backgroundColor = "#2f2f2f";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="05"){
    document.getElementById('body').style.backgroundColor = "#2f2f2f";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="06"){
    document.getElementById('body').style.backgroundColor = "#626262";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="07"){
    document.getElementById('body').style.backgroundColor = "#626262";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="08"){
    document.getElementById('body').style.backgroundColor = "#959595";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="09"){
    document.getElementById('body').style.backgroundColor = "#959595";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="10"){
    document.getElementById('body').style.backgroundColor = "#ffffff";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="11"){
    document.getElementById('body').style.backgroundColor = "#ffffff";
    document.getElementById("test").style.color = "black";
    document.getElementById('morning').innerHTML = "AM";
  }
  if (h=="12"){
    document.getElementById('body').style.backgroundColor = "#ffffff";
    document.getElementById("test").style.color = "EBECF0";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="13"){
    document.getElementById('body').style.backgroundColor = "#ffffff";
    document.getElementById("test").style.color = "#EBECF0";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="14"){
    document.getElementById('body').style.backgroundColor = "#EBECF0";
    document.getElementById("test").style.color = "#959595";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="15"){
    document.getElementById('body').style.backgroundColor = "#EBECF0";
    document.getElementById("test").style.color = "#959595";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="16"){
    document.getElementById('body').style.backgroundColor = "#959595";
    document.getElementById("test").style.color = "#3A3B3C";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="17"){
    document.getElementById('body').style.backgroundColor = "#959595";
    document.getElementById("test").style.color = "#3A3B3C";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="18"){
    document.getElementById('body').style.backgroundColor = "#626262";
    document.getElementById("test").style.color = "black";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="19"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="20"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="21"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="22"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('afternoon').innerHTML = "PM";
  }
  if (h=="23"){
    document.getElementById('body').style.backgroundColor = "#000000";
    document.getElementById("test").style.color = "black";
    document.getElementById('afternoon').innerHTML = "PM";
  }
};

function checkTime(i) {
  if(i < 10) {i = "0" + i};
  return i;
}

//highlight time

(function(window, document) {
  const markers = document.querySelectorAll('mark');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  },{
    threshold: 0.8
  });
  markers.forEach(mark => {
    observer.observe(mark);
  });
})

//go to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
