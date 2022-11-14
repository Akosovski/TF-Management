function downloadimage() {
    var container = document.getElementById("html-content-holder");
    container.style.width = '860px';
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "new_invoice.jpg";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
        
    });
    container.style.width = 'auto';
}