import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
      
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? 
    <div className='flex justify-center items-center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYMN5Kc1shhaelaKRAWOrIPnhzM6Sybp78g&s" alt="loading...." /></div>
: <>{children}</>
}

