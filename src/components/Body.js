import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listofRestaurant, setListofRestaurant] = useState(restaurantsList)

    return (
        <div className="body">
            <div className="Filter">
                <button 
                    className="filter-btn"
                    onClick={ () => {
                        let filteredList = listofRestaurant.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setListofRestaurant(filteredList)
                    }}>
                    Top Rated Restaurtant
                </button>
            </div>
            <div className="res-container">
                {listofRestaurant.map((restaurtant) => (
                    < RestaurantCard key= {restaurtant.info.id} resData={restaurtant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;