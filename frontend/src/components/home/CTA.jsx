import Button from "../ui/Button";

function CTA() {
  return (
    <section className="bg-blue-600 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Land Your Dream Job?
        </h2>

        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">
          Join AIHire today and improve your resume, interview skills, and
          confidence with personalized AI-powered feedback.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button>
            Get Started Now
          </Button>

          <Button variant="secondary">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}

export default CTA;