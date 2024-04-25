import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, watch, handleSubmit } = useForm()

    const submit = async (dataForm) => {
        console.log(dataForm);
    }

    console.log(watch());
    console.log(watch("name"));

    return (
        <form onSubmit={handleSubmit(submit)}>

            <fieldset>
                <legend>Formulario de contacto</legend>

                <label>
                    Nombre
                    <input type="text" {...register("name")} />
                </label>

                <label>
                    ¿De que eres profesor?
                    <input type="text" {...register("teacherType")} />
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


            <button>Enviar</button>
        </form>
    )
}
