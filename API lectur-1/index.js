
const getWeather = async (cityName) => {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityName}&units=metric`
    );
    let res = await req.json();
    console.log(res);
    ui(res);
  };

  const getWeatherByLocation = async (lat, lon) => {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
    );
    let res = await req.json();
    console.log(res);
    ui(res);
  };

  const ui = (data) => {
     document.getElementById("city-name").innerHTML = data.name;
     document.getElementById("temperature").innerHTML = `Temperature: ${data.main.temp}°C`;
     document.getElementById("condition").innerHTML = `Condition: ${data.weather[0].description}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let cityName = document.getElementById("city").value;
    if (cityName) {
        getWeather(cityName);
      } 
    else {
        getLocation();
    }
  };

  document.getElementById("form").addEventListener("submit", handleSubmit);

  const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          console.log(position);
          getWeatherByLocation(lat, lon);
        });
  };

  // Clock
  function UpdateClock() {
    var now = new Date();
    var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hours = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

    if (hours == 0) {
      hours = 12;
    }

    if (hours > 12) {
      hours = hours - 12;
      pe = "PM";
    }

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December",];
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minuts", "seconds", "period"];
    var values = [week[dname], months[mo], dnum, yr, hours, min, sec, pe];

    for (let i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).innerHTML = values[i];
    }
  }

  function initClock() {
    UpdateClock();
    window.setInterval(UpdateClock, 1000);
  }

  window.onload = initClock;



  
 
  
 
