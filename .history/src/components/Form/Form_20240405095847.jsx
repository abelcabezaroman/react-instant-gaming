import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm()

    const submit = async (dataForm) => {
        console.log(dataForm);
    }

  console.log(errors);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <fieldset>
                <legend>Formulario de contacto</legend>

                <label>
                    Nombre
                    <input className={errors.name ? "u-error" : ""} type="text" {...register("name", {required: true})} />
                </label>

                {watch("name") === "Abel" && <label>
                    ¿De que eres profesor?
                    <input type="text" {...register("teacherType")} />
                </label>}

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
