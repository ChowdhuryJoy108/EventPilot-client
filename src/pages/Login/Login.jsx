import {  useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";

const Login = () => {

  const {loginUser} = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
        await loginUser(email, password);
        alert('Login success');
        form.reset();
    } catch (error) {
        alert('Login failed', error);
    }
    


  };
  return (
    <>
      <div className="max-w-5xl mx-auto flex  flex-col-reverse gap-6 my-4 lg:flex-row-reverse">
        <div className="w-1/2 mx-auto py-4 px-8  border-slate-200 rounded-xl shadow-2xl">
          <div>
            <h2 className="text-xl text-black font-bold mb-4">
              Hi, Welcome 👋
            </h2>
            <h2 className="text-3xl text-black font-bold">
              Login Your Account{" "}
            </h2>
            <p className="mt-4">
              New to this website?{" "}
              <Link className="text-blue-700 font-bold" to={"/register"}>
                Register now
              </Link>{" "}
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col gap-4">
                <label className="text-gray-600 text-sm" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="py-2 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none mb-2 "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="password" className="text-gray-600 text-sm">
                  Password
                </label>
                <input
                  className="py-2 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none mb-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>

              <input
                className="bg-green-100  text-gray-600  py-2 px-4 rounded-lg mt-4"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Login;
