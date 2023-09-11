
var paypal = require('paypal-rest-sdk');
const _ = require('lodash');
const {PAYMENT} = require('../Commons/constants')
const Exceptions = require('../Commons/Error/Exceptions');

   
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAY_PAL_ID,
    'client_secret': process.env.PAY_PAL_SECRET_KEY
  });

exports.createPaymentObject =   ( req , res ,next ) => {

   const cart_details =  req['payment']['cartDetails']
   let { items_line , total } = _.pick( cart_details, ['items_line','total'])

    const payment_json = getPaymentObject(items_line , total)

    req.paymentData = {
        "paymentObject":payment_json 
    }

    next()
    
}
exports.payByPAYPAL = ( req , res )=>{  

    const cart_details =  req['payment']['cartDetails']
    const { items_line } = _.pick( cart_details, ['items_line']) 

    const orders = req['payment']['OrdersIds'] 
    const invoice = {
        "orders" : orders ,
        "items_line" : items_line
    }
 
        // if(!orders){
        //     throw new Exceptions.NotFoundException('SYSTEM ERROR')
        // }

    paypal.payment.create(req.paymentData["paymentObject"], function (error, payment) {
      if (error) {
          throw error;
      } else {
          for(let i = 0;i < payment.links.length;i++){
            if(payment.links[i].rel === 'approval_url'){
                console.log(payment.links[i].href)
                res.cookie('restaurant_id', `${req.body.restaurant_id}`, {expire: 360000 + Date.now()}); 
              res.redirect(payment.links[i].href);
            }
          }
      }
    });
}

exports.successPay = ( req , res , next) =>{
    
    const payerId = req.query.PayerID ;
    const paymentId = req.query.paymentId
    

    const execute_payment_json ={
        "payer_id" : payerId , 
        "transactions" :[
            {
                "amount": {
                    "currency": "EUR",
                    "total": 1.5,
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
            // res.json({
            //     payment
            // })
            next()
        }

    })
}

 function getPaymentObject(items_line , total){

    items_line = items_line.map( item => {
        let { item_id, ...itemRest } = item
        return itemRest
     }) 
    
     console.log("ITEMS_LINE \n",items_line)

    return {
        "intent": PAYMENT.INTENT,
        "payer": {
            "payment_method": PAYMENT.PAYMENT_METHOD
        },
        "redirect_urls": {
            "cancel_url": PAYMENT.CANCEL_URL,
            "return_url": PAYMENT.RETURN_URL
        },
        "transactions": [{
            "item_list": {
                "items": items_line
            },
            "amount": {
                "currency": PAYMENT.CURRENCY,
                "total": `${ total}`,
            },
            "description": PAYMENT.DESCRIPTION ,
            
        }]
        ,
    };
 }