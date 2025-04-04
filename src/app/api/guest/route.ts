import Guest from "@/schemas/guestSchema";
import { db } from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET() {
    db.connectDB();
    const allGuests = await Guest.find({});

    return NextResponse.json({
        message: "All guests",
        data: allGuests,
    })
}