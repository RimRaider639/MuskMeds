///displaying the name after successfull login
let welcome=document.querySelector('#welcome span');
let admin_details=JSON.parse(localStorage.getItem('admin_details'));
welcome.innerHTML=admin_details.name;