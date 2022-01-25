import React, { useState, useEffect } from "react";
import ListingCard from  "./ListingCard"

function ListingsContainer({ search }) {

  const [listings, setListings] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

function handleDeleteCard(card) {
  const updatedCards = listings.filter(listing => listing.id !== card.id)
  setListings(updatedCards)
}

const filteredListings = listings.filter(listing => {
  return listing.description.toLowerCase().includes(search.toLowerCase())
})

  const listingCards = filteredListings.map((listing) => <ListingCard key={listing.description} listing={listing} onDeleteListing={handleDeleteCard}/>)

  console.log(listings)

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
