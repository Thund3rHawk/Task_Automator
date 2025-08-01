import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req:Request) {
    try {
        const body = await req.json();
        const {first_name, id, email_addresses, image_url} = body?.data;
        const email = email_addresses[0]?.email_address;
        
        console.log(body);
        await db.user.upsert({
            where: {clerkId: id},
            update: {
                email,
                name: first_name,
                profileImage: image_url
            },
            create:{
                clerkId: id,
                email,
                name: first_name || '',
                profileImage: image_url || ''
            },
        })
        return new NextResponse('User updated in database successfully', {
            status: 200
        })      

    } catch (error) {
        console.log(error);        
        return new NextResponse('Error updating in database', {
            status: 500
        })
    }
}