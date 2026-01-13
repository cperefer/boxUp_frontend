import { CustomButton } from "@/components/custom/CustomButton"
import { Link } from "react-router"

export const LoginPage = () => {
  return (
    <div className="w-5/6 xl:w-2/3 flex flex-col xl:flex-row justify-center">
      <div className="w-full xl:w-1/2 h-4/6 md:h-full flex flex-col px-10 bg-white relative">
        <p className="text-2xl font-bold py-3">Bienvenido de nuevo!</p>
        <p className="text-lg pb-3">Inicia sesión para acceder a tu información</p>
        <form className="flex flex-col">
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <label htmlFor='email'>Correo electrónico</label>
            <input
              id='email'
              className="h-8 pl-[26px] rounded-lg border-2 bg-[url(/icons/letter.png)] bg-position-[2px] bg-no-repeat bg-size-[20px]"
              placeholder="Introduce tu correo"
              type="text"
            />
          </div>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <label htmlFor='password'>Contraseña</label>
            <input
              id='password'
              className=" h-8 pl-6 rounded-lg border-2 bg-[url(/icons/lock.png)] bg-position-[2px] bg-no-repeat bg-size-[20px]"
              placeholder="Password"
              type="password"
            />
            <p className="text-sm text-right py-1"><Link to='/'>Olvidaste tu contraseña?</Link></p>
          </div>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <CustomButton type="auth" size='fit' action={() => console.log('first')}>Iniciar sesión</CustomButton>
          </div>
        </form>
        <p className="text-sm md:text-lg absolute bottom-1">¿No tienes una cuenta? <Link to='/'>Contacta con tu box.</Link></p>
      </div>
      <div className="hidden xl:block xl:w-1/2 bg-[url(/bg/auth.jpg)] bg-cover bg-white"></div>
    </div>
  )
}
