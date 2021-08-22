//Declaration
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const subTotal = document.getElementById('sub-total');
const totalPrice = document.getElementById('total-cost');

//update subtotal cost
function updatesubTotal() {
    let newsubTotal = subTotal;
    let updatePrice = (parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText));
    newsubTotal.innerText = updatePrice;
    totalPrice.innerText = updatePrice;
}

//button click

function buttonClick(btnId, costId, price) {
    document.getElementById(btnId).addEventListener('click', function () {
        let updatePrice = document.getElementById(costId + '-cost');
        updatePrice.innerText = price;
        updatesubTotal();

    })
}

//20% discount offer
function discount() {
    const cupponInput = document.getElementById('cupon-input');
    const discount = parseFloat(subTotal.innerHTML) / 100 * 20;
        if (cupponInput.value.toLowerCase() == 'stevekaku') {
            const finalPrice = parseFloat(subTotal.innerText) - discount;
            totalPrice.innerText = finalPrice;
            cupponInput.value = '';
        }
        else {
                const alertinfo = document.getElementById('cuppon-btn');
                alertinfo=alert('Please Enter right password');
                cupponInput.value = '';
        }
       
}

//button clcik

buttonClick('8gb-memory', 'memory', 0);
buttonClick('16gb-memory', 'memory', 180);
buttonClick('8gb-memory', 'memory', 0);
buttonClick('256gb-ssd', 'storage', 0);
buttonClick('512gb-ssd', 'storage', 100);
buttonClick('1tb-ssd', 'storage', 180);
buttonClick('free-delivery', 'delivery', 0);
buttonClick('fast-delivery', 'delivery', 20);


//promo button

document.getElementById('cuppon-btn').addEventListener('click', function () {
    discount();
})
