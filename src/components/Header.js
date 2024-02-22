import { getLocalStorageItem } from "../utils/localStorageHelper";

export default function Header({ onSignOut }) {
  const { firstName = "" } = JSON.parse(getLocalStorageItem("user"));

  return (
    <div>
      <h5>Welcome, {firstName}</h5>
      <button onClick={() => onSignOut()}>LOGOUT</button>
    </div>
  );
}
