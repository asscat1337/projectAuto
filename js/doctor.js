let doctorContent = document.querySelector('.doctor__content');
let informationPatient = document.querySelector('.information__patient');
let status = document.querySelector('.status');

let btnConfirm = document.querySelector('.btnConfirm');



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
            let object = {data,selectedData};
            console.log(object);
            fetch(url='/php/archive.php',{
                method:"POST",
                body:JSON.stringify(object)
            })
            .then(data=>{
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

        forms.insertAdjacentElement('beforeend',button);
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

    button.addEventListener('change',()=>{
        let oData = new FormData(forms);
        let upload = oData.files;
        console.log(upload);
        oData.append('document',upload);
        fetch(url='/php/uploadFile.php',{
            method:'POST',
            body:oData
        })
        .catch(err=>console.error(err))
    })
})