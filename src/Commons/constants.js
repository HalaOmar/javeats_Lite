exports.PAYMENT = {
    "INTENT": "sale",
    "PAYMENT_METHOD": "paypal",
    "CANCEL_URL": `http://localhost:3000/api/v1/orders/customer/failedPayment`,
    "RETURN_URL": `http://localhost:3000/api/v1/orders/customer/successPayment`,
    "CURRENCY": "EUR",
    "DESCRIPTION": "Restaurant" ,
                   
}