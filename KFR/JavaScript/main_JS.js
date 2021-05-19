//Menu
let sub_menu_object_seperate = document.getElementById("sub_menu_seperate");
sub_menu_object_seperate.onclick = function () {
    let imObject_separate = document.getElementById("image");
    imObject_separate.src = "images/Separate.jpg";
    imObject_separate.scrollIntoView();
};


let sub_menu_object_combination = document.getElementById("sub_menu_combination");
sub_menu_object_combination.onclick = function () {
    let imObject_combination = document.getElementById("image");
    imObject_combination.src = "images/Combination.jpg";
    imObject_combination.scrollIntoView();
};


let sub_menu_object_dinner = document.getElementById("sub_menu_dinner");
sub_menu_object_dinner.onclick = function () {
    let imObject_dinner = document.getElementById("image");
    imObject_dinner.src = "images/Dinner.jpg";
    imObject_dinner.scrollIntoView();

};


// Mune Join Us
let sub_menu_object_front_server = document.getElementById("sub_menu_front_server");
sub_menu_object_front_server.onclick = function () {
    var front_server_duty1= "_________1 Get calls from costumers and write orders"
    var front_server_duty2= "_________2 When costumers arrive, the front server receives money and delivery food to them"
    var front_server_duty3= "_________3 If costumers come earlier than time in order, the front server go back to kitchen and mark the order with a triangle"
    var front_server_duty4= "_________4 Clean the floor before the end of the work"

    document.getElementById("h1").innerHTML = front_server_duty1;
    document.getElementById("h2").innerHTML = front_server_duty2;
    document.getElementById("h3").innerHTML = front_server_duty3;
    document.getElementById("h4").innerHTML = front_server_duty4;


};
