import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";

import { signup } from "../../services/auth/authService";

function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signup(data);

      toast.success("Account created successfully!");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.detail || "Signup failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <AuthInput
        label="Full Name"
        placeholder="Enter your full name"
        error={errors.name?.message}
        {...register("name", {
          required: "Name is required",
        })}
      />

      <AuthInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
        })}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Minimum 8 characters",
          },
        })}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating Account..." : "Sign Up"}
      </Button>
    </form>
  );
}

export default SignupForm;