var customerName = 'bob'

function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer;
}

function overwriteBestCustomer(){
    if (bestCustomer === 'not bob') {
        bestCustomer = 'maybe bob'
    }
}

const leastFavoriteCustomer = 'Daven'

function changeLeastFavoriteCustomer(){
    if (leastFavoriteCustomer === 'Daven') {
        leastFavoriteCustomer = 'maybe Daven'
    }
}