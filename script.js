document.querySelector("#count-btn").addEventListener("click",function(){
    let inputValue=document.querySelector("#input-text").value
    let count=0
    let vowels=['a','e','i','o','u']
    // for(let i=0;i<inputValue.length;i++){
    //     if(inputValue[i] === 'a' || inputValue[i] ==='e' || inputValue[i] ==='i' || inputValue[i] ==='o' || inputValue[i] ==='u'){
    //         count ++
    //     }

    
    // }
    

    for(let key of inputValue.toLowerCase()){
        if(vowels.includes(key)){
            count ++
            
        }
    }

    document.querySelector("#vowel-count").innerText=count

})
