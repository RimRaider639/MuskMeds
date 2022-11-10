let details;
let btn=document.getElementById('submit');
btn.onclick=async ()=>{
    let email=document.getElementById('email').value;
     let password=document.getElementById('password').value;
    let response=await fetch(`https://infinite-river-74709.herokuapp.com/userData?email=${email}`);
    let data=await response.json();
      checkdata(data,email)
      console.log(details)
      if(details==null){
        alert('Email does not exist');
      }else{
        if(details.password==password){
            alert('Login successfull');
            window.location.href='/muddled-can-9800/home.html';
            localStorage.setItem('user_details',JSON.stringify(details))
            
        }else{
            alert('Wrong password')
        }
      }
      details=null;
}

const checkdata=(data,enteredemail)=>{
    data.forEach((el)=>{
       if(el.email==enteredemail){
         details=el;
         return;
       }
    })
}
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