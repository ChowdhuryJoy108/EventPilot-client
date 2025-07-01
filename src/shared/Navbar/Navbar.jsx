import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import Swal from "sweetalert2";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      await logoutUser();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Log Out Successful!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Log Out Failed!",
        text: `${error}`,
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/roadMaps"
          className={({ isActive }) =>
            `block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
              isActive
                ? "text-blue-700 font-bold"
                : "text-black dark:text-white"
            }`
          }
        >
          RoadMaps
        </NavLink>
      </li>

      {user && user.email ? (
        <li>
          <button
            onClick={handleLogOut}
            className="block py-2 px-3 text-black rounded-sm md:bg-transparent  md:p-0 dark:text-white"
          >
            Log Out
          </button>
        </li>
      ) : (
        <>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                  isActive
                    ? "text-blue-700 font-bold"
                    : "text-black dark:text-white"
                }`
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                  isActive
                    ? "text-blue-700 font-bold"
                    : "text-black dark:text-white"
                }`
              }
            >
              Log In
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 sticky z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-black text-xl font-bold">RoadSync</span>
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl text-gray-700 dark:text-white"
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 font-medium border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-transparent p-4 md:p-0">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { Link, NavLink } from "react-router-dom";
// import AuthContext from "../../providers/AuthContext";
// import Swal from "sweetalert2";
// import { MdAddCard } from "react-icons/md";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleLogOut = () => {
//     signOutUser()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Log Out Successful!",
//         });
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Log Out Failed!",
//           text: `${error}`,
//         });
//       });
//   };
//   const navLinks = (
//     <>
//       <li>
//         <NavLink
//           to={"/"}
//           class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//           aria-current="page"
//         >
//           Home
//         </NavLink>
//       </li>
//     </>
//   );
//   return (
//     <nav className="bg-white dark:bg-gray-900 py-4 sticky z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             RoadSync
//           </span>
//         </a>
//         <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <Link>
//             <button
//               type="button"
//               className="text-black text-3xl hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center "
//             >

//               <MdAddCard />
//             </button>
//           </Link>
//           {user && user.email ? (
//             <>
//               <button
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
//                 onClick={handleLogOut}
//               >
//                 Log Out
//               </button>
//             </>
//           ) : (
//             <>
//              <Link to={"/register"}>
//                 <button
//                   type="button"
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
//                 >
//                   Register
//                 </button>
//               </Link>
//               <Link to={"/login"}>
//                 <button
//                   type="button"
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
//                 >
//                   Log in
//                 </button>
//               </Link>

//             </>
//           )}
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
//             {navLinks}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
