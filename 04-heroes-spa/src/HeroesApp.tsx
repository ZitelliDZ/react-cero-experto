import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./routes/AppRouter"



export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
