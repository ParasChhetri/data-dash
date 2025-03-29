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
            <div className="border min-h-screen">
                <h2>Student Registration Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label>Semester</label>
                    <select {...register("semester", { required: "Semester is required" })}>
                        <option value="">Select Semester</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                    </select>
                    {errors.semester && <p>{errors.semester.message}</p>}

                    <label>Roll No</label>
                    <input
                        type="text"
                        {...register("rollno", {
                            required: "Roll number is required",
                            pattern: {
                                value: /^[A-Za-z0-9]+$/,
                                message: "Only letters and numbers are allowed",
                            },
                        })}
                        placeholder="Enter your roll number"
                    />
                    {errors.rollno && <p>{errors.rollno.message}</p>}

                    <label>Phone No</label>
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
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label>Password</label>
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
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <label>Role</label>
                    <input type="text" {...register("role")} value="Student" disabled />

                    <button type="submit">Register</button>
                </form>

                <p className="login-link">
                    Already have an account? <Link to="/">Login here</Link>
                </p>
            </div>
    );
}