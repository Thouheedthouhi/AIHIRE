import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function CTA() {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-blue-600 py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Land Your Dream Job?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
          Join AIHire today and improve your resume, interview skills, and
          confidence with personalized AI-powered feedback.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Button onClick={() => navigate("/signup")}>
            Get Started Now
          </Button>

          <Button
            variant="secondary"
            onClick={scrollToFeatures}
          >
            Learn More
          </Button>

        </div>

      </div>
    </section>
  );
}

export default CTA;