import { Alert, Button, Input } from "../../components";

import { Link } from "react-router-dom";
import { useLogin } from "./hooks/use-login";
import { useTranslation } from "react-i18next";
import { InputPassword } from "../../components/InputPassword/InputPassword";

import styles from "./index.module.css"


export const Login = () => {
  const { t } = useTranslation();
  const { handleSubmit, register, errors, isPending, isError } = useLogin();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/login" className={styles.logo}>
          <img src="/max.webp" alt="Ada Max" />
        </Link>

        <Button variant="subtle">{t("login.signUp")}</Button>
      </div>
      <div className={styles.content}>
        <h1 className={styles.login__title}>{t("login.getStarted")}</h1>
        <div className={styles.login}>
          <h2 className={styles.title}>{t("login.signIn")}</h2>
          <p className={styles.textcenter}>{t("login.description")}</p>
          <form onSubmit={handleSubmit}>
            <Input
              label={t("login.email")}
              placeholder="email@email.com"
              disabled={isPending}
              error={errors?.email?.message}
              {...register("email")}
            />

            <div className={styles.formgroup}>
              <InputPassword  label={t("login.password")}  {...register("password")} 
             />
            </div>
            <div>
              <Button type="submit" isLoading={isPending}>
                {t("login.signIn")}
              </Button>
            </div>
            {isError && <Alert>Credencias inválidas</Alert>}
          </form>
        </div>
      </div>
    </div>
  );
};
