import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/forms/SignupForm";

function Signup() {
  return (
    <AuthLayout
      title="Create your AIHire account"
      subtitle="Start preparing for your dream job."
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;