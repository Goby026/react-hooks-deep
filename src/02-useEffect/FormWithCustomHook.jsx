import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

//   const { username, email, password } = formState;

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ formState });
  };  

  return (
    <>
      <div className="container">
        <h1>Form with custom hook</h1>
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
          <div className="row">
            <div className="six columns">
              <label htmlFor="txtPassword">Your password</label>
              <input
                className="u-full-width"
                type="password"
                placeholder="password"
                id="txtPassword"
                name="password"
                value={password}
                onChange={onInputChange}
                autoComplete="off"
              />
            </div>
          </div>
          <br />

          <button className="button-primary" type="submit">
            Enviar
          </button> &nbsp;

          <button className="button-danger" onClick={onResetForm}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};
