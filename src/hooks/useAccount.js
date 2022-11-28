
import { useEffect, useState } from "react"

const useAccount = email => {
    const [account, setAccount] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-five.vercel.app/users/account/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    setAccount(data.account)
                    setIsLoading(false)
                })
        }
    }, [email])
    return [account, isLoading]
}

export default useAccount