// app/api/user/login/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // Sign in with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error || !data.user) {
            return NextResponse.json({ error: error?.message || "Invalid credentials" }, { status: 401 });
        }

        // Find or create the user in Prisma
        let user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    id: data.user.id, // Ensure Supabase and Prisma user IDs stay in sync
                    email,
                },
            });
        }

        return NextResponse.json({ message: "Login successful", userId: user.id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
