import { AuthContextProvider, useAuth } from '@/contexts/authContext';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const noAuthRequired = ["/login", "/signup","/"];
export default function App({Component, pageProps}) {
  const router = useRouter();

  // return <h1>{router.pathname}</h1>
  return (
  <AuthContextProvider>
    {
      !noAuthRequired.includes(router.pathname) ? <ProtectedRoute><Component {...pageProps} /></ProtectedRoute> : <Component {...pageProps} />
    }
  </AuthContextProvider>
  )
}


function ProtectedRoute({children}) {
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
      if(!user?.uid){
          router.push("/login","",{ shallow: true });
      }
      console.log(user,"user")
  }, [user,router])
  return <> {user.email?children:null} </>
}