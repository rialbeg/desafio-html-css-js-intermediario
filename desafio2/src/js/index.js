const accordion_items = document.querySelectorAll('[id^=accordion] ~ label');

for (let i = 0; i  < accordion_items.length; i++) {
    accordion_items[i].addEventListener('click',function(){
        for (let i = 0; i  < accordion_items.length; i++){
            if(this.getAttribute('for').slice(-1) == i+1)
            {
                accordion_items[i].children[0].classList.add('active-arrow');
            }else
            {
                accordion_items[i].children[0].classList.remove('active-arrow');
            }
        }
    });
}