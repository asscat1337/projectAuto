let pulmoContent = document.querySelector('.pulmo__content');

let divFio = document.createElement('div');
let divTel = document.createElement('div');
let divDate = document.createElement('div');

pulmoContent.insertAdjacentElement('beforebegin',divFio)
pulmoContent.insertAdjacentElement('beforebegin',divTel)
pulmoContent.insertAdjacentElement('beforebegin',divDate)




renderText =(text)=>{
    let div = document.createElement('div');
    pulmoContent.insertAdjacentElement('beforebegin',div);
    div.textContent = text;
}


window.addEventListener('DOMContentLoaded',()=>{
    fetch(url='/php/pulmoBack.php',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        }
    })
    .then((response)=>Promise.all([Promise.resolve(response.json()),response.status]))
    .then(data=>{
        console.log(data[1]);
        if(data[0].status==='1'){
            renderText('Нет пациентов')
        }

        else if(data[0].status==='2' || data[0].status==='3'){

            let link = document.createElement('a');

            let btnDowload = document.createElement('button');

            pulmoContent.insertAdjacentElement('beforebegin',btnDowload);
            btnDowload.insertAdjacentElement('beforeend',link);
            link.textContent = 'Загрузить файл'

            link.href = data[0].path;
            divTel.textContent = data[0].telephone;
            divFio.textContent = data[0].fio;
            divDate.textContent = data[0].date;


            btnDowload.addEventListener('click',(event)=>{
                event.preventDefault();
                let target = event && event.target || event.srcElement;
            
                window.location.href="/php/unloadFile.php?file="+target.innerHTML;
            })
            
        }
   })
   .catch(err=>console.error(err))
})