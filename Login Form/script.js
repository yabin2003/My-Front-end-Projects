const create_cnt=document.getElementById('create');
const log_btn=document.getElementById('login');
const login_ctn=document.getElementById('ctn');
const sg_ctn=document.getElementById('sg_ctn');
const submit_btn=document.getElementById('btn');
//log_btn.addEventListener('click',);

function signup()
{
    
    login_ctn.parentNode.replaceChild(sg_ctn,login_ctn);
    sg_ctn.style.display='block'; 
}
function login()
{
    sg_ctn.parentNode.replaceChild(login_ctn,sg_ctn);
}
function submit()
{
    
    const user_data=document.querySelector('.user').value;
    const pwd_data=document.querySelector('.pwd').value;
    localStorage.setItem('username',user_data);
    localStorage.setItem('pwd',pwd_data);
    const users=localStorage.getItem('username');
    const password=localStorage.getItem('pwd');
    console.log(users);
    console.log(password);
}
function create()
{
    const firstname=document.querySelector('.firstname').value;
    const lastname=document.querySelector('.lastname').value;
    const email=document.querySelector('.email').value;
    const pwd2=document.querySelector('.pwd2').value;
    localStorage.setItem('firstname1',firstname);
    localStorage.setItem('lastname1',lastname);
    localStorage.setItem('email1',email);
    localStorage.setItem('pwd2_',pwd2);
    const first_name=localStorage.getItem('firstname1');
    const last_name=localStorage.getItem('lastname1');
    const Email=localStorage.getItem('email1');
    const password2=localStorage.getItem('pwd2_');
    console.log(first_name);
    console.log(last_name);
    console.log(Email);
    console.log(password2);
}
