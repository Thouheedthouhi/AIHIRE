import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your AIHire journey."
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Sign Up"
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;