import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // double-check this path

export async function GET(request, context) {
    try {
        const { id } = context.params;

        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                components: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("❌ Error fetching user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
