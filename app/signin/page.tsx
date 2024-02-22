import {login, signup} from "@/app/signin/action";

export default function Page() {

    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required/>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required/>
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
    );
}