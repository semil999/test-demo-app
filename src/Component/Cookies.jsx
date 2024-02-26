import React from 'react'
import { useCookies } from 'react-cookie';

const Cookies = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const cook = () => {
        setCookie("name" , "Jaydip");
        setCookie("id" , 123);
    }

    const removeCook = () => {
        removeCookie("name")
    }

  return (
    <>
      <h1>Cookies {cookies.name}</h1>
      <button onClick={cook}>Click</button>
      <button onClick={removeCook}>Remove</button>
    </>
  )
}

export default Cookies
