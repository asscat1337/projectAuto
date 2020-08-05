
let btnOK = document.querySelector('.btnOK');
let form = document.querySelector('.forms');


renderText = (text)=>{
    let body = document.querySelector('body');
    let div = document.createElement('div');
    body.insertAdjacentElement('beforebegin',div);

    div.textContent = text;

    setTimeout(()=>{
        div.remove();
    },3000)
}

let telephone = document.querySelector('.tele');

telephone.addEventListener('input',(event)=>{
    let val= telephone.value
    console.log(val)
    let isValid = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    event.target.value = !isValid[2] ? isValid[1] :'(' + isValid[1] + ')' + isValid[2] + (isValid[3] ? '-' + isValid[3] : '') + (isValid[4] ? '-' + isValid[4] : '');
})

btnOK.addEventListener('click',(event)=>{


    event.preventDefault();

    let fio = document.querySelector('.FIO').value;
    let date = document.querySelector('.dates').value;
    let tel = document.querySelector('.tele').value;
    let data = {
        "fio":fio,
        "date":date,
        "tel":tel
    } 
    fetch(url = '/php/addData.php',{
        method:'POST',
        headers:{
            "Content-type":"application/x-www-form-urlencoded"
        },
        body:JSON.stringify(data)

    })
    .then(res=>{
        if(res.ok){
            if(fio ==""&& date==""&&tel==""){
                renderText('Заполните поля')
            }else if(fio=="" || date==""||tel==""){
                renderText('Не заполены все поля');
            }else{
                renderText('Пациент добавлен');
            }
            form.reset();
        }
    })
    .catch(error=>console.error(error));
})