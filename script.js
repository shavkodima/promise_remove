
window.onload = function(){
    setTimeout(function(){
        let div = document.createElement('div');

        div.classList.add('load');

        document.body.appendChild(div);
    },5000);


    let p = new Promise((resolve, reject)=>{
       let i =  setInterval(function(){
            if(document.querySelector('.load')){
                clearInterval(i);
                console.log("нашло")
                resolve(document.querySelector('.load'));
            }else{
                console.log("еще не найдено")
            }
        },1000)
    }).then((data)=>{
        setTimeout(function(){
            data.remove();
        },5000)
    }).then(()=>{
        let i = setInterval(function(){
            if(!document.querySelector('.load')){
                console.log('уже не существует');
                clearInterval(i);
                btnClick()
            }
        },1000)
    })
}


let btnClick =()=>{
    alert("получили элементы")
}