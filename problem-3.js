function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    const num = ['0','1','2','3','4','5','6','7','8','9'];
    for(let i=0; i<num.length; i++){
        if(name.includes(num[i])== true){
            return true;
        }
    }
    return false;
   
   
    
}

