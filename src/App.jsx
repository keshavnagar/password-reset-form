import { MdLockReset } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
const App = () => {
  return (
    <section>
      <div>
        <MdLockReset />
        <h1>Create new password</h1>
        <h2>enter email and new password</h2>
        <label htmlFor="email">
          <MdOutlineEmail />
        </label>
        <input id="email" type="email" placeholder="enter your email address" />
        <label htmlFor="password">
          <RiLockPasswordLine />
        </label>
        <input id="password" type="password" placeholder="enter new password" />
        <label htmlFor="confirmPassword">
          <RiLockPasswordFill />
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="confirm new password"
        />
      </div>
    </section>
  );
};
export default App;
