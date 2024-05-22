import axios from "axios";
import "./App.css"
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FoodaddToCart } from "./redux";


const RestaurantsItemsSpace = ()=>{


let dispatch=useDispatch()


const [restaruntItems,setrestaruntItems] = useState([])



        let {id} =useParams()       //this hooks used to  read value "id" in URL 


       useEffect(()=>{
                        axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3684658&lng=78.53159409999999&restaurantId=${id}`)
                        .then((res)=>{
                            setrestaruntItems(res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.slice(1))
                        })
    
    
                    },[])

    return(

        <> 
           
            { restaruntItems.map((item,index)=>{
            
              if(item.card?.card?.itemCards &&  item.card?.card?.title){
            return(
                <>
                <div className="container">
                <h3 style={{margin :"20px 0px"}}>{item.card?.card?.title} - {item.card?.card?.itemCards?.length}</h3>
            <div class="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-lg-5 row-cols-xl-6 g-4">
            {item.card?.card?.itemCards.map((foodItem,i)=>{
               // console.log(foodItem)
                //foodItem.card?.info?.ratings?.aggregatedRating?.rating
                return(<>

<div class="col">
    <div class="card h-100">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodItem.card?.info?.imageId}`} class="card-img-top items-img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{foodItem.card?.info?.name}</h5>
        {foodItem.card?.info?.isVeg ?<> <span className="isVeg"><div className="vegODIV"><div className="vegIDIV"></div></div></span>  <span className="isVeg" style={{color:"green"}}>Veg</span> </> : <><span className="isNONVeg"><div className="NvegODIV"><div className="NvegIDIV"></div></div></span>  <span className="isNONVeg" style={{color:"red"}}>Non-Veg</span> </>}
        <p className="card-text" style={{margin:"4px 0px"}}><span className="Rating" ><span className="Food-circle-star-logo"><span className="Food-star-logo"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></span></span>{foodItem.card.info.ratings.aggregatedRating.rating ? foodItem.card?.info?.ratings?.aggregatedRating?.rating : "--"} </span> <span>{foodItem.card?.info?.ratings?.aggregatedRating?.ratingCount}</span></p>
        { foodItem.card?.info?.price  ? <p className="card-text"><b>Price : {parseInt((foodItem.card?.info?.price/100))} rps </b></p>: <p className="card-text"><b>Price : {parseInt((foodItem.card?.info?.defaultPrice/100))} rps </b></p> }
        <p className="card-text">{foodItem.card?.info?.description?.slice(0,60)}....</p> 
        <p className="card-text cartBtn" style={{textAlign:"center"}}><button 
        onClick={()=>{
               let obj={
                ItemImage:foodItem.card?.info?.imageId,
                ItemName:foodItem.card?.info?.name,
                ItemPrice: (foodItem.card?.info?.price ? parseInt((foodItem.card?.info?.price/100)) : parseInt((foodItem.card?.info?.defaultPrice/100))),
                ItemId: foodItem.card?.info?.id,
                quantity:1
              }
               dispatch(FoodaddToCart(obj))
        }} style={{marginTop:"20px"}}>Add To Cart</button></p>
      </div>
    </div>
  </div>

               


                </>)
            })}
             </div>
        </div> 
                </>)
               }
            })
        
    

        } 
       
        </>
    )
}



export default  RestaurantsItemsSpace;