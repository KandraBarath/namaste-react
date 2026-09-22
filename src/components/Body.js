import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [searchText, setSearchText] = useState("");

   // Using the custom hook here
   const { 
        listofRestaurant, 
        filteredRestaurant, 
        setFilteredRestaurant 
    } = useRestaurantData();

// Automatically filters when searchText changes
    useEffect(() => {
        const filtered = listofRestaurant.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    }, [searchText, listofRestaurant, setFilteredRestaurant]);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like you're offline!! Please check your internet connection</h1>
    }
    
    return listofRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }} 
                    />
                    <button onClick={ () => {
                        const filteredRestaurtant = listofRestaurant.filter(
                            (res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurtant);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={ () => {
                        let filteredList = listofRestaurant.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top Rated Restaurtant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurtant) => (
                    < RestaurantCard key= {restaurtant.info.id} resData={restaurtant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;