function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }
    let finalScore= 0;
    if(obj.isFFamily === true){
        finalScore = obj.testScore+ obj.schoolGrade+ 20;
    }
    else{
        finalScore = obj.testScore+ obj.schoolGrade; 
    }
    if(finalScore>=80){
        return true;
    }
    else{
        return false;
    }
}






