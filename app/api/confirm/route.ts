import {NextRequest, NextResponse} from "next/server";
import {createClient} from "@/app/utils/supabase/server";

export async function POST(req: NextRequest) {

    const requestBody = await req.json();

    const supabase = createClient();

    return NextResponse.json({data: "test"});
}