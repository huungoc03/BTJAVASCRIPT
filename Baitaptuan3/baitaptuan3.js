function Add() {
    let pname = frm.product.value;
    let img = frm.img.value;
    let price = frm.price.value;
    let image = img.slice(11);
    let html = `
        <div class="card">
        <img class="card-img-top" src="./images/${image}" alt="Card image cap" style="height: 350px;">
        <div class="card-body">
            <div>
            <h5 class="card-title">${pname}</h5>
            <p class="card-text" id="price">${price}</p>
            <a href="#" class="btn btn-success">Đặt mua</a>
            </div>
        </div>
        </div>
        
        `;
        let app = document.querySelector('.row');
        app.innerHTML += html;
        console.log(img);
    }
   
