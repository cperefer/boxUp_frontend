import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link } from "react-router"
import { CustomButton } from "@/components/custom/CustomButton"

type Inputs = {
  email: string
  password: string
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('sent', data)
  }

  return (
    <div className="w-5/6 xl:w-2/3 flex flex-col xl:flex-row justify-center items-center">
      <div className="w-full xl:w-1/2 h-4/6 max-h-150 flex flex-col px-10 bg-white relative">
        <p className="text-2xl font-bold py-3">Bienvenido de nuevo!</p>
        <p className="text-lg pb-3">Inicia sesión para acceder a tu información</p>
        <form className="flex flex-col" onSubmit={() => console.log('submit')}>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <label htmlFor='email'>Correo electrónico</label>
            <input
              {...register("email", {
                required: "El correo no puede estar vacío",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Introduce un email válido"
                }
              })}
              id='email'
              className={`h-8 pl-[26px] rounded-lg bg-[url(/icons/letter.png)] bg-position-[2px] bg-no-repeat bg-size-[20px] ${errors.email ? 'border-red-500 border-3' : 'border-2'}`}
              placeholder="Introduce tu correo"
              type="text"
            />
            {
              errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )
            }
          </div>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <label htmlFor='password'>Contraseña</label>
            <input
              {...register("password", {
                required: "La contraseña no puede estar vacía",
                minLength: {
                  value: 4,
                  message: "La longitud mínima es 4"
                }
              })}
              id='password'
              className={`h-8 pl-6 rounded-lg border-2 bg-[url(/icons/lock.png)] bg-position-[2px] bg-no-repeat bg-size-[20px] ${errors.email ? 'border-red-500 border-3' : 'border-2'}`}
              placeholder="Password"
              type="password"
            />
            {
              errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )
            }
            <p className="text-sm text-right py-1"><Link to='/'>Olvidaste tu contraseña?</Link></p>
          </div>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <CustomButton type="auth" size='fit' action={handleSubmit(onSubmit)}>Iniciar sesión</CustomButton>
          </div>
        </form>
        <p className="text-sm md:text-lg absolute bottom-1">¿No tienes una cuenta? <Link to='/'>Contacta con tu box.</Link></p>
      </div>
      <div className="hidden xl:block xl:w-1/2 h-4/6 max-h-150 bg-[url(/bg/auth.jpg)] bg-cover bg-white"></div>
    </div>
  )
}
