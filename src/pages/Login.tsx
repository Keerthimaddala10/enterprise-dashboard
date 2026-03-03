import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../store/auth/authSlice"
import type { AppDispatch } from "../store/store"

function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch(login())
    navigate("/dashboard")
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login