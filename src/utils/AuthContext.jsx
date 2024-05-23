import { createContext,useContext,useEffect,useState } from "react";
import { account } from "../appwrite";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    useEffect(() => {
        checkUserStatus()
        
    },[])

    const loginUser = async (useInfo) => {
        setLoading(true)
        try{
            let response = await account.createEmailPasswordSession(
                useInfo.email,
                useInfo.password,
            )
            console.log("SESSION",response);
            setUser(true)
            setLoading(false)
        }catch(error){
            console.error(error)
        }
    };

    const logOut = () => {
        account.deleteSession('current');
        setUser(null);
    };
    
    const registerUser = (useInfo) => {};

    const checkUserStatus = async () => {
        try {
            let response = await account.get()
            setUser(true);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
    };

    const contextData = {
        user,
        loginUser,
        logOut,
        registerUser,
        checkUserStatus
    }
    return(
        <AuthContext.Provider value={contextData}>
         {loading?<p>Loading...</p>:children}
        </AuthContext.Provider>
        )
}

export const AuthUser = () => {return useContext(AuthContext)}