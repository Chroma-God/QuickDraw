function setup(){
    canvas = createCanvas(280, 280);
    canvas. center();
    background("grey")
}


function clearCanvas(){
    background("grey")
}
function updateCanvas(){
    background( "grey")
 random_number=Math.floor((Math.random()*quick_draw_data_set.length)+1);
 sketch=quick_draw_data_set[random_number]
}
