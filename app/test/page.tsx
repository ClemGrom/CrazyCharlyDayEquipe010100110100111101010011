
import { cookies } from 'next/headers'
import {createClient} from "@/app/utils/supabase/server";

export default async function Page() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: todos } = await supabase.from('ateliers').select()

    return (
        <>
            <h1>Ateliers from db : </h1>

            <ul>
                {
                    todos.length === 0 && <li>No ateliers</li>
                }
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.theme}</li>
                ))}
            </ul>
        </>
    )
}
