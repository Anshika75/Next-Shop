import { createContext,useContext, useEffect, useState} from "react"
import { onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup ,updateProfile} from "firebase/auth"
import {auth} from "@/firebase/config"
import { createUser, getUser } from "@/firebase/user";
import { useRouter } from "next/router";
export const AuthContext = createContext({})
const provider = new GoogleAuthProvider();


export const useAuth = () => useContext(AuthContext)
export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userr) => {
            if (userr) {
                let u = await getUser(userr.uid);
                if(u==null) return {};
                setUser({
                    uid:userr.uid,
                    email:userr.email,
                    displayName: userr.displayName,
                    photoURL: userr.photoURL,
                    isVerified: userr.emailVerified,
                    role: u.role
                })
                localStorage.setItem("name",userr.displayName)
                localStorage.setItem("uid",userr.uid)
                localStorage.setItem("email",userr.email);
                console.log(user)
            } else {
                setUser({})
            }
            console.log(user)
            setLoading(false)
        });
        return ()=> unsubscribe();
    },[])
    const signup = async (formUser) => {
        const newUser = await createUserWithEmailAndPassword(auth, formUser.email, formUser.password);
        if(newUser.user.email){
            updateProfile(
                newUser.user,
                {
                    displayName: formUser.name,
                }
            )
            await createUser({
                email: formUser.email,
                password: formUser.password,
                displayName: formUser.name,
                photoURL: newUser.user.photoURL,
                uid: newUser.user.uid,
                role: formUser.role,
                isVerified: newUser.user.emailVerified,
                location: {
                    lat: formUser.lat,
                    long: formUser.lng
                }
            },newUser.user.uid);
        }
        
        router.push("/");
    }
    const login = (formUser) => {
        return signInWithEmailAndPassword(auth, formUser.email, formUser.password)
    }
    const logout = () => {
        return signOut(auth);
    }
    const GoogleAuth = async ()=>{
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user,"Google Auth User");
        router.push("/");
    }

    const value = {
        user,
        signup,
        login,
        logout,
        GoogleAuth
    }
    if(loading){
        return <section className="bg-[#F3F4F6] min-h-screen bg-no-repeat bg-cover flex justify-center items-center">
        <div className="flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-[#0004] absolute transition-all">
          <div className="text-white text-3xl text-center">
            <h1 className="font-extrabold text-8xl tracking-wider">Loading</h1>
          </div>
        </div>
      </section>
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
