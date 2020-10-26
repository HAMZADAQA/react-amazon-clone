import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import  "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id, title, image, price, rating}) {

    const [{ basket },dispatch ] = useStateValue();
    console.log(id, title, image, price, rating);

    const RemoveFromBasket = () => {
 
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                 id: id
                // item: {
                //     id: id, 
                //     title: title,
                //     image: image,
                //     price: price,
                //     rating: rating
                // }
            })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p className="icon__color"><StarRateIcon/></p>
                    ))
                }
               </div>
               <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
