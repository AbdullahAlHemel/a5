function getTotalProductPrice(event){
    const proPfield = event.querySelector('.price')
    const proString = proPfield.innerText
    const pPrice = parseFloat(proString)
    const totalproPfield = document.getElementById('total-product-price')
    const totalproString = totalproPfield.innerText
    const  total = parseFloat(totalproString)
    const newTPrice = (pPrice +  total).toFixed(2)
    totalproPfield.innerText = newTPrice
    const subPrice = document.getElementById('total-price')
    const subString = subPrice.innerText
    const subTPrice = parseFloat(subString)
    const newP = (pPrice + subTPrice).toFixed(2)
    subPrice.innerText = newP
    const pName = event.querySelector('.product-tittle').innerText
    const li = document.createElement('li')
    li.innerText = pName
    const proT = document.getElementById('product-tittle-area')
    proT.appendChild(li)
    if(newTPrice> 0){
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute('disabled') }
    const couponB = document.getElementById('coupon-btn')
    if(newTPrice >= 200){
        couponB.removeAttribute('disabled')
    }
}
document.getElementById('coupon-btn').addEventListener('click', function(){
    const promoCode = document.getElementById('coupon-input').value
    if(promoCode == 'SELL200'){
        const dField = document.getElementById('total-discount')
        const totalproString = document.getElementById('total-product-price').innerText
        const T = parseFloat(totalproString)
        const tDPrice =  T - ( T * (20 / 100))
        const Discount = T - tDPrice
        const totalNDis = Discount.toFixed(2)
        dField.innerText = totalNDis
        const totalDiscount = tDPrice.toFixed(2)
        totalPriceField = document.getElementById('total-price').innerText = totalDiscount
    }
})