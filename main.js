canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//rectangle//
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(175,143,430,200);
ctx.stroke();
//first circle//
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(280,210,40,0,2*Math.PI);
ctx.stroke();
//second circle//
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc(378,210,40,0,2*Math.PI);
ctx.stroke();
//third circle//
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(476,210,40,0,2*Math.PI);
ctx.stroke();
//fourth circle//
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.arc(326,250,40,0,2*Math.PI);
ctx.stroke();
//fifth circle//
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc(430,250,40,0,2*Math.PI);
ctx.stroke();