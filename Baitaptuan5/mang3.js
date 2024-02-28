var man = [
    {
        id: 1,
        name: "The cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "250,000",
        image: "img/do nam.jpg"


    },
    {
        id: 2,
        name: "Quần baggy đen sang trong",
        code: "TC1025011BA",
        price: "390,000",
        image: "img/do nam.jpg"


    },
    {
        id: 3,
        name: "The cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "300,000",
        image: "img/do nam.jpg"

    },
    {
        id: 4,
        name: "The cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "300,000",
        image: "img/do nam.jpg"

    },
];
var woment = [
    {
        id: 1,
        name: "Váy",
        code: "TC1025011BA",
        price: "250,000",
        image: "img/do nu.jpg"


    },
    {
        id: 2,
        name: "áo thun",
        code: "TC1025011BA",
        price: "390,000",
        image: "img/do nu.jpg"


    },
    {
        id: 3,
        name: "áo khoác",
        code: "TC1025011BA",
        price: "300,000",
        image: "img/do nu.jpg"

    },
    {
        id: 4,
        name: "áo thun",
        code: "TC1025011BA",
        price: "300,000",
        image: "img/do nu.jpg"

    },

];
function listProducts(){
    for (let i = 0; i<man.length-1;i++){
        var demo = '<div class = "col-3">';
        demo += '<div class = "card" sytle = "widhth: 18rem;">';
        demo += '<img src= "'+man[i].image+'" class= "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class= "card-title">'+man[i].name+'</h5>';
        demo += '<p class= "card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class= "btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;

    }
    for (let i = 0; i<woment.length-1;i++){
        var demo = '<div class = "col-3">';
        demo += '<div class = "card" sytle = "widhth: 18rem;">';
        demo += '<img src= "'+woment[i].image+'" class= "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class= "card-title">'+woment[i].name+'</h5>';
        demo += '<p class= "card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class= "btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML+= demo;

    }

}