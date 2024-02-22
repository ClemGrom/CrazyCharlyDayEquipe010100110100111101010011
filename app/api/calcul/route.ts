import {NextResponse} from "next/server";
import {algo, AlgoResponse} from "../../optimisation/algo";
import {createClient} from "../../utils/supabase/server";
import {Atelier, Participant} from "../../optimisation/models";

export async function GET(req: NextResponse) {

    const supabase = createClient()
    const ateliers = await supabase.from('ateliers').select();
    const participants = await supabase.from('candidats').select();

    const data: AlgoResponse = algo(ateliers.data, participants.data);
    return NextResponse.json({data: data});
}