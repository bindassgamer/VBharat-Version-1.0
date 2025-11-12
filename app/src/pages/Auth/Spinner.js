import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Spinner = ({ path = `/home-page` }) => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);

        }, 1000)
        count === 0 &&
            navigate(`${localStorage.getItem('auth')===null? "/": path}`, {
                state: location.pathname
            })
        return () => clearInterval(interval)
    }, [count, navigate, location, path])
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className='Text-center'>Redirecting you to Homepage in {count} second...</h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default Spinner
