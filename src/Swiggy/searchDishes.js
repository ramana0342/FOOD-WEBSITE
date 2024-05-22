
import axios from "axios";
import { useState,useEffect } from "react";
import {  useDispatch } from "react-redux";
import { FoodaddToCart } from "./redux";
import { useNavigate } from "react-router-dom";


const Dishes=()=>{

   
  let dispatch=useDispatch();
  let navigate=useNavigate();

    const [enterDishName,setDishName]=useState("");
    const [dishesList,setDishesList] = useState([])


    useEffect(()=>{

        axios.get(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.425938120298223&lng=78.39342287825744&str=${enterDishName}&trackingId=4e15bac1-9765-5e67-9eb2-019ae445adbe&submitAction=ENTER&queryUniqueId=959037b7-a722-390d-ddf8-7d346d904c17`)
                     .then((res)=>{
                        setDishesList(res.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.slice(1))
                        
                     })
    },[enterDishName])


    

       return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center">

            <div className="input-group searchBar" >
                  <input value={enterDishName}
                   onChange={(e)=>{setDishName(e.target.value)}}
                   type="text" className="form-control" placeholder="Search Any Dishes" />
                 </div>

            </div>

            <div className="row">
            

            <div className="container">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4">

               { dishesList ? dishesList.map((item,index)=>{

                  console.log(item);
                  return(


<div className="col">
<div class="card h-100">
    <div className="row p-4">
        <h5>{item.card?.card?.restaurant?.info?.name}</h5>
      <p><span className="Rating" ><span className="circle-star-logo"><span className="star-logo"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></span></span>{item.card?.card?.restaurant?.info?.avgRating ? item.card?.card?.restaurant?.info?.avgRating : item.card?.card?.restaurant?.info?.avgRatingString} </span>
                                    <span className="bike"><i class="fa-solid fa-motorcycle"></i> {item.card?.card?.restaurant?.info?.sla?.slaString}</span></p>
      <button onClick={()=>{navigate(`/restaurantsItems/${item.card?.card?.restaurant?.info?.id}`)}}>View Restaurant</button>
    </div>
  <div class="row g-0">
    <div class="col-md-5">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card?.card?.info?.imageId}`} class="img-fluid rounded-start dish-img" alt="..."/>
      <div style={{textAlign:"center", margin:"20px 0px"}}><button 
      onClick={()=>{

        let obj={
          ItemImage:item.card?.card?.info?.imageId,
          ItemName:item.card?.card?.info?.name,
          ItemPrice: (item.card?.card?.info?.price  ? parseInt(( item.card?.card?.info?.price/100)) : parseInt((item.card?.card?.info?.defaultPrice/100))),
          ItemId: item.card?.card?.info?.id,
          quantity:1
        }
         dispatch(FoodaddToCart(obj))

      }

      }>Add To Cart</button></div>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h6 class="card-title">{item.card?.card?.info?.name}</h6>
        <p class="card-text">{item.card?.card?.info?.price ?   parseInt(item.card?.card?.info?.price/100)  : parseInt(item.card?.card?.info?.defaultPrice/100)} rps</p>
        <p class="card-text"><small class="text-body-secondary">{item.card?.card?.info?.description?.slice(0,60)}</small></p>
      </div>
    </div>
  </div>
</div>
</div>





                  )



                }): "" }

</div>
            </div>

                

            </div>
        </div>


        </>
       )

}

export default Dishes;