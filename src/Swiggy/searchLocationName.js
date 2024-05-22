import axios from "axios";
import { useState , useEffect } from "react";


const RestaurantsLocationName=({setLocation,setInitialData})=>{


    const[LocationName,setLocationName] = useState("");
    const[locationSuggestions,setlocationSuggestions] = useState([])

    useEffect(()=>{
        
                 axios.get(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${LocationName}&types=`)
                 .then((res)=>{
                    if(res.data.data){
                        setlocationSuggestions([])
                    setlocationSuggestions(res.data?.data)
                    }
                 })
    },[LocationName])

    const getLocation=(geometryId)=>{
        setInitialData([])
       
                  axios.get(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${geometryId}`)
                  .then((res)=>{
                    let locations=res.data?.data[0]?.geometry?.location
                     // console.log(locations)
                    setLocation( {latitude:locations.lat, longitude:locations.lng} )
                  })
    }


    return(
        <>


        

       <div className="input-group LocationBar">
                  <input value={LocationName}
                   onChange={(e)=>{setLocationName(e.target.value)}}
                   type="text" className="form-control" placeholder="Search Location" />
                   <br></br>
                    
                    <div className="list-group">
                    
                    {locationSuggestions.length>0 ?
                        locationSuggestions.map((locationName,index)=>{
                           return(<>
                            
                            <a 
                            onClick={()=>{getLocation(locationName.place_id)}}
                            href="#" class="list-group-item list-group-item-action locationList-group">{locationName.description}</a>
                           

                           </>) 
                        }) :""}

</div>
                    
                  
                 </div>    


        
        </>
    )
}


export default RestaurantsLocationName;