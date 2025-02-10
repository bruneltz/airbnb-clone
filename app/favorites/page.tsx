import EmptyState from "../components/EmptyState";
import getFavoriteListings from "../actions/getFavoriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

async function FavoritesPage() {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {

        return (
            <EmptyState
                title="No favorites found"
                subtitle="You have no favorites"
            />
        );
    }

    return (
        <FavoritesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default FavoritesPage;