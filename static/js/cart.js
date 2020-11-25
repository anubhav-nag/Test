function add_to_cart(pid,pname,price)
{
    let cart = localStorage.getItem("cart");  //empty cart

    if(cart == null)
    {
        let products = [];
        let product = { productId:pid, productName:pname , productQuantity:1 , productPrice:price }
        products.push(product);
        localStorage.setItem("cart",JSON.stringify(products));
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
        }
        else
        {
            //if item is not present
            let product = { productId:pid, productName:pname , productQuantity:1 , productPrice:price }
            pcart.push(product);
            localStorage.setItem("cart",JSON.stringify(pcart));
        }
    }
}