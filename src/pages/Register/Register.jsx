import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";


const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const handleSubmit = async( e )=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {
            name,
            photoUrl:photo,
            email,
            password,
        }
        try {
            await registerUser(userInfo)
            alert('register success');
            form.reset();
        } catch (error) {
            alert('register failed!', error);
        }
        

    }
  return (
    <>
    
      <div className="max-w-4xl mx-auto flex gap-4 py-8">
        <div className="w-[350px] py-4 px-8  border-slate-200 rounded-xl shadow-2xl">
          <div>
            <h2 className="text-3xl text-black font-bold">
              Create an Account{" "}
            </h2>
            <p className="mt-4">
              Already have an account?{" "}
              <Link className="text-blue-700 font-bold" to={"/login"}>
                Login now
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col gap-4">
                <label className="text-gray-600 text-sm" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="py-2 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none mb-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
             
                />
                
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-gray-600 text-sm" htmlFor="photo">
                  Photo URL
                </label>
                <input
                  className="py-2 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none mb-2"
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Your profile url"
                 
                />
              </div>
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
                value="Register"
              />
            </form>
          </div>
        </div>

        <div>
         
        </div>
      </div>
    </>
  );
};

export default Register;
