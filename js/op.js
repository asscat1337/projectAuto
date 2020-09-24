let tableClick = document.querySelectorAll('.table__result tr');
tableClick.forEach(item=>item.addEventListener('click',()=>{
    item.className = 'active';
    console.log(item.className);
    localStorage.setItem('color',item.className);
}))
window.addEventListener('DOMContentLoaded',()=>{
    tableClick.className = localStorage.getItem('color');
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