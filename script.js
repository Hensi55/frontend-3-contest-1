let empName = document.getElementById("emp-name");
let empProfession = document.getElementById("emp-profession");
let empAge = document.getElementById("emp-age");

document.getElementById("btn").addEventListener('click',myMessage);
function myMessage(){
    let message = document.querySelector(".message");

    if(empName.value == "" || empAge.value == "" || empProfession.value ==""){      
         message.style.color='red';
       message.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
    }
    else{

        message.style.color='green';
        message.innerHTML = "Success : Employee Added!";
        employeeDetails();
        reset();
    }
}


let empArr=[];
let count = 1;

function employeeDetails(){

   let emp = {
    Name : empName.value,
    Profession : empProfession.value,
    Age : empAge.value
   }

   empArr.push(emp);
 document.getElementById("default-text").style.display ='none';




//  let deletebtn = document.createElement("button");
//  deletebtn.innerText = "Delete User";
//  deletebtn.style.cssText = " background-color:white; color:black; padding:10px 40px; border-radius:20px; border:none; font-size:16px";
//  deletebtn.setAttribute("onclick","onDelete()");




 let empDetails = document.querySelector(".emp-added-info");
 let trTag = document.createElement("tr");

//  trTag.innerHTML =
//  `<td>${count}</td> <td>Name : ${emp.Name}</td> <td> Profession : ${emp.Profession}</td> <td>Age : ${emp.Age}</td>`;
//   trTag.appendChild(deletebtn);

//  count++;
//  empDetails.appendChild(trTag);

trTag.innerHTML = "";

empArr.map((emps,idx)=>{
    trTag.innerHTML =
     `<td>${idx+1}</td> <td>Name : ${emps.Name}</td> <td> Profession : ${emps.Profession}</td> <td>Age : ${emps.Age}</td> <span><button id ="del-btn" style =" background-color:white; color:black; padding:10px 40px; border-radius:20px; border:none; font-size:16px"
     onclick="onDelete(this)">Delete User</button></span>`;
     empDetails.appendChild(trTag);

})

console.log(empArr);

}

function reset(){

 document.getElementById("emp-name").value = "";
 document.getElementById("emp-profession").value = "";
 document.getElementById("emp-age").value = "";
}


let onDelete = (e)=>{
    e.parentElement.parentElement.remove();
}
