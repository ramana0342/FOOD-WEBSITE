import { useSelector,useDispatch } from "react-redux"
import { FoodremoveFromCart } from "./redux";

import { IncreaseQty } from "./redux";
import {DecreaseQty} from "./redux"
import "./App.css"





const FoodCart=()=>{

   let dispatch=useDispatch();

    let cartItems= useSelector((state)=>{
      //console.log(state)
        return state.FoodItems
    })
    //console.log(cartItems)

    let SubTotal=cartItems.reduce((acc,item,i)=>{
        return acc+item.ItemPrice*item.quantity
},0)











    if(cartItems){
        return(
          <>
        <div className="container">
         
        {cartItems.map((item,index)=>{
            
            return(
              <div className="card MainCard" >
                 <div className="row g-0">
                  <div className="col-md-4">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.ItemImage}`} className="img-fluid rounded-start CartImg" alt="..."/>
                 </div>
                  <div className="col-md-6">
                 <div className="card-body">
                <h5 className="card-title">{item.ItemName}</h5>
                  <p className="card-text price"><b>{item.ItemPrice}</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg></p>
                 <button onClick={()=>{ 
                  dispatch(IncreaseQty(item.ItemId))
                  }}>+</button>Qty-{item.quantity}<button onClick={()=>{ 
                    dispatch(DecreaseQty(item.ItemId))}} style={{margin:"20px  0px"}} >-</button> <br></br>  
                 
                 
                 
                 <button onClick={()=>{
                  dispatch(FoodremoveFromCart(index))
                 }} >Remove From Cart</button>
                </div>
              </div>
              <div className="col-md-2" style={{textAlign:"end", marginTop:"10px"}}>
                <b>item Total={item.ItemPrice*item.quantity}</b>
                </div>
           </div>
          </div>
            )

        })}

  { SubTotal != 0 ? <div className="row" style={{textAlign:"end",marginRight:"10px",marginTop:"10px"}}><h2>Sub Total={SubTotal}</h2> </div> 
  :  <div className="row" style={{display:"flex",textAlign:"center",marginTop:"250px"}}><h2>Cart Is Empty</h2> </div>}
        </div>
        
        </>
        
          

      )}
}



export default FoodCart;