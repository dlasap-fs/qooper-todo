export default function SignIn({ onSignIn }) {
  return (
    <>
      <h1>Login in your account</h1>

      <form>
        <input placeholder="Username" />
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <button onClick={() => onSignIn()}>LOGIN</button>
      </form>
    </>
  );
}
