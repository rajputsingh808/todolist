document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();
        checkData();
    });

    document.getElementById("signup-form").addEventListener("submit", function (e) {
        e.preventDefault();
        saveData();
    });
});

//signup form 

//to save data
function saveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(name, email, password);

    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);

    //retrieving users from Local storage
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if (user_records.some((user) => user.email === email)) {
        alert("Duplicate Data");
    }
    else{
        // user_records.push({
        //     "name":name,
        //     "email":email,
        //     "password":password
        // })
        user_records.push({ name, email, password });
        localStorage.setItem("users",JSON.stringify(user_records));
        alert("Registration Succesful!")
    }
}

//login form 

//to check data
function checkData(){
    let email = document.querySelector(".emai").value;
    let password = document.querySelector(".passwor").value;

    //retrieving users
    let cur_record = JSON.parse(localStorage.getItem("users")) || [];

    console.log(cur_record);
    console.log("email" + email);

    let cur_user = cur_record.find(user => user.email === email && user.password === password);

    if(cur_user) {
        console.log("user matched")

        localStorage.setItem("name", cur_user.name);
        localStorage.setItem("email", cur_user.email);

        console.log(cur_user.name);
        console.log("name:" + localStorage.getItem("name"));
        // window.location.href = "todo.html";
        window.location.replace("todo.html");
    } else {
        console.log("user not matched")
        alert("Login Failed!!");
    }
}

// // Ensure form submissions use the functions
// document.getElementById("login-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     checkData();
// });

// document.getElementById("signup-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     saveData();
// });