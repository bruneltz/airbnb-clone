import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import React from 'react';
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();
    
    if(!currentUser) {
        return (
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const listings = await getListings({
        userId: currentUser.id
    });

    if (listings.length === 0) {
        return (
            <EmptyState 
                title="No properties found"
                subtitle="You have no properties"
            />
        )
    }

    return (
        <PropertiesClient 
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default TripsPage;