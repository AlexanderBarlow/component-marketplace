// app/api/auth/signup/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import prisma from "@/lib/prisma";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // important: this is the server-side key
);

export async function POST(req) {
    const body = await req.json();
    const { email, password } = body;

    try {
        // Create user in Supabase
        const { data: user, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // Create user in Prisma DB
        await prisma.user.create({
            data: {
                id: user.user.id,
                email: user.user.email,
            },
        });

        return NextResponse.json({ message: "User created", userId: user.user.id });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
