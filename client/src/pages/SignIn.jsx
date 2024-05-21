import { useForm } from "react-hook-form";
import style from "../pages/css/style.module.scss";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./validtionSchemas";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";

const defaultValues = {
  userName: "",
  password: "",
};

export default function SignIn() {
  const { handleSignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signInSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <div className={style.login}>
      <h2 className={style.login__bigName}>Войти в аккаунт</h2>
      <div className={style.login__name}>
      <Field
        name="userName"
        register={register}
        autoComplete="off"
        placeholder="Имя пользователя"
        error={Boolean(errors.userName)}
        helperText={errors.userName?.message}
      />
      </div>
      <div className={style.login__name}>
      <Field
        name="password"
        register={register}
        autoComplete="off"
        placeholder="Пароль"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      </div>
      <div className={style.login__name}>
      <Button disabled={isSubmitting} type="submit">
        Войти
      </Button>
      </div>
      </div>
    </form>
  );
}
