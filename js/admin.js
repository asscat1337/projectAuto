let button = document.querySelector('.btn');
let pass = document.querySelector('.pass');
let login = document.querySelector('.login');
let fio = document.querySelector('.fio');
let form = document.querySelector('.form');
let selected = document.querySelector('.selected');

const renderText = (text)=>{
    let body = document.querySelector('body');
    let div = document.createElement('div');
    body.append(div);

    div.textContent = text;

    setTimeout(()=>{
        div.remove();
    },1500)
}



button.addEventListener('click',(event)=>{
    event.preventDefault();
    let selectedValue = selected.value
    let passValue = pass.value;
    let loginValue = login.value;
    let fioValue = fio.value;
    console.log(selectedValue);
    
    let data = {
        "password":passValue,
        "login":loginValue,
        "fio":fioValue,
        "selected":selectedValue
    }
    
    fetch(url="/php/regist.php",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>{
        if(data.status){
            renderText(data.status);
            form.reset();
        }
    });
})


let buttonExit = document.querySelector('.buttonExit');
		buttonExit.addEventListener('click',()=>{
            // console.log(document.cookie);
		    function setCookie(name, value, options = {}) {

                options = {
                  path: '/',
                  ...options
                };
              
                if (options.expires instanceof Date) {
                  options.expires = options.expires.toUTCString();
                }
              
                let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
              
                for (let optionKey in options) {
                  updatedCookie += "; " + optionKey;
                  let optionValue = options[optionKey];
                  if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                  }
                }
              
                document.cookie = updatedCookie;
              }
            function deleteCookie(name){
                setCookie(name,"",{
                    'max-age':-1
                })
            }
            deleteCookie('PHPSESSID');
            location.reload();
            location.href="./auth/authPage.php";
        })