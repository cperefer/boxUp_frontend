import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router";
import { CustomButton } from "@/components/custom/CustomButton";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const reference = searchParams.get("reference") ?? null;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLogin(true);
    const isValid = await login(data.email, data.password);

    setIsLogin(false);

    if (isValid) {
      navigate("/dashboard");
    }
  };

  const handleDemoData = async () => {
    setIsLogin(true);
    const isValid = await login("demo@demo.es", "Dem01234");

    setIsLogin(false);

    if (isValid) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-5/6 lg:w-2/3 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 h-4/6 max-h-150 flex flex-col px-10 bg-white relative">
        <p className="text-2lg font-bold py-3">Bienvenido de nuevo!</p>
        <p className="text-lg pb-3">
          Inicia sesión para acceder a tu información
        </p>
        <form className="flex flex-col">
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <label htmlFor="email">Correo electrónico</label>
            <input
              {...register("email", {
                required: "El correo no puede estar vacío",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Introduce un email válido",
                },
              })}
              id="email"
              className={`h-8 pl-[26px] rounded-lg bg-[url(/icons/letter.png)] bg-position-[2px] bg-no-repeat bg-size-[20px] ${errors.email ? "border-red-500 border-3" : "border-2"}`}
              placeholder="Introduce tu correo"
              type="text"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <label htmlFor="password">Contraseña</label>
            <input
              {...register("password", {
                required: "La contraseña no puede estar vacía",
                minLength: {
                  value: 4,
                  message: "La longitud mínima es 4",
                },
              })}
              id="password"
              className={`h-8 pl-6 rounded-lg border-2 bg-[url(/icons/lock.png)] bg-position-[2px] bg-no-repeat bg-size-[20px] ${errors.email ? "border-red-500 border-3" : "border-2"}`}
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <p className="text-sm text-right py-1">
              <Link to="/">Olvidaste tu contraseña?</Link>
            </p>
          </div>
          <div className="w-9/10 md:w-4/5 flex flex-col pb-3">
            <CustomButton
              type="auth"
              size="fit"
              action={handleSubmit(onSubmit)}
              disabled={isLogin}
            >
              Iniciar sesión
            </CustomButton>
            {reference && (
              <div className="pt-5">
                <CustomButton
                  type="error"
                  size="fit"
                  action={handleDemoData}
                  disabled={isLogin}
                >
                  Iniciar sesión con datos demo
                </CustomButton>
              </div>
            )}
          </div>
        </form>
        <p className="text-sm md:text-lg absolute bottom-1">
          ¿No tienes una cuenta? <Link to="/">Contacta con tu box.</Link>
        </p>
      </div>
      <div className="hidden lg:block lg:w-1/2 h-4/6 max-h-150 bg-[url(/bg/auth.jpg)] bg-cover bg-white"></div>
    </div>
  );
};
