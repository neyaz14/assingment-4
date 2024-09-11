function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) !== true || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let len = waitingTimes.length;
    let sum =0;
    for(let time of waitingTimes){
        sum= sum+ time;
    }
    let avgTime = Math.round(sum/len);
    let waitingNumber = serialNumber- len-1;
    let wtime = waitingNumber*avgTime;
    return wtime;
}
