

document.getElementById("city").addEventListener("change", get_temp);

city_ids = {
    blr : "Bangalore",
    mub : "Mumbai",
    del : "Delhi"
}
function get_temp(){
    city = document.getElementById("city").value;
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+ city_ids[city] +"&appid=c7efbc71eebe88882b9b42252c65044b&units=metric")
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            current_temp = data.list[0].main.temp;
            document.getElementById("current_temp").innerText = current_temp;
    });
}

