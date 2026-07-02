import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";

import { login as loginUser } from "../../services/auth/authService";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Call backend
      const response = await loginUser(data);

      // Update Auth Context
      login(response.user);

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.detail || "Invalid email or password"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
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
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing In..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;