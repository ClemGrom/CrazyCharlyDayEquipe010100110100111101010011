import {createClient} from "@/app/utils/supabase/server";
import {redirect} from "next/navigation";
import Action from "@/app/create/render";

export default async function Page() {

    const supabase = createClient();

    const {data, error} = await supabase.auth.getUser();

    if (!data.user) {
        redirect('/signin')
    }

    return <Action/>


}

