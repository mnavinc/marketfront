var options = {
    "key": "rzp_test_PYEQ2bi2cL6DYp", // Enter the Key ID generated from the Dashboard
    "amount": "totalPrice * 100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Etikoppa",
    "description": "Test Transaction",
    "image": "/imgs/logo-pay.jpg",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "ncreato",
        "email": "admin@marketfront.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Hyderabad, India"
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    console.log('clicked');
    rzp1.open();
    e.preventDefault();
}

function paymentProcess() {
    console.log('pay')
}