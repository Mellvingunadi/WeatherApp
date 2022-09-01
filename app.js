const btn = document.querySelector('button');
const inputSearchContainer = document.querySelector('.textBar');
const weatherContainer = document.querySelector('.weatherLoading');

//Fetch Api




let weather = {
    "apiKey": "32376dacf8f36e044ad0a5b372c4baaa",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        + this.apiKey
        )
        .then((response)=> response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        //Esctract the data from object to variable
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        //display the data
        document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector('.humidity').innerText = humidity +"%";
        document.querySelector('.wind').innerText = "Wind Speed "+ speed + " Km/h";
        document.querySelector('.weather').classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search:function(){
      this.fetchWeather(document.querySelector('.textBar').value);
    }
};

//add search button eventListener
//for click event
btn.addEventListener('click', ()=>{
    weather.search();
})

//for Enter event button
inputSearchContainer.addEventListener('keyup', ()=>{
    if(event.key === "Enter"){
        weather.search()
    }
})

weather.fetchWeather("Denver");



