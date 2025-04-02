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
        <div className="min-h-screen w-full flex items-center justify-center py-28 px-8 bg-[url('/img/signup-page-bg-img.jpg')] bg-no-repeat bg-center bg-cover">
            
            <div className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg rounded-lg flex items-center justify-center gap-2 flex-col px-2 py-4 md:w-[60%] md:px-8 lg:w-[40%] h-[400px]">
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

                    <button type="submit" className="bg-blue-500 my-2 py-2 rounded-full font-medium text-white">Login</button>
                </form>

                <p className="text-center font-medium">
                    Not registered? <Link to="/signup" className="text-blue-700">Create an account</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
