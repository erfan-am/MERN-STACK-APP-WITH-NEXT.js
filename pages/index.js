import { useEffect, useContext } from "react"
import Layout from "../appContainer/shared/components/Navigation/Layout";
import { Context } from "../appContainer/shared/context/contextApi"
import { useRouter } from "next/dist/client/router";

const INDEX = () => {
    const auth=useContext(Context);
    const router=useRouter()
    useEffect(()=>{
        auth.log !==true && router.push('/auth')
    },[auth.log,router])
    return(<Layout>
            <div className="center">
                <h2>Hello</h2>
            </div>
        </Layout>        
    )
}

export default INDEX
