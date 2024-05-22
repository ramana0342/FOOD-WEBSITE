import { BrowserRouter , Routes , Route } from "react-router-dom"

import Index from "./index"
import RestaurantsItemsSpace from "./restaurantsSpace";
import "./App.css"
import { NavLink } from "react-router-dom";
import FoodCart  from "./cart";
import { useSelector } from "react-redux";
import SearchRestarunts from "./searchReastaurant";
import Dishes from "./searchDishes";



const Header=()=>{
    let cartItems= useSelector((state)=>{
        return state.FoodItems
    })

    let totalCartItems=cartItems.reduce((acc,item,i)=>{
        return acc+item.quantity
},0)



  
return(
 
    <BrowserRouter>
    <div className="header">
       <NavLink to="/" ><b>Brand</b></NavLink> 
        <NavLink to="/findRestarunts/"><b>Search Restarunts</b></NavLink>
        <NavLink to = "/Dishes/"><b>Search Dishes</b></NavLink>
        <NavLink to="/cartItems/"><b>Cart - {totalCartItems}</b></NavLink>
        
    </div>

    <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path= "/restaurantsItems/:id" element={<RestaurantsItemsSpace/>}></Route>
        <Route path="/findRestarunts/"   element={<SearchRestarunts/>}></Route>
        <Route path="/cartItems/" element={<FoodCart/>} ></Route>
        <Route path="/Dishes/"   element={<Dishes/>}></Route>
    </Routes>

</BrowserRouter>



)
}


export default Header; 