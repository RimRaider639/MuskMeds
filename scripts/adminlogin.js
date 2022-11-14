
///Validating the signup data and sending admin data to the server
class Admin{
    constructor(){
       
    }
    validateUS(name){
      return name.length<=3?false:true
    };
    validatePassword(password){
      let x=password.includes('!')||password.includes('@')||password.includes('#')||password.includes('&')||password.includes('$');
      let p=password.toString();
      if(p==""){
        alert('password is empty')
      }
      let y=p.length>=8;
      let z=p[0]==p[0].toUpperCase();
      if(x&&y&&z){
        return true;
      }else{
        return false;
      }
    };
    async signUp(n,e,p,m){
      let isValidated=this.validateUS(n)&&this.validatePassword(p);
      if(isValidated){
        this.name=n;
        this.email=e;
        this.password=p;
        this.mobile=m;
        let res=await fetch('https://infinite-river-74709.herokuapp.com/adminData');
        let admindata=await res.json();
        let result=false;
        console.log(admindata)
        admindata.forEach((el)=>{
      if(el.email==e){
         result=true;
         return
       }
    })
        if(result==false){
          let response=await fetch('https://infinite-river-74709.herokuapp.com/adminData',{
          method:'POST',
          body:JSON.stringify(this),
          headers:{
            'Content-type':'application/json'
          }
        })
        let data=await response.json();
        console.log(data);
        alert('Successfully signed up,Proceed to Login')
        window.location.reload();
        }else{
          alert('Email already exists')
        }
     }else{
      alert('Please enter valid credentials')
    }
  }  
} 
let admin=new Admin();

const Register=()=>{

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const mobile=document.getElementById('mobile').value;
    admin.signUp(name,email,password,mobile);
    console.log(admin);
}
let signupbtn=document.getElementById("confirm");
signupbtn.addEventListener("click",function(){
  Register();
});


////Admin login authentication

let details;//to store the login details
let btn=document.getElementById('submit');
btn.onclick=async ()=>{
    let email=document.getElementById('loginemail').value;
     let password=document.getElementById('loginpassword').value;
    let response=await fetch(`https://infinite-river-74709.herokuapp.com/adminData?email=${email}`);
    let data=await response.json();
    ///compare function
      checkdata(data,email)
      console.log(details)
      if(details==null){
        alert('Email does not exist');
      }else{
        if(details.password==password){
            alert('Login successfull');
            localStorage.setItem('admin_details',JSON.stringify(details))
            window.location.href='./adminpage.html'
        }else{
            alert('Wrong password')
        }
      }
      details=null;
}


///function to compare data
const checkdata=(data,enteredemail)=>{
    data.forEach((el)=>{
       if(el.email==enteredemail){
         details=el;
         return;
       }
    })
}

///homepage address
    
    let home=document.querySelector('#heading img');
     home.onclick=function(){
     window.location.href='./index.html'
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