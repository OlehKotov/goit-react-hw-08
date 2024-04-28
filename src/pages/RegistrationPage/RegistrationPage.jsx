import css from "./RegistrationPage.module.css"
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

const RegistrationPage = () => {
  return (
    <div>
      <h1 className={css.heading}>Registration</h1>
      <RegistrationForm />
    </div>
  )
}

export default RegistrationPage