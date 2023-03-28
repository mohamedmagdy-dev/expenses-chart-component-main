let daysStatus = document.getElementsByClassName("days_status")[0];

// setDataFromApi

fetch("data.json").then((data)=>{
  return data.json();
}).then((days)=> {
  // Create Status Element
  let amounts = [];

  // to Get The  Biggest Day From amount 
  days.forEach((day)=>{
    amounts.push(day.amount)
  })

  // Set Element Fo Page
  days.forEach(day => {
    let status = document.createElement('div');
    status.className = "statu";
    status.appendChild(document.createTextNode(day.day));
  
    // create progress 
    let progress = document.createElement("div");

    if(Math.max(...amounts) == day.amount ) {
      progress.className = "level top";
    } else {
      progress.className = "level";
    }

    progress.style.height = (day.amount * 3) + "px";
    progress.setAttribute("data-cost",`$${day.amount}`);
  
    status.appendChild(progress);

    daysStatus.appendChild(status);
  });

  console.log()
})