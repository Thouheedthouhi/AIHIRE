import Logo from "../common/Logo";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <Logo />
            <p className="mt-2 text-sm text-slate-400">
              AI-powered resume analysis and interview preparation.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              Features
            </a>

            <a href="#" className="hover:text-white transition">
              About
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </div>

        <div className="mt-6 border-t border-slate-700 pt-4 text-center text-xs text-slate-500">
          © 2026 AIHire. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;