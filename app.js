const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

function tambahDetails() {
    var name = document.getElementById("name").value;
    console.log(name);

    var date = document.getElementById("date").value;
    console.log(date);

    var address = document.getElementById("address").value;
    console.log(address);

    var payment = document.getElementById("payment").value;
    console.log(payment);
}

function tambahProduk() {
    var product_name = document.getElementById("nama-produk").value;
    var product_amount = document.getElementById("jumlah-produk").value;
    var product_price = document.getElementById("harga-produk").value;

    var theBody = document.createElement("TBODY");
    var theRow = document.createElement("TR");
    var pro_name = document.createElement("TD");
    var pro_amount = document.createElement("TD");
    var pro_price = document.createElement("TD");
    var pro_total = document.createElement("TD");

    pro_name.innerHTML = product_name;
    pro_amount.innerHTML = product_amount;
    pro_price.innerHTML = formatter.format(product_price);
    pro_total.innerHTML = formatter.format(product_amount*product_price);

    theBody.appendChild(theRow);
    theRow.appendChild(pro_name);
    theRow.appendChild(pro_amount);
    theRow.appendChild(pro_price);
    theRow.appendChild(pro_total);
    document.getElementById("list-produk").appendChild(theBody);
}

function clear() {
    document.getElementById("nama-produk").value = NULL;
    document.getElementById("jumlah-produk").value = NULL;
    document.getElementById("harga-produk").value = NULL;
}