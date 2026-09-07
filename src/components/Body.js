import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Add this hook above your return statement
    useEffect(() => {
        const filtered = listofRestaurant.filter((res) => 
          res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
      setFilteredRestaurant(filtered);
    }, [searchText, listofRestaurant]); // Runs whenever searchText or the master list changes

  useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
         const resURl = "https://namastedev.com/api/v1/listRestaurants";
            const resData = await fetch(resURl);

            const resResponse = await resData.json();

            console.log("resResponse:", resResponse);

            const restaurants =
            resResponse?.data?.data?.cards[1]?.card?.card
                ?.gridElements?.infoWithStyle?.restaurants || [];

            console.log("restaurants:", restaurants);

            setListofRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

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