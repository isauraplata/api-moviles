import jwt  from "jsonwebtoken";

const genertateTokens=async(user:any)=>{
    try {
        const payload:any= {_id:user.id};
        const key:any=process.env.ACCESS_TOKEN_PRIVATE_KEY;

        const accessToken=jwt.sign(
            payload,
            key,
            {expiresIn:"10m"}
        );
        console.log("accessToken: ", accessToken);
        return Promise.resolve({accessToken});
    } catch (error) {
        return Promise.reject(error);
    }

}

export default genertateTokens;