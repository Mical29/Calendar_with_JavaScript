const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
var container = document.getElementById('calendar');

var dateObj = new Date();
var month = dateObj.getMonth();
var year = dateObj.getFullYear();
var date = dateObj.getDate();

/* 

    This Function take no parameter
    This Function will create table elements and append to root div

*/
function buildTable(){

    var month_year = document.createElement("h3"); // Create <h3/> Element
    month_year.setAttribute("id","monthAndYear") // set id
    month_year.setAttribute("class","card-header") // set class name
    
    var table = document.createElement('TABLE'); // Crate <table/> Element
    table.setAttribute("id","calendar"); //set id
    
    var tableHeader = table.createTHead(); // Create <thead/> 
    tableHeader.setAttribute("id","calendar-head"); // set id
        
    var tableBody = document.createElement("TBODY"); // create <tbody/>
    tableBody.setAttribute("id","calendar-body"); // set id
    
    container.appendChild(month_year); // append <h3> to root div
    container.appendChild(table); // append <table/> to root div
    table.appendChild(tableHeader); // append <theader/> to table
    table.appendChild(tableBody); // append <tbody/> to table
}





/* This Function will show calendar body */
function showCalander(month,year){

    //get <h3/> element with id
    monthAndYear = document.getElementById("monthAndYear");

    tableHead = document.getElementById("calendar-head"); // get <thead/> with id 
    tableBody = document.getElementById("calendar-body"); // get <tbody/> with id


    let headRow = document.createElement("tr"); // create <tr/> 

    /*  
        Loop through days array
        create cell <th/> 
        append to row
    */
    for(var i=0; i<days.length; i++){ 
        let day = days[i];        
        cell = document.createElement("th");
        cellText = document.createTextNode(day);
        cell.appendChild(cellText);
        headRow.appendChild(cell);
        tableHead.appendChild(headRow);        
    }
    
    // Get first day of month
    let firstDay = (new Date(year, month)).getDay();
    

    tableBody.innerHTML = "";
    monthAndYear.innerHTML = months[month] + " " + year;

    let date = 1; // declare date
    
    /* 
        Loop through days 0-6
    */
    for (let i = 0; i < 6; i++) {        
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) { // check firstDay of month to place data
            cell = document.createElement("td");
            cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
            tableBody.appendChild(row)
        }

        else if (date > daysInMonth(month, year)) { // break loop if days in month is over 30 or 31
            break;
        }
        
        else{ 
            cell = document.createElement('td');
            cellText = document.createTextNode(date);
            /* check date is today or not to set bgcolor*/
            if (date === dateObj.getDate() && year === dateObj.getFullYear() && month === dateObj.getMonth()) {
                cell.classList.add("bg-info"); 
            } 
            cell.appendChild(cellText);
            row.appendChild(cell);
            date++;
        }
        tableBody.appendChild(row); 
    }
}
   
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

buildTable();

showCalander(month,year);


