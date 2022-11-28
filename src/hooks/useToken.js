

import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-five.vercel.app/jwt?email=${email}`)

                .then(res => res.json())
                .then(data => {
                    if (data.jwToken) {
                        localStorage.setItem('jwToken', data.jwToken)
                        setToken(data.jwToken)
                    }
                })
        }
    }, [email])

    return [token];
}

export default useToken;