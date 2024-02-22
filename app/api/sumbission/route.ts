import {NextResponse} from "next/server";
import {createClient} from "@/app/utils/supabase/server";

export interface SubmissionRequest {
    displayName: string,
    nbDemande: number,
    ordre1: string,
    ordre2: string,
    ordre3: string,
    ordre4: string,
    ordre5: string,
    ordre6: string,
}

export async function POST(req: NextResponse) {

    const requestBody = await req.json() as SubmissionRequest;

    const supabase = createClient();

    console.log(requestBody);

    const participants = await supabase.from('candidats').insert(requestBody);

    return NextResponse.json({data: "test"});
}