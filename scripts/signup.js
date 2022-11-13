

///uploading the data for signup after validating
class User{
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
            let res=await fetch('https://infinite-river-74709.herokuapp.com/userData');
            let userdata=await res.json();
            let result=false;
            userdata.forEach((el)=>{
          if(el.email==e){
             result=true;
             return
           }
        })
            if(result==false){
              let response=await fetch('https://infinite-river-74709.herokuapp.com/userData',{
              method:'POST',
              body:JSON.stringify(this),
              headers:{
                'Content-type':'application/json'
              }
            })
            let data=await response.json();
            console.log(data);
            window.location.href="login.html";
            }else{
              alert('Email already exists')
            }
         }else{
          alert('Please enter valid credentials')
        }
      }  
    } 
    let user=new User();
   
    const Register=()=>{

        const name=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const mobile=document.getElementById('mobile').value;
        user.signUp(name,email,password,mobile);
        console.log(user);
    }
    let signupbtn=document.getElementById("confirm");
    signupbtn.addEventListener("click",function(){
      Register()
    });

    ///homepage address

    let home=document.querySelector('#heading img');
     home.onclick=function(){
     window.location.href='/muddled-can-9800/home.html'
    }