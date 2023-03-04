import { IMG_CDN_URL } from "../constants";



const RestaurantCard = ({name, cuisines, cloudinaryImageId}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.slice(0,2).join(",")}</h3>
            <h4>4.2 stars</h4>
        </div>
    )
}

export default RestaurantCard;

