import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing}) {
  const [isFavorited, setIsFavorited] = useState(false)
  const {image, description, location} = listing

  function handleDeleteClick(listingItem) {
    fetch(`http://localhost:6001/listings/${listingItem.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(()=>onDeleteListing(listingItem))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={()=>setIsFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setIsFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={()=>handleDeleteClick(listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
