let screen=document.querySelector('.screen')
let buttons=document.querySelectorAll('.btn-grey')
let equal=document.querySelector('.btn-equal')
let cancel=document.querySelector('.btn-cancel')
let operation=document.querySelectorAll('.btn-yellow')


buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let num= e.target.dataset.val;
        screen.value+=num; 
    })
})

cancel.addEventListener('click', function(){
    screen.value=''
})
operation.forEach(function(button){
    button.addEventListener('click', function(e){
        let operation= e.target.dataset.val;
        screen.value+=operation; 
    })
})

equal.addEventListener('click', function(){
    if(screen.value===''){
        screen.value=''
    }else{
        let answer=eval(screen.value)
        screen.value=answer
    }

})