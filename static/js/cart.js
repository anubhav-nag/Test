function add_to_cart(pid,pname,price)
{
    let cart = localStorage.getItem("cart");  //empty cart

    if(cart == null)
    {
        let products = [];
        let product = { productId:pid, productName:pname , productQuantity:1 , productPrice:price }
        products.push(product);
        localStorage.setItem("cart",JSON.stringify(products));
        console.log("Product is added for the first time");
    }
    else
    {
        //cart is already present and not empty
        let pcart = JSON.parse(cart);
        
        let oldProduct = pcart.find((item) => item.productId == pid);
        if(oldProduct)
        {
            //if item is already present
            oldProduct.productQuantity = oldProduct.productQuantity + 1;
            pcart.map((item) =>{
                if (item.productId == oldProduct.productId)
                {
                    item.productQuantity = oldProduct.productQuantity;    
                }
            })
            localStorage.setItem("cart",JSON.stringify(pcart));
            console.log("Product quantity is increased");
        }
        else
        {
            //if item is not present
            let product = { productId:pid, productName:pname , productQuantity:1 , productPrice:price }
            pcart.push(product);
            localStorage.setItem("cart",JSON.stringify(pcart));
            console.log("Product is added");
        }
    }
}

function update_cart()
{
    let cartString = localStorage.getItem("cart");
    let cart = JSON.parse(cartString);

    if(cart == null || cart.length ==0)
    {
        console.log("Cart is Empty!!");
        $(".cart-items").html("[0]");
        $(".cart-body").html("<h3>Cart does not have any items </h3>");
        $(".checkout-btn").addClass('disabled');
    }
    else
    {
        $(".cart-items").html(`(${cart.length})`);
        let table = `
            <table class='table'>
            <thead class='thead-light'>
                <tr>
                    <th>Item Name </th>
                    <th>Price </th>
                    <th>Quantity </th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
        `;
        let totalPrice =0;

        cart.map((item) =>{
            table +=`
                <tr>
                    <td> ${item.productName} </td>
                    <td> ${item.productPrice} </td>
                    <td> ${item.productQuantity} </td>
                    <td> ${item.productQuantity * item.productPrice} </td>
                    <td> <button class='btn btn-danger btn-sm'> Remove </button></td>    
                </tr>
            `

            totalPrice+=item.productPrice*item.productQuantity;
        })


        table = table + `
            <tr><td colspan ='5' class='text-right font-weight-bold'> Total Price : ${totalPrice} </td></tr>
        </table>`;
        $(".cart-body").html(table);
    }
}

$(document).ready(function (){
    update_cart
})