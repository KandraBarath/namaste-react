import { useState, useEffect } from "react";

const useRestaurantData = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
            const resData = await fetch("https://namastedev.com/api/v1/listRestaurants");
            const resResponse = await resData.json();

            const restaurants =
                resResponse?.data?.data?.cards[1]?.card?.card
                    ?.gridElements?.infoWithStyle?.restaurants || [];

            setListofRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
    };

    // Return the state variables and the setters needed by the Body component
    return {
        listofRestaurant,
        filteredRestaurant,
        setFilteredRestaurant
    };
};

export default useRestaurantData;
