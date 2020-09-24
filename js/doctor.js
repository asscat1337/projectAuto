
let doctorContent = document.querySelector('.doctor__content');
let usersInfo;
let selectedData;
let path;
let procentCovid;

    renderForm=(text)=>{

        let div = document.createElement('div');   
        doctorContent.insertAdjacentElement('beforebegin',div);
        div.textContent = text;
        setTimeout(()=>{
            div.remove();
        },1500);
    }

    const insertDiv=text=>{
        let div = document.createElement('div');   
        doctorContent.insertAdjacentElement('afterbegin',div);
        div.textContent = text;
    }



    const insertForm=()=>{

        let informationPatient = document.querySelector('.information__patient');
        let form = document.createElement('form');
        form.method = "POST";
        form.enctype = "multipart/form-data";
        form.classList.add('forms');
        informationPatient.insertAdjacentElement('afterbegin',form);


        let files = document.createElement('input');
        files.type = "file";
        files.name = 'document';
        form.insertAdjacentElement('beforeend',files);
        files.classList.add('files')



        let select = document.createElement('select');
        form.insertAdjacentElement('beforeend',select);
        let option = document.createElement('option');
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        
        select.append(option);
        option.disabled = true;
        option.textContent = "Выберите значение";
        option.selected = true;



        select.append(option1);
        option1.textContent = "Здоров";

        select.append(option2);
        option2.textContent = "Covid";
        select.append(option3);
        option3.textContent = "Приемный покой";

        select.classList.add('status');
        
        let status = document.querySelectorAll('.status');
        

        for(let i=0;i<status.length;i++){
            status[i].addEventListener('change',()=>{
                let selectedValue = status[i].value
                if(selectedValue){
                    selectedData = {
                        "status":selectedValue
                    }
                }

                if(selectedValue=="Covid"){
                    doctorContent.insertAdjacentHTML('beforeend',"<input type=range min=0 max=100 class=rangValue>")
                    let rangValue = document.querySelector('.rangValue');
                    rangValue.addEventListener('change',()=>{
                        console.log(rangValue.value);
                        let val = rangValue.value
                        procentCovid = {
                            "procent":val
                        }
                    })
                }else if(selectedValue=="Приемный покой"){
                    procentCovid = {
                        "procent":0
                    }
                }else if(selectedValue =="Здоров"){
                    procentCovid = {
                        "procent":0
                    } 
                }
                console.log(selectedValue);
            })
        }
            let btnConfirm = document.createElement('button');
            btnConfirm.textContent = "Отправить";
            form.insertAdjacentElement('beforeend',btnConfirm);
    
            btnConfirm.addEventListener('click',(event)=>{
                event.preventDefault();
                            let object = {usersInfo,selectedData,path,procentCovid};
                            console.log(object);
            
                            if(path===undefined){
                                renderForm('Добавьте файл');
                            }else if(selectedData===undefined){
                                renderForm('Выберите статус')
                            }
                            fetch(url='./php/archive.php',{
                                method:"POST",
                                body:JSON.stringify(object)
                            })
                            .then(data=>{
                                if(data.ok){
                                    renderForm('Запись добавлена');
                                }
                                console.log(data)
                                console.log(selectedData)
                
                                // if(button.value==""){
                                //     btnConfirm.setAttribute('disabled',true);
                                // }
                
                                fetch(url='./php/echoTable.php',{
                                    method:'POST',
                                    headers:{
                                        'Content-type':'application/json'
                                    }
                                })
                                .then(response=>response.json())
                                .then(data=>{
                                    let table = document.querySelector('.table__result tbody');
                                    for(let item of data){
                                        
                                            let tr = document.createElement('tr'),
                                                tdFio = document.createElement('td')
                                                tdDate = document.createElement('td')
                                                tdTel = document.createElement('td')
                                
                                            table.insertAdjacentElement('beforeend',tr);
                                            tr.setAttribute('data-id',item[0]);
                                
                                            tr.insertAdjacentElement('afterbegin',tdTel)
                                            tr.insertAdjacentElement('afterbegin',tdDate);
                                            tr.insertAdjacentElement('afterbegin',tdFio);
                                
                                            tdFio.textContent = item[1];
                                            tdDate.textContent = item[2];
                                            tdTel.textContent = item[3];
                                            console.log(item[1]+item[2]+item[3]);
                                        }
                                })
                            })
                        })  
    
        }

    window.addEventListener('DOMContentLoaded',(event)=>{
    setInterval(()=>{
            (async function(){
                await fetch(url='./php/doctorKT.php',{
                    method:'GET',
                        headers:{
                            "Content-Type":'application/x-www-form-urlencoded'
                        }
                })
                
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                if(data!==0){
                    doctorContent.insertAdjacentHTML('beforeend',`<div class=information__patient></div>`)
                    let informationPatient = document.querySelector('.information__patient');
                    informationPatient.insertAdjacentHTML('beforeend',`<div>
                    ${data.fio}
                    ${data.date}
                    ${data.telephone}
                    </div>`)
                    // insertDiv(data.fio);
                    // insertDiv(data.date);
                    // insertDiv(data.telephone);
                    insertForm();
                    usersInfo = {
                        "fio":data.fio,
                        "date":data.date,
                        "telephone":data.telephone
                    }
                    let forms = document.querySelector('.forms');

                    let button = document.querySelector('.files');
                    console.log(button);
                    button.addEventListener('change',()=>{
    
                        console.log(button.value)
                        let oData = new FormData(forms);
                        let upload = oData.files;
                        oData.append('document',upload);
                        fetch(url='./php/uploadFile.php',{
                            method:'POST',
                            body:oData
                        })
                        .then(response=>response.json())
                        .then(data=>{
                           path = data;
                        })
                        .catch(err=>console.error(err))
                    })  
                }
                if(data===0){
                    console.log("Нет новых данных");
                    let controller = new AbortController();
                    let signal  = controller.signal;
                    signal.addEventListener('abort',()=>console.log("abort"));
                    controller.abort();
                    console.log(signal.aborted);
                }
                })
        })()
            },10000)
        })

        let dowload = document.querySelectorAll('.dowload');
        console.log(dowload);
        dowload.forEach(item=>{
            item.addEventListener('click',(event)=>{
                event.preventDefault();
                    let target = event && event.target || event.srcElement;
                    window.location.href="./php/unloadFile.php?file="+target.innerHTML;
            })
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