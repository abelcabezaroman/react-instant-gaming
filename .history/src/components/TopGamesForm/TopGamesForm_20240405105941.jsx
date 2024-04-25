import React from 'react'
import { useForm } from 'react-hook-form'

export default function TopGamesForm({ onSubmit }) {

    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <fieldset>
                <legend>Datos del videojuego</legend>

                <label>
                    Nombre
                    <input type="text" {...register("name")} />
                </label>

                <label>
                    Plataforma
                    <input type="text" {...register("platform")} />
                </label>

                <label>
                    Fecha de lanzamiento
                    <input type="number"  {...register("releaseYear")}/>
                </label>


            </fieldset>


        </form>
    )
}
