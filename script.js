$(document).ready(function() {
    var element = $("#html-content-holder");
    var getCanvas;
    element.width('auto');
    $("#btn-Preview-Image").on('click', function() {
        element.width('860px');
        element.height('500px');
        html2canvas(element, {
            onrendered: function(canvas) {
                getCanvas = canvas;
                var imgageData = getCanvas.toDataURL("image/png");
                var a = document.createElement("a");
                a.href = imgageData;
                a.download = "invoice-download.png";
                a.click();
                element.width('auto');
                element.height('auto');
            }
        });
    });
});