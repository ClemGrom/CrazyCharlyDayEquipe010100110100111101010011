import { NextResponse } from "next/server";
import { algo } from "../optimisation/algo";
import { createClient } from "../utils/supabase/server";
import { Atelier, Participant } from "../optimisation/models";

export async function GET(req: NextResponse) {

    const supabase = createClient()
    const ateliers = await supabase.from('ateliers').select();
    const participants = await supabase.from('candidats').select();

    const score : number = algo(ateliers.data,participants.data);
    console.log(score);
    return NextResponse.json({score: score});
}