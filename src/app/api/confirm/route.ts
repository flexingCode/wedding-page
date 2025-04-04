import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/connection";
import Guest from "@/schemas/guestSchema";

export async function POST(request: NextRequest) {
    db.connectDB();
    const { email, name } = await request.json();

    if (email !== "") {
        const guest = await Guest.findOne({ email });

        if (guest) {
            return NextResponse.json({
                message: "Ya has confirmado tu asistencia",
            }, { status: 400 })
        }
    }

    if (!name) {
        return NextResponse.json({
            message: "El nombre es requerido",
        }, { status: 400 })
    }

    const newGuest = await Guest.create({ name, email });

    return NextResponse.json({
        message: "Guest created successfully",
        data: newGuest,
    })
}
