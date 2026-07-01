import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Card from "../ui/Card";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Card>
          <div className="text-center mb-8">
            <Logo />

            <h1 className="mt-6 text-3xl font-bold text-slate-900">
              {title}
            </h1>

            <p className="mt-2 text-slate-600">
              {subtitle}
            </p>
          </div>

          {children}

          {footerText && (
            <p className="mt-6 text-center text-sm text-slate-600">
              {footerText}{" "}
              <Link
                to={footerLink}
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                {footerLinkText}
              </Link>
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}

export default AuthLayout;