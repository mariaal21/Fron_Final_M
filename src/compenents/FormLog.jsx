import { useState } from "react";

export const FormLog = () => {

    const [errors, setErrors] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();

        setErrors([]);

        const newTodo = {
            id: Date.now(),
            email: ev.target.email.value,
            password: ev.target.password.value,
            done: false,
            date: new Date(),
        };

        if (newTodo.email == "") {
            setErrors("Rellena el título");
            return;
        } else if (newTodo.password == "") {
            setErrors("Rellena la descripción");
            return;
        }

        handleNewTodo(newTodo);
        ev.target.email.value = "";
        ev.target.password.value = "";
    };

    return (
        <>

            <form className="flex" onSubmit={handleSubmit}>
                <input type="text" id="email" name="email" placeholder="Email" />

                <input type="text" id="password" name="password" placeholder="Password" />


                <button type="submit">Login</button>
            </form>
            <p className="error-message">{errors}</p>
        </>
    )
}
