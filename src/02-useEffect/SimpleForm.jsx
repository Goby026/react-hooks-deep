/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'zigfrid',
        email:'george.rendich@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target})=> {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    // useEffect(() => {
    //     console.log('useEffect called@!')
    // }, [])

    // useEffect(() => {
    //     console.log('formState changed!')
    // }, [formState])

    // useEffect(() => {
    //     console.log('email changed!')
    // }, [email])

    useEffect(() => {
    
      return () => {
      }
    }, [])
    
    

    const submitForm= (e)=> {
        e.preventDefault();
        console.log({username, email});
    }

  return (
    <div className="container">
      <h2>Simple Form</h2>
      <hr />
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="six columns">
            <label htmlFor="txtUsername">Your username</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="username"
              id="txtUsername"
              name="username"
              value={username}
              onChange={onInputChange}
              autoComplete="off"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="six columns">
            <label htmlFor="txtEmail">Your email</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="email"
              id="txtEmail"
              name="email"
              value={email}
              onChange={onInputChange}
              autoComplete="off"
            />
          </div>
        </div>
        <br />

        <button className="button-primary" type="submit">
          Enviar
        </button>
      </form>
      <br />
      {
        (username === 'zigfrid2') && <Message/>
      }
      
    </div>
  );
};
