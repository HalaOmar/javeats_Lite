
var paypal = require('paypal-rest-sdk');
const _ = require('lodash');

   
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAY_PAL_ID,
    'client_secret': process.env.PAY_PAL_SECRET_KEY
  });

exports.createPaymentObject =   ( req , res ,next ) => {

   let { items_line , total } = _.pick(req['payment']['cartDetails'] ,
                                                        ['items_line','total'])
    
    const payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "cancel_url": `http://localhost:3000/api/v1/orders/customer/failedPayment`,
            "return_url": `http://localhost:3000/api/v1/orders/customer/successPayment`
        },
        "transactions": [{
            "item_list": {
                "items": items_line
            },
            "amount": {
                "currency": "EUR",
                "total": `${ total}`,
            },
            "description": "Restaurant" ,
            
        }]
        ,
    };

    req.paymentData = {
        "paymentObject":payment_json 
    }

    next()
    
}
exports.payByPAYPAL = ( req , res )=>{   
    let { orders } = _.pick(req['payment']['OrdersIds'])

    paypal.payment.create(req.paymentData["paymentObject"], function (error, payment) {
      if (error) {
          throw error;
      } else {
          for(let i = 0;i < payment.links.length;i++){
            if(payment.links[i].rel === 'approval_url'){
                console.log(payment.links[i].href)
                res.cookie('ordersIds', `${orders}`, {expire: 360000 + Date.now()}); 
              res.redirect(payment.links[i].href);
            }
          }
      }
    });
}

exports.successPay = ( req , res ) =>{
    console.log('cookies : ' , req.cookies)
    const payerId = req.query.PayerID ;
    const paymentId = req.query.paymentId

    const execute_payment_json ={
        "payer_id" : payerId , 
        "transactions" :[
            {
                "amount": {
                    "currency": "EUR",
                    "total": 1,
                },
            }
        ]
    }

    paypal.payment.execute(paymentId , execute_payment_json , (error , payment)=>{

        if(error){
            console.log(error.response)
            throw error
        }else{
            console.log('payment :>> ', payment.transactions[0].item_list);
            res.json({
                payment
            })
        }

    })
}

exports.getOrderDetails = ( req , res ) =>{

    

}

function queryString(orders){
    let queryString 
    orders.map(order => queryString += ('order=' + order).concat('&'))
    return queryString
}

    