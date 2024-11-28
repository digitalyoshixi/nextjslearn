export default function ProductDetails({ params } : {
    params : { productid : string }
}

){
    return(
        <div>
            Some details about product {params.productid}
        </div>
    )
}