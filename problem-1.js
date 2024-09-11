function calculateTax(income, expenses) {
    if(income<0 || expenses<0){
        return "Invalid Input";
    }
    else if(typeof income !== 'number' || typeof expenses !== 'number'){
        return "Invalid Input";
    }
    else if(expenses> income){
        return "Invalid Input";
    }
    else{
        const save =income - expenses;
        const tax = save*(20/100);
        return tax;
    }
}
