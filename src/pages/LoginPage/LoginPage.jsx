import css from "./LoginPage.module.css"
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <div>
      <h1 className={css.heading}>Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage