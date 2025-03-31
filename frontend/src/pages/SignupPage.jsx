import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Registration Successful", data);
        navigate("/"); // Redirect to login page after registration
    };
    return (
        <div className="min-h-screen w-full flex items-center justify-center py-28 px-8 bg-[url('/img/signup-page-bg-img.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg rounded-lg flex items-center justify-center gap-2 flex-col px-2 py-4 md:w-[60%] md:px-8">
                <h2 className="text-2xl font-bold text-white">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
                    <label className="font-bold">Name</label>
                    <input {...register("name", { required: "Name is required" })} placeholder="Enter your name" className="border-[1px] border-gray-500 py-2 px-4 rounded"/>
                    {errors.name && <p>{errors.name.message}</p>}
                    <label className="font-bold">Phone No</label>
                    <input
                        type="tel"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter a valid 10-digit phone number",
                            },
                        })}
                        placeholder="Enter your phone number"
                        className="border-[1px] border-gray-500 py-2 px-4 rounded"
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <label className="font-bold">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Enter your email"
                        className="border-[1px] border-gray-500 py-2 px-4 rounded"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label className="font-bold">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Password must be at least 8 characters, include a letter, number & special character",
                            },
                        })}
                        placeholder="Enter a strong password"
                        className="border-[1px] border-gray-500 py-2 px-4 rounded"
                    />
                    {errors.password && <p>{errors.password.message}</p>}


                    <button type="submit" className="bg-blue-500 py-2 my-1.5 rounded font-medium text-white">Signup</button>
                </form>

                <p className="login-link text-sm">
                    Already have an account? <Link to="/" className="text-white">Login here</Link>
                </p>
            </div>
        </div>

    );
}