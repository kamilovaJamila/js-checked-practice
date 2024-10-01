   let checkSub = document.querySelector('#checkSub');
   let visa = document.querySelector('#visa');
   let payPal = document.querySelector('#payPal');
   let masterCard = document.querySelector('#masterCard');
   let submit = document.querySelector('#btn');
   let payment = document.querySelector('#payment');
   let isSubscribed = document.querySelector('#isSubscribed');

   submit.addEventListener('click', function(){
    // subscribed
     if(checkSub.checked){
        isSubscribed.textContent = `You are subscribed`
     }
     else{
        isSubscribed.textContent = `You are Not subcribed`
     }

     // cards 

     if(visa.checked){
        payment.textContent = `You are paying with Visa`
     }
     else if(payPal.checked){
        payment.textContent = `You are paying with PayPal`
     }
     else if(masterCard.checked){
        payment.textContent = `You are paying sith MasterCard`
     }
     else{
        payment.textContent = 'You must select a payment type'
     }
   })