import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-24 text-center">
      <h1 className="text-6xl font-extrabold leading-tight text-slate-900">
        Prepare Smarter.
        <br />
        Interview Better.
        <br />
        Get Hired.
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-600">
        Upload your resume, practice interviews tailored to your dream role,
        and receive personalized feedback to improve every interview.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button onClick={() => navigate("/login")}>
          Start Your Interview
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Features
        </Button>
      </div>
    </section>
  );
}

export default Hero;