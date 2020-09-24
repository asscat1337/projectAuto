
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