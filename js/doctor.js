let doctorContent = document.querySelector('.doctor__content');
let informationPatient = document.querySelector('.information__patient');
let status = document.querySelector('.status');

let btnConfirm = document.querySelector('.btnConfirm');

renderForm=(text)=>{

  let div = document.createElement('div');   
  doctorContent.insertAdjacentElement('beforebegin',div);
  div.textContent = text;
  setTimeout(()=>{
      div.remove();
  },1500);
}

window.addEventListener('DOMContentLoaded',(event)=>{


    btnConfirm.addEventListener('click',()=>{
        fetch(url='/php/doctorKT.php',{
            method:'POST',
                headers:{
                    "Content-Type":'application/x-www-form-urlencoded'
                }
        })
        .then(response=>response.json())
        .then((data)=>{
            let object = {data,selectedData,path};
            console.log(object);
            if(path===undefined){
                renderForm('Добавьте файл');
            }else if(selectedData===undefined){
                renderForm('Выберите статус')
            }
            fetch(url='/php/archive.php',{
                method:"POST",
                body:JSON.stringify(object)
            })
            .then(data=>{
                if(data.ok){
                    renderForm('Запись добавлена');
                    doctorContent.classList.add('added');
                }
                console.log(data)
                console.log(selectedData)
            })
        })
    })

    let selectedData;
    status.addEventListener('change',()=>{
        let indexSelected = status.selectedIndex;
        let options = document.querySelectorAll('option')[indexSelected];
    
        let selectId = options.getAttribute('id');
    
        if(selectId=='1'){
            selectedData = {
                "status":selectId
            }
        } else if(selectId =='2'){
            selectedData = {
                "status":selectId
            }
        }else if(selectId=='3'){
            selectedData = {
                "status":selectId
            }
        }
        console.log(selectedData);
    
    })
    let button = document.createElement('input');

    let forms = document.querySelector('.forms');

        forms.insertAdjacentElement('afterbegin',button);
        button.type='file';
        button.name = 'document';

    event.preventDefault();
    fetch(url='/php/doctorKT.php',{
        method:'GET',
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            }
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
       let divFio = document.createElement('div');
       let divDate = document.createElement('div');
       let divTel = document.createElement('div');

        divFio.textContent = data.fio;
        divDate.textContent = data.date;
        divTel.textContent = data.telephone;


       informationPatient.insertAdjacentElement('afterbegin',divFio);
       informationPatient.insertAdjacentElement('afterbegin',divDate);
       informationPatient.insertAdjacentElement('afterbegin',divTel);
    })
    let path;
    button.addEventListener('change',()=>{
        let oData = new FormData(forms);
        let upload = oData.files;
        oData.append('document',upload);
        fetch(url='/php/uploadFile.php',{
            method:'POST',
            body:oData
        })
        .then(response=>response.json())
        .then(data=>{
           path = data;
        })
        .catch(err=>console.error(err))
    })
})