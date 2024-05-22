
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";



const SearchRestarunts=()=>{

    let navigate=useNavigate()


    const [enterRestaurantname,setEnterRestaurantname] = useState("")
    const [searchReastaruntsData,setsearchReastaruntsData] = useState([])
    

    useEffect(()=>{

        axios.get(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.425938120298223&lng=78.39342287825744
        &str=${enterRestaurantname}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=dda24b65-a8ba-a413-ecb7-
        8d9fdc917dda&selectedPLTab=RESTAURANT`).then((res)=>{
            setsearchReastaruntsData(res.data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
        })

    },[enterRestaurantname])




    return(
        <>

        
        <div className="container">
            <div className="row d-flex justify-content-center">
            <div className="input-group searchBar" >
                  <input value={enterRestaurantname}
                   onChange={(e)=>{setEnterRestaurantname(e.target.value)}}
                   type="text" className="form-control" placeholder="Search Restaurants" />
                 </div>
            </div>
            <div className="row">

       
            <div className="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4"> 
               {searchReastaruntsData ? searchReastaruntsData.map((item, index) => {
                   console.log(item)
                    return (
                        <div class="col">
                            <div class="card h-100" onClick={()=>{navigate(`/restaurantsItems/${item.card?.card?.info?.id}`)}}>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card?.card?.info?.cloudinaryImageId}`} class="card-img-top home-restarunt-img" alt="..." /> 
                                <div class="card-body">
                                    <h5 class="card-title">{item.card?.card?.info?.name}</h5>
                                    <p class="card-text"><span className="Rating" ><span className="circle-star-logo"><span className="star-logo"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></span></span>{item.card?.card?.info.avgRating ? item.card?.card?.info?.avgRating : item.card?.card?.info?.avgRatingString} </span>
                                    <span className="bike"><i class="fa-solid fa-motorcycle"></i> {item.card?.card?.info?.sla?.slaString}</span>
                                    </p>
                                    <p class="card-text">{item.card?.card?.info?.cuisines.slice(0, 3).join(", ")}</p>
                                    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg> {item.card?.card?.info?.locality}</p>

                                </div>
                            </div>
                        </div>
                    )

                }):""  }

            </div>
        </div>
     

         

            </div>
        </div>

        </>
    )
}


export default SearchRestarunts;