
renderText =(text)=>{
    let div = document.createElement('div');
    pulmoContent.insertAdjacentElement('beforebegin',div);
    div.textContent = text;
}

let  divFio,
     divTel,
     divDate,
     status;    
window.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{
        fetch(url='./php/priemBack.php',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
        })
        .then(response=>{
            console.log(response);
            if(response.status === 200){
                return response.text();
            }
        })
        .then(data=>{
            if(data=="0"){
                let controller = new AbortController();
                let signal  = controller.signal;
                signal.addEventListener('abort',()=>console.log("abort"));
                controller.abort();
                console.log(signal.aborted);
            }else{
                console.log(data);
                let priemContent = document.querySelector('.priem__content');
                priemContent.insertAdjacentHTML("beforebegin",data);
                let btnUpload = document.querySelector('.btnUpload');
    
    
                btnUpload.addEventListener('click',(event)=>{
                    event.preventDefault();
            
                    let target = event && event.target || event.srcElement;
                    window.location.href="./php/unloadFile.php?file="+target.innerHTML;
            })
            }
})
    },10000)
 
})
