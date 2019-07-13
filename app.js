window.addEventListener("load", () =>{
  let long;
  let lat;
  let temperatureDescription=document.querySelector('.temperature-description')
  let locationTimezone=document.querySelector(".location-timezone")
  let temperatureSelection=document.querySelector(".temperature-section");
  const temperatureSpan=document.querySelector('.temperature-section span');

});

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;

        const proxy="https://cors-anywhere.herokuapp.com/";

        const api=`${proxy}
        https://api.darksky.net/forecast/24ba2ba516d01d25c06a7b4c11df61cf/${lat},${long}`;


    fetch(api)
      .then(response =>{
          return response.json();
      })
      .then(data=> {
          console.log(data);
          const{temperature,summary}=data.currently;
          temperatureDegree.textContent=temperature;
          termperatureDescription.textContent=summary;
          locationTimezone.textContent=data.timezone;
          let celsius=(temperature-32)*(5/9);
          setIcons(icon,document.querySelector(".icon"));

          temperatureSection.addEventListener('click',()=>{
              if(temperatureSpan.textContent==="F"){
                  temperatureSpan.textContent="C";
                  temperatureDegree.textContent=Math.floor(celsius);
              }else{
                  temperatureSpan.textContent="F";
                  temperatureDegree.textContent=Math.floor(temperature);
              }
          })
      });
    });
}

function setIcons(icon,iconID){
    const skycons=new Skycons({color: "white"});
    const currentIcon=icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}
});