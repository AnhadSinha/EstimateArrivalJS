const speed = document.getElementById("speed");
const distance = document.getElementById("distance");
const button = document.getElementById("cal-arrival");
function checkEmpty(input){
    if(input.value.trim() == ""){
        input.classList = "error";

    }
    else{
        input.classList = "success";
    }
}
function checkForSpeedAndDistance(speed,distance){
    let time = parseInt(distance)/parseInt(speed);
    let day = new Date()
    let arrivalTime = new Date(day.setHours(day.getHours()+time));
console.log(arrivalTime)   
    document.getElementById("arrival-time").innerHTML = `The time is ${day.toTimeString()} and <br> you will arrive by ${arrivalTime.toTimeString()}.`
}
button.addEventListener("click",function(e){
    e.preventDefault();
    checkEmpty(speed);
    checkEmpty(distance);
    if(distance.value != ""&&speed.value != ""){
        checkForSpeedAndDistance(speed.value,distance.value)
        car.classList.add("move");
        track.classList.add("move");
        wheels.classList.add("move");
    }
    else{
        car.classList.remove("move");
        track.classList.remove("move");
        wheels.classList.remove("move");
    }
})
