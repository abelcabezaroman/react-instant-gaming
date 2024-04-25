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
                    <input type="text" />
                </label>

                <label>
                    Email
                    <input type="email" />
                </label>

                <label>
                    Comentario
                    <textarea />
                </label>

            </fieldset>

        </form>
    )
}
