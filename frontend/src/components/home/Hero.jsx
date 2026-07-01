import Button from "../ui/Button";

function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-6xl font-extrabold leading-tight text-slate-900">
        Prepare Smarter.
        <br />
        Interview Better.
        <br />
        Get Hired.
      </h1>

      <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-600">
        Upload your resume, practice interviews tailored to your dream role,
        and receive personalized feedback to improve every interview.
      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <Button>
          Start Your Interview
        </Button>

        <Button variant="secondary">
          View Features
        </Button>
      </div>
    </section>
  );
}

export default Hero;