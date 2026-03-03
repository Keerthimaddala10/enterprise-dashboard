import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import type { ReactNode } from "react"

function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute