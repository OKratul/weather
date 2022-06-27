let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(){
    let search = document.getElementById('search').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+search+`&appid=ebec45640cacb9bf321eea1fbe054b05`)
    .then(res => res.json())
    .then(data => {
        let cityName = document.getElementById('city');
        cityName.innerHTML = data.name;

        let temp = document.getElementById('temp');
        temp.innerHTML = data.main.temp - 273.15.toFixed(2);
        let des = document.getElementById('des');
        des.innerHTML = data.weather[0].description;
        
    })
}
)
