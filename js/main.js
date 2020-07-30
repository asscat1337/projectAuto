
let btnOK = document.querySelector('.btnOK');
let form = document.querySelector('.forms');

btnOK.addEventListener('click',(event)=>{


    event.preventDefault();

    let fio = document.querySelector('.FIO').value;
    let date = document.querySelector('.dates').value;
    let tel = document.querySelector('.tele').value;
    //let filename = document.querySelector('.filename').files[0].name;
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
            form.reset();
        }
    })
    .catch(error=>console.error(error));
})