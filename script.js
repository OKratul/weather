let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(){
    let search = document.getElementById('search').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+search+`&appid=ebec45640cacb9bf321eea1fbe054b05`)
    .then(res => res.json())
    .then(data => {
        let cityName = document.getElementById('city');
        cityName.innerHTML = data.name;

        let temp = document.getElementById('temp');
        temp.innerHTML = data.main.temp - 273.15;
        let des = document.getElementById('des');
        des.innerHTML = data.weather[0].description;

        if(des.innerHTML== 'haze'){
           let container = document.querySelector('.container');

           container.style.backgroundImage="url('cityscape-high-rise-buildings-poor-weather-morning-haze-pollution-covers-city-192077857.jpg')";
           
           
        }
       else if (des.innerHTML== 'overcast clouds'){
        let container = document.querySelector('.container');

           container.style.backgroundImage="url('photo-1611928482473-7b27d24eab80.jpg')";
       }
       else if (des.innerHTML== 'moderate rain'){
        let container = document.querySelector('.container');

           container.style.backgroundImage="url('Rain-rain-2106040717.jpg')";
       }
       else if (des.innerHTML== 'light rain'){
        let container = document.querySelector('.container');

           container.style.backgroundImage="url('Rains-1.webp')";
       }
       else if (des.innerHTML== 'broken clouds'){
        let container = document.querySelector('.container');

           container.style.backgroundImage="url('cirrocumulus-234427_640.jpg')";
       }
       else if (des.innerHTML== 'clear sky'){
        let container = document.querySelector('.container');

           container.style.backgroundImage="url('blue-sky-with-clouds-weather-background_261642-70.webp')";
       }
    })
}
)
