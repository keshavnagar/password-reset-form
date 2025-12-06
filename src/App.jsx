import { MdLockReset } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
const App = () => {
  return (
    <section className="w-screen h-screen bg-[#090C9B] flex justify-center items-center">
      <div className="bg-[#3D52D5] w-[360px] shadow-[0px_4px_20px_rgba(2,9,115,0.4)] rounded-[16px] p-[24px] flex flex-col  items-center  ">
        <MdLockReset className="text-[2rem] text-[#090C9B]" />
        <h1 className="text-[1.9rem] w-full text-[#090C9B] font-bold">
          Create new password
        </h1>
        <h2 className="text-[1.4rem] w-full text-[#090C9B]">
          enter email and new password
        </h2>
        <form className="w-full mt-[1rem] mb-[1rem] flex flex-col gap-[1rem]">
          <div>
            <label htmlFor="email">
              <MdOutlineEmail className="text-[1.5rem]" color="#090C9B" />
            </label>
            <input
              className="font-md w-full  p-2 border border-[#506ee1] transition duration-300  hover:shadow hover:border-[#7192e9] outline-none focus:border-[#9fb8f1] focus:shadow-md  mt-2 placeholder:text-[#7192e9] text-[#090C9B] rounded-md "
              id="email"
              type="email"
              placeholder="enter your email address"
            />
          </div>
          <div>
            <label htmlFor="password">
              <RiLockPasswordLine className="text-[1.5rem]" color="#090C9B" />
            </label>
            <input
              className="font-md w-full text-[#090C9B]  text-sm p-2 border border-[#506ee1] transition duration-300  hover:shadow hover:border-[#7192e9] outline-none focus:border-[#9fb8f1] focus:shadow-md  mt-2 placeholder:text-[#7192e9] text-[#090C9B] rounded-md "
              id="password"
              type="password"
              placeholder="enter new password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">
              <RiLockPasswordFill className="text-[1.5rem]" color="#090C9B" />
            </label>
            <input
              className="font-md w-full text-sm p-2 border border-[#506ee1] transition duration-300  hover:shadow hover:border-[#7192e9] outline-none focus:border-[#9fb8f1] focus:shadow-md  mt-2 placeholder:text-[#7192e9] text-[#090C9B] rounded-md "
              id="confirmPassword"
              type="password"
              placeholder="confirm new password"
            />
          </div>
          <button className="text-sm p-2  transition duration-300  hover:shadow-md hover:bg-[#020973]  outline-none mt-2  text-[#9fb8f1] rounded-md bg-[#090C9B] text-[1rem] font-bold">
            Reset
          </button>
        </form>
      </div>
    </section>
  );
};
export default App;
