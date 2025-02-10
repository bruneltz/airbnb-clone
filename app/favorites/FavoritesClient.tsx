import Container from "../components/container";
import Heading from "../components/heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

function FavoritesClient({ listings, currentUser }: FavoritesClientProps) {
    return ( 
        <Container>
            <Heading title="Favorites" subtitle="List of places you have loved!" />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings?.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
     );
}

export default FavoritesClient;