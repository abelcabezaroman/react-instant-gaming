import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const { register } = useForm()
    return (
        <form>

            <fieldset>
                <legend>Formulario de contacto</legend>

                <label>
                    Nombre
                    <input type="text" {...register("name")} />
                </label>

                <label>
                    Email
                    <input type="email" {...register("email")} />
                </label>

                <label>
                    Comentarios
                    <textarea  {...register("comments")} />
                </label>

            </fieldset>

        </form>
    )
}
