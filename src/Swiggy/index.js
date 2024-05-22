import axios from "axios";
import React from "react";
import InitialHomeData from "./intialData";
import RestaurantsLocationName from "./searchLocationName";
import { useState , useEffect} from "react";

const  Index=()=>{

const [InitialData,setInitialData]=useState([]);
const [searchHomeRestaruntName,setSearchHomeRestaruntName] = useState("");
const [filterSearchHomeRestarunt,setfilterSearchHomeRestarunt] = useState([])
const [location,setLocation] = useState({latitude:"17.406498" ,longitude:"78.47724389999999"})
  


useEffect(()=>{
        console.log(location)                  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3684658&lng=78.53159409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
     axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
             .then((res)=>{
                  setInitialData(res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
              })
             
},[location])

useEffect(()=>{
      let searchedHomeRestaruntData=InitialData.filter((restaruntName , i)=>{
            if(restaruntName.info.name.toLowerCase().includes(searchHomeRestaruntName.toLowerCase())==true){
                  return true
            }
      }) 
      setfilterSearchHomeRestarunt(searchedHomeRestaruntData)
},[searchHomeRestaruntName])



return(<>
       <div className="container-fluid">
            <div className="row">
            <div className="col-2">


             <RestaurantsLocationName setLocation={setLocation} setInitialData={setInitialData}/>
           





            </div>
            <div className="col-10">
           
           
            <div className="container">
            <div className="row">
                  <div className="col d-flex justify-content-center">

                  <div className="input-group searchBar">
                  <input value={searchHomeRestaruntName}
                   onChange={(e)=>{setSearchHomeRestaruntName(e.target.value)}}
                   type="text" className="form-control" placeholder="Search Restaurants" />
                 </div>
            </div>
            </div>
            <div className="row">
                  <div className="col">
                  <InitialHomeData InitialData={InitialData} filterSearchHomeRestarunt ={filterSearchHomeRestarunt}/>
                  </div>
            </div>
            
       </div>




            </div>
     
       </div>
       </div>
        
     

</>)




}
















export default  Index;