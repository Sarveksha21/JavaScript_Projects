const input_box = document.getElementById('input_box');
const listContainer =  document.getElementById('listContainer');

//Main functionality of the project: when button is clicked the items will be added to the list

function addTask(){
    if(input_box.value === ''){
        alert("You must write something");
    }
    else{
        // Important 
        let li = document.createElement('li');
        li.innerHTML = input_box.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');  // creating 'X' icon ( to delete the item from the list)
        span.innerHTML = '\u00d7';  
        li.appendChild(span);// displaying 'X' icon
    }
    input_box.value='';
    saveData();
}

// code for the click function : 

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove(); //here this.parentElement is the 'li' element will be removed from the list when clicked on 'X' icon input_box.e span
        saveData();
    }
},false);

// if we close our 'to do list' it will the save changes as it is 
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

//it will display to us when we will visit it again 
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();