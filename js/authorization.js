let login = document.querySelector('.login');
let password = document.querySelector('.pass');
let button = document.querySelector('.btnOk');

const renderText = (text)=>{
    let formAuth = document.querySelector('.form__auth');
    let div = document.createElement('div');
    formAuth.insertAdjacentElement('beforeend',div);

    div.textContent = text;

    setTimeout(()=>{
        div.remove();
    },1500)
}



button.addEventListener('click',(event)=>{
    event.preventDefault();


    let loginValue = login.value;
    let passValue = password.value;


    if(loginValue =="" && passValue==""){
        renderText("Заполните пустые поля");
    }
    let json = {
        "login":loginValue,
        "password":passValue
    };
    fetch(url="../php/Auth.php",{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(json)

    })  
    .then(response=>response.json())
    .then(data=>{
        if(data.Error){
            renderText(Object.values(data))
        }
        if(data.position){
            window.location.href = '../index.php';
            document.cookie = `user=${data.login}`
        }
    })
})



