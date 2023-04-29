import { useState } from "react";

export const FormLog = () => {

    const [errors, setErrors] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();

        setErrors([]);

        const newTodo = {
            id: Date.now(),
            todo: ev.target.email.value,
            description: ev.target.password.value,
            done: false,
            date: new Date(),
        };

        if (newTodo.todo == "") {
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
