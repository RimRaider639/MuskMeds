let details; ///to store login details

////validating login credentials
let btn = document.getElementById("submit");
btn.onclick = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let response = await fetch(
    `https://lapis-quixotic-dracorex.glitch.me/userData?email=${email}`
  );
  let data = await response.json();
  checkdata(data, email);
  console.log(details);
  if (details == null) {
    alert("Email does not exist");
  } else {
    if (details.password == password) {
      alert("Login successfull");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "./index.html";
      localStorage.setItem("user_details", JSON.stringify(details));
    } else {
      alert("Wrong password");
    }
  }
  details = null;
};

///checking if account already exists
const checkdata = (data, enteredemail) => {
  data.forEach((el) => {
    if (el.email == enteredemail) {
      details = el;
      return;
    }
  });
};

///homepage address

let home = document.querySelector("#heading img");
home.onclick = function () {
  window.location.href = "./index.html";
};

/////DELETE FUNCION//////

//  let delte =async()=>{
//     let  response=await fetch('https://infinite-river-74709.herokuapp.com/userData/',{
//     method:'DELETE',
//     headers:{
//         'Content-type':'application/json'
//     }
// });
// let data=await response.json();
// }
// delte();
