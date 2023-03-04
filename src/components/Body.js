import { useState } from "react";
import { restrauntList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
    return filterData;

}

const Body = () => {
    const [searchText, setSearchText] = useState("KFC");
    const [restaurants, setRestaurants] = useState(restrauntList);
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" value={searchText} 
                placeholder="search"
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                className="search-btn"
                onClick={() => {
                    // Need to filter the data
                    const data = filterData(searchText, restaurants);
                    // modify restaurants
                    setRestaurants(data);
                }}
                >Search</button>
            </div>
            <div className="restraunt-list">
                {
                restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })
                }
            </div>
        </>
    )
}

export default Body;