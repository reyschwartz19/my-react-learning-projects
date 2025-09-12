import React, {useState} from "react"

const MyComponent = () => {
    
 const [name, setName] = useState("Guest");
 const [quantity, setQuantity] = useState(1);
 const [comment, setComment] = useState("");
 const [payment, setPayment] = useState("");
 const [shipping, setShipping] = useState("delivery");

 const handleNameChange = (e) => setName(e.target.value);

const handleQuantitiyChange = (e) =>  setQuantity(e.target.value);
 
const handleCommentChange = (e) => setComment(e.target.value); 

const handlePaymentChnage = (e) => setPayment(e.target.value);

const handleShippingChange = (e) => setShipping(e.target.value);

     return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantitiyChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChnage}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="master card">Master Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="pick up" checked ={shipping === "pick up"} onChange={handleShippingChange}/>
                Pick up
            </label>
             <label>
                <input type="radio" value="delivery" checked ={shipping === "delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>shipping: {shipping}</p>
        </div>  
     );
}

export default MyComponent