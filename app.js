var grand_total = 0;
const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

function clear() {
    document.getElementById("nama-produk").reset();
    document.getElementById("jumlah-produk").reset();
    document.getElementById("harga-produk").reset();
}

function tambahDetails() {
    const theDetails = document.getElementById("list-details");
    const moon = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    var invoice_type = "";
    var invoice_rand = Math.floor(Math.random() * 100) + 1;

    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    const d = new Date(date);
    var address = document.getElementById("address").value;
    var payment = document.getElementById("payment").value; 

    var det_name = document.createElement("h6");
    det_name.innerHTML = '<strong>Pembeli : </strong>' + name;
    var det_date = document.createElement("h6");
    det_date.innerHTML = '<strong>Tanggal Pembelian : </strong>' + d.getDate() + " " + moon[d.getMonth()] + " " + d.getFullYear();
    var det_payment = document.createElement("h6");
    det_payment.innerHTML = '<strong>Metode Pembayaran : </strong>' + payment;
    var det_address = document.createElement("h6");
    det_address.innerHTML = '<strong>Alamat Pengiriman : </strong>' + address;
    
    if(payment == 'Transfer'){
        invoice_type = "TRF";
    }else if(payment == 'Cash'){
        invoice_type = "CSH";
    }else if(payment == 'Kredit'){
        invoice_type = "KRD";
    }

    var day = d.getDate();
    var month = d.getMonth() + 1;
    var fullyear = d.getFullYear();

    document.getElementById('invoicer').innerHTML = 'INV/' + day + month + fullyear + '/' + invoice_rand + '/' + invoice_type;

    theDetails.appendChild(det_name);
    theDetails.appendChild(det_date);
    theDetails.appendChild(det_payment);
    theDetails.appendChild(det_address);
}

function tambahProduk() {
    let listProduct = document.getElementById("list-produk");
    let theTotal = document.getElementById("grand-total");

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

    inner_total = product_amount*product_price;
    grand_total += inner_total;
    theBody.appendChild(theRow);
    theRow.appendChild(pro_name);
    theRow.appendChild(pro_amount);
    theRow.appendChild(pro_price);
    theRow.appendChild(pro_total);
    listProduct.appendChild(theBody);
    theTotal.innerHTML = "<strong>Total Tagihan : </strong>" + formatter.format(grand_total);
}

function tambahDiskon() {
    let theTotal = document.getElementById("grand-total");
    var diskon = document.getElementById("jumlah-diskon").value;
    if(diskon > 0){
        theTotal.innerHTML = "<strong>Sebelum Diskon : </strong><s>" + formatter.format(grand_total) + "</s> <br><strong>Diskon Sebesar : </strong><u>" + formatter.format(diskon) + "</u><br><br><strong>Total Tagihan : </strong>" + formatter.format(grand_total - diskon);
    }
}