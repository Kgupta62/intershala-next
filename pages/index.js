import { asyncCurrentUser, setStudent } from "@/store/Actions/StudentActions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);
    console.log(isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) dispatch(asyncCurrentUser());
        if (isAuthenticated) router.push("/auth/home");
    }, [isAuthenticated]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-white mb-8">INTERSHALA</h1>
            <div className="flex justify-center gap-4">
              <Link href="/login" className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Login Page
              </Link>
              <Link href="/register" className="text-white bg-green-700 hover:bg-green-800 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Register Page
              </Link>
            </div>
            <hr className="my-8 border-gray-200" />
            <button
              onClick={() => dispatch(setStudent())}
              className="text-white bg-indigo-700 hover:bg-indigo-800 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Run Action
            </button>
          </div>
        </div>
      );
      
      
      
};

export default index;
