'use client'

import Guest from "@/models/guest";
import { useEffect, useState } from "react";

const GuestList = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    useEffect(() => {
        const fetchGuests = async () => {
            const res = await fetch("/api/guest");
            const data = await res.json();
            setGuests(data.data);
        }
        fetchGuests();
    }, []);
    return (
        <div>
            {guests.map((guest) => (
                <div key={guest._id} className="flex flex-col p-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold">{guest.name}</h2>
                    <p className="text-sm text-gray-500">{guest.email}</p>
                </div>
            ))}
        </div>
    )
}

export default GuestList;