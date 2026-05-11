'use client'
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, price, destinationName, duration, country } = destination;
    return (
        <div className="border">
            <Image
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}

            />

            <div className="p-2">
                <div className="flex items-center gap-1">
                    <LuMapPin /> <span>{country}</span>
                </div>

                <div className="flex justify-between">
                    <div>
                        <div>
                            <h2 className="text-xl font-bold">{destinationName}</h2>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegCalendar />{duration}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">$ {price}</h3></div>
                </div>

                <Link href={`/destinations/${_id}`}>
                    <button className="text-cyan-500 mt-1 flex items-center gap-1">
                        <FiExternalLink />
                        Book Now
                    </button>
                </Link>


            </div>

        </div>
    );
};

export default DestinationCard;