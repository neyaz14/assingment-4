function sendNotification(email) {
    let ifValaid = email.indexOf("@");
    if(ifValaid < 0){
        return "Invalid Email";
    }
    let newArray = email.split("@");
    let userName= newArray[0];
    let domainName = newArray[1];
    let notification = userName +" sent you an email from "+ domainName;

    return notification;

    
}





