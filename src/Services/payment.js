
var paypal = require('paypal-rest-sdk');
console.log(process.env.PAY_PAL_ID)
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAY_PAL_ID,
    'client_secret': process.env.PAY_PAL_SECRET_KEY
  });


exports.createPaymentObject = ( payPal_Credentials , {items_Lines , total} ) => {
    
    const payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "cancel_url": "http://localhost:3000/api/v1/orders/customer/failedPayment",
            "return_url": "http://localhost:3000/api/v1/orders/customer/successPayment"
        },
        "transactions": [{
            "item_list": {
                "items": items_Lines
            },
            "amount": {
                "currency": "EUR",
                "total": `100`
            },
            "description": "Restaurant"
        }]
    };

    return payment_json
    
}
exports.payByPAYPAL = ( req , res )=>{   
    
    paypal.payment.create(req.paymentData["paymentObject"], function (error, payment) {
      if (error) {
          throw error;
      } else {
          for(let i = 0;i < payment.links.length;i++){
            if(payment.links[i].rel === 'approval_url'){
                console.log(payment.links[i].href)
              res.redirect(payment.links[i].href);
            }
          }
      }
    });
}

    