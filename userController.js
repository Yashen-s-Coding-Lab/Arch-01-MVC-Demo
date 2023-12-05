/*
*
* MVC _ Demo
* this is not a complete mvc project!
* this is the simple template work in MVC.
* ------------------------------------------------------
*
* I'll rename this js file as userController.js
* you can create files for each view of your business. like user , admin , products , orders and more..
*
* */

// ------------Array for store data (in this project we dont use real database)-------------
const db = [];
// -----------------------------------------------------------------------------------------

// Catch  Submit Button and put it to the variable.
const submitBtn = document.getElementById('submitBtn');

// set click  listener ( set a function. it will work after click the button. )
submitBtn.addEventListener("click",  (event)=> {

    event.preventDefault();

    // in this line,
        // create model object and get it.
        // save data in database.
    storeData(createModel());

    // update table
    setNewDataToTbl();

    console.log('Array :- ', db);
})

// this is the shopping bay guys 😂...  u can bye shopping bag and put mangoes to it.
const createModel = ()=>{
    const fName = document.getElementById('f_name').value || '';
    const lName = document.getElementById('l_name').value || '';
    const age = document.getElementById('age').value || 0;
    const dob = document.getElementById('birth_day').value;
    const newUser = new User(fName,lName,age,dob);
    return newUser;
}



// This function is like a database query. u can use sql or nosql type  db for store data. in java we write jdbc code in here.
const storeData = (user)=>{
    db.push(user);
    console.log('user saved!')
}


// In my book , i said we can change view (UI) at runtime. after  submit data, you can see update table.
const setNewDataToTbl =  ()=>{
    document.getElementById('tBody').innerHTML = '';
    db.map((element,index)=>{
        document.getElementById('tBody').innerHTML += `
        
        <tr
            style="
                width: 600px;
                border: 1px solid black;
            "
        >
            <td>${++index}</td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.age}</td>
            <td>${element.dob}</td>
        </tr>
        `
    });
}


