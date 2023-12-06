const submit_button = document.querySelector("#submitTimeFrames");
const start_date_frame = document.querySelector("#start-stamp-date");
const end_date_frame = document.querySelector("#end-stamp-date");
const start_time_frame = document.querySelector("#start-stamp-time");
const end_time_frame = document.querySelector("#end-stamp-time");
const error_msg = document.querySelector(".error");
const yr_box = document.getElementById("ins_yr");
const days_box = document.getElementById("ins_days");
const hrs_box = document.getElementById("ins_hr");
const min_box = document.getElementById("ins_min");
const sec_box = document.getElementById("ins_seconds");
var count = 1;
var clearInt;

// console.log(new Date().getTime());
// document.querySelector("#start-stamp-date").value = new Date();
// start_date_frame.value = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
// document.querySelector("#start-stamp-date").value = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;

let r_entered_start_date,
  r_entered_last_date,
  r_entered_start_time,
  r_entered_last_time,
  entered_start_year,
  entered_start_month,
  entered_start_date,
  entered_end_year,
  entered_end_month,
  entered_end_date,
  start_hr, start_min, end_hr, end_min;

submit_button.addEventListener("click", function (event) {
  event.preventDefault();

/**
 *    Validation for non-empty input entries
 */

// if(start_date_frame.value == ""){
//     error_msg.style.display = "block"
//     return false;
// }else{
//     error_msg.style.display = "none"
// }

if(end_date_frame.value == ""){
    error_msg.style.display = "block"
    return false;
}else{
    error_msg.style.display = "none"
}


// if(start_time_frame.value == ""){
//     error_msg.style.display = "block"
//     return false;
// }else{
//     error_msg.style.display = "none"
// }

if(end_time_frame.value == ""){
    error_msg.style.display = "block"
    return false;
}else{
    error_msg.style.display = "none"
}


/**
 *    End of Validation for non-empty input entries
 */

clearInt = setInterval(runCountDown, 1000);
// runCountDown();

 
});




function runCountDown(){



    r_entered_start_date = start_date_frame.value.split("-");
    r_entered_last_date = end_date_frame.value.split("-");
    r_entered_start_time = start_time_frame.value.split(":");
    r_entered_last_time = end_time_frame.value.split(":");
    // console.log(r_entered_start_time, r_entered_last_time);
    
    entered_start_year = r_entered_start_date[0];
    entered_start_month = r_entered_start_date[1];
    entered_start_date = r_entered_start_date[2];
    entered_end_year = r_entered_last_date[0];
    entered_end_month = r_entered_last_date[1];
    entered_end_date = r_entered_last_date[2];
    start_hr = r_entered_start_time[0];
    start_min = r_entered_start_time[1];
    end_hr = r_entered_last_time[0];
    end_min = r_entered_last_time[1];
  

  
  //   console.log(start_hr,end_hr)
const current_minutes = new Date().getMinutes();
const current_seconds = new Date().getSeconds();
const current_month = new Date().getMonth() + 1;
const current_date = new Date().getDate();
const current_year = new Date().getFullYear();
let current_hour = new Date().getHours();

if(current_hour > 12){
    current_hour = current_hour-12;
  }
  if(end_hr > 12){
    end_hr = end_hr-12;
  }


 
    // const dateObjFirst = new Date(
    //   `${entered_start_month} ${entered_start_date} ${entered_start_year}  ${start_hr}:${start_min}:${current_seconds}`
    // );
        const dateObjFirst = new Date(
      `${current_month} ${current_date} ${current_year}  ${current_hour}:${current_minutes}:${current_seconds}`
    );
    // console.log(dateObjFirst);
    // const dateObjFirst = new Date(``);
    const dateObjLast = new Date(
      `${entered_end_month} ${entered_end_date} ${entered_end_year}  ${end_hr}:${end_min}:00`
    );

    count++;
  
    // console.log(dateObjLast);
    // console.log(dateObjFirst);
    const differnce_period = dateObjLast - dateObjFirst;
    // console.log(differnce_period);
    
    const days_diff = Math.floor(differnce_period/1000/60/60/24);
    const hours_diff = Math.floor((differnce_period/1000/60/60)%24);
    const mins_diff = Math.floor((differnce_period/1000/60)%60);
    const secons_diff = Math.floor((differnce_period/1000)%60);
    const yr_diff = Math.floor((entered_end_year - current_year));
  
    // console.log(days_diff);
    // console.log(hours_diff);
    // console.log(mins_diff);
    // console.log(yr_diff);

    if(yr_diff == 0 && days_diff == 0 && hours_diff == 0 && mins_diff == 0 && secons_diff == 0 ){
        alert("Happy !@#$%^&*(");
        clearInterval(clearInt);
        yr_box.innerHTML =0;
        days_box.innerHTML =0;
        hrs_box.innerHTML =0;
        min_box.innerHTML =0;
        sec_box.innerHTML =0;

        return false;
    }else{
  
    yr_box.innerHTML = yr_diff;
    days_box.innerHTML = days_diff;
    hrs_box.innerHTML = hours_diff;
    min_box.innerHTML = mins_diff;
    sec_box.innerHTML = secons_diff;
    }

}