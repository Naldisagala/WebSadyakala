var removeCartItemhapus = document.getElementsByClassName('hapus')
//console.log(removeCartItemhapus)
for (var i = 0; i < removeCartItemhapus.length; i++ ){
    var button = removeCartItemhapus[i]
    button.addEventListener('click', function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('headtoko')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('harga')[0]
        var quantityElement = cartRow.getElementsByClassName('input-number')[0]
        var price = parseFloat(priceElement.innerText.replace('Rp.', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(price * quantity)
    }
    // document.getElementById('product_total_amt')[0].innerText = "Rp" + total
}


// MENAMBAH DAN MENGURANGI BARANG
var product_total_amt = document.getElementById('product_total_amt');
      const decreaseNumber = (indec,itemprice) => {
        var itemval = document.getElementById(indec);
        var itemprice = document.getElementById(itemprice);
        console.log(itemprice.innerHTML);
        if (itemval.value <= 1){
          itemval.value = 1;
        alert('Minimum Pembelian 1 Pieces Om..');
        }else{
          itemval.value = parseInt(itemval.value) - 1;
          itemprice.innerHTML = parseInt(itemprice.innerHTML) - 459000;
          product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 459000;
        }
      }
      const increaseNumber = (indec,itemprice) => {
        var itemval = document.getElementById(indec);
        var itemprice = document.getElementById(itemprice);
        if (itemval.value >= 99){
          itemval.value = 99;
        alert('Punten Om, Stock Cuma Segitu...');
        }else{
          itemval.value = parseInt(itemval.value) + 1;
          itemprice.innerHTML = parseInt(itemprice.innerHTML) + 459000;
          product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 459000;
        }
      }
