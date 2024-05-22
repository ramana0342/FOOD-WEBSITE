import "./App.css"
import { useNavigate } from "react-router-dom"


const InitialHomeData = ({ InitialData ,filterSearchHomeRestarunt }) => {                      //  this URl is Common for this project Images ====>https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/
    let navigte=useNavigate();
    return (

    filterSearchHomeRestarunt.length>0 ?   
    
    <div className="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4">   
                {filterSearchHomeRestarunt.map((item, index) => {
                    //console.log(item)
                    return (
                        <div class="col">
                            <div class="card h-100">
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info?.cloudinaryImageId}`} class="card-img-top home-restarunt-img" alt="..." /> 
                                <div class="card-body">
                                    <h5 class="card-title">{item.info?.name}</h5>
                                    <p class="card-text"><span className="star-logo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>{item.info.avgRating ? item.info?.avgRating : item.info?.avgRatingString} </span>
                                    <span><i class="fa-solid fa-motorcycle"></i> {item.info?.sla?.slaString}</span>
                                    </p>
                                    <p class="card-text">{item.info?.cuisines.slice(0, 3).join(", ")}</p>
                                    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg> {item.info?.locality}</p>

                                </div>
                            </div>
                        </div>
                    )

                })}


            </div>
        </div>

       
       
       
       
       
       :<div className="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4">   
                {InitialData.map((item, index) => {
                    console.log(item)
                    return (
                        <div class="col">
                            <div class="card h-100" onClick={()=>{navigte(`/restaurantsItems/${item.info.id}`)}}>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info?.cloudinaryImageId}`} class="card-img-top home-restarunt-img" alt="..." /> 
                                <div class="card-body">
                                    <h5 class="card-title">{item.info?.name}</h5>
                                    <p class="card-text"><span className="Rating" ><span className="circle-star-logo"><span className="star-logo"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></span></span>{item.info.avgRating ? item.info?.avgRating : item.info?.avgRatingString} </span>
                                    <span className="bike"><i class="fa-solid fa-motorcycle"></i> {item.info?.sla?.slaString}</span>
                                    </p>
                                    <p class="card-text">{item.info?.cuisines.slice(0, 3).join(", ")}</p>
                                    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg> {item.info?.areaName}</p>

                                </div>
                            </div>
                        </div>
                    )

                })}


            </div>
        </div>
    )
}












export default InitialHomeData;