"use client"

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currentUser: SafeUser;
}

function ListingHead({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser
}: ListingHeadProps) {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue);

    return (
        <>
            <Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
            <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
                <Image src={imageSrc} alt="Image" fill className="object-cover w-full" />
                <div className="absolute right-5 top-5">
                    <HeartButton listingId={id} currentUser={currentUser} />
                </div>
            </div>
        </>
    );
}

export default ListingHead;