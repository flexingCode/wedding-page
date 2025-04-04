'use client'

import Guest from "@/models/guest";
import { useEffect, useState } from "react";

const GuestList = () => {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const fetchGuests = async () => {
            const res = await fetch("/api/guest");
            const data = await res.json();
            setGuests(data.data);
            setIsLoading(false);
        }
        fetchGuests();
    }, []);
    return (
        <div className="p-4">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl font-bold">Lista de invitados ({guests.length})</h1>
                    {guests.map((guest) => (
                        <div key={guest._id} className="flex flex-col p-4 border-b border-gray-200">
                            <h2 className="text-2xl font-bold">{guest.name}</h2>
                            <p className="text-sm text-gray-500">{guest.email}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default GuestList;