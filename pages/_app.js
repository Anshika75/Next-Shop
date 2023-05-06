import { AuthContextProvider, useAuth } from '@/contexts/authContext';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const noAuthRequired = ["/login", "/signup","/","/logout"];
export default function App({Component, pageProps}) {
  const router = useRouter();
  if(router.pathname.startsWith("/admin")){
    return (
      <AuthContextProvider>
          <ProtectedRoute type="vendor"><Component {...pageProps} /></ProtectedRoute>
      </AuthContextProvider>
      )
  }else{
    return (
      <AuthContextProvider>
        {
          !noAuthRequired.includes(router.pathname) ? <ProtectedRoute type='user'><Component {...pageProps} /></ProtectedRoute> : <Component {...pageProps} />
        }
      </AuthContextProvider>
      )
  }
}


function ProtectedRoute({children,type}) {
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
      if(!user?.uid){
          router.push("/login","",{ shallow: true });
      }
      console.log(user,"user")
  }, [user,router])
  return <> {user.email&&(type=='user'||type==user.role)?children:<h1>Not Allowed</h1>} </>
}