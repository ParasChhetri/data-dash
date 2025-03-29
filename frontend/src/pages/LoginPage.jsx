import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log("Login Successful", data);
        // You can add authentication logic here (e.g., API call, localStorage)
        navigate("/dashboard"); // Redirect to dashboard after login (if needed)
    };
    return (
        <div className="flex items-center justify-evenly flex-col md:flex-row">
            {/* <div className="bg-blue-100 h-screen w-full md:flex md:items-center md:justify-center hidden ">
                <img src="/img/login-page-img.webp" alt="" className="h-[600px] w-[60%]" />
            </div> */}
            <div className="bg-emerald-500"
                style={{
                    clipPath: "polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 0 0)"
                }}
            ></div>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 md:w-[50%]">
                <h2 className="text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-auto mx-auto gap-2 px-4 ">
                    {/* Email Field */}
                    <label className="font-medium">Email</label>
                    <input
                        className="border border-gray-400 py-2 px-4"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    {/* Password Field */}
                    <label className="font-medium">Password</label>
                    <input
                        className="border border-gray-400 py-2 px-4"
                        type="password"
                        {...register("password", {
                            required: "Password is required",

                        })}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit" className="bg-blue-500 my-2 py-2 rounded-full">Login</button>
                </form>

                <p className="font-medium">
                    Not registered? <Link to="/register" className="text-blue-500">Create an account</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
