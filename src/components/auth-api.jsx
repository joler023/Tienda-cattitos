import axios from 'axios'

const signIn = async (user) =>{
    const result = await axios.post("/login", user);
    return result
}

const signUp = async (user) =>{
    const result = await axios.post("/register", user);
    return result
}

const hasSignned = async (user)=>{
    const result = await axios.get("/signned", user);
    return result
}

const logOut = async ()=>{
    const result = await axios.get("/logout");
    return result
}


export {signIn, signUp, hasSignned, logOut}