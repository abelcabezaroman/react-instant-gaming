import React from 'react'
import { useForm } from 'react-hook-form'

export default function TopGamesForm({ onSubmit }) {

    const { register, handleSubmit } = useForm();
    return (
        <form>

            <fieldset>
                <legend>Datos del videojuego</legend>

                <label>
                    Nombre
                    <input type="text" />
                </label>

                <label>
                    Plataforma
                    <input type="text" />
                </label>

                <label>
                    Fecha de lanzamiento
                    <input type="number"  />
                </label>


            </fieldset>


        </form>
    )
}
