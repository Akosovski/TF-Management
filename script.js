$(document).ready(function() {
    var element = $("#html-content-holder");
    var getCanvas;

    $("#btn-Preview-Image").on('click', function() {
        html2canvas(element, {
            onrendered: function(canvas) {
                getCanvas = canvas;
                var imgageData = getCanvas.toDataURL("image/png");
                var a = document.createElement("a");
                a.href = imgageData;
                a.download = "invoice-baru.png";
                a.click();
            }
        });
    });
});