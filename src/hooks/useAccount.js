
import { useEffect, useState } from "react"

const useAccount = email => {
    const [account, setAccount] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/account/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAccount(data.account)
                    setIsLoading(false)
                })
        }
    }, [email])
    return [account, isLoading]
}

export default useAccount