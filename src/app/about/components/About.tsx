const About = () => {
  return (
    <div className="w-full max-w-screen-xl flex justify-center">
      <div className="flex flex-col justify-center gap-3">
        <h2
          className={`scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0`}
        >
          About think<span className="text-yellow-500">sync</span>
        </h2>
        <p className="leading-7 text-lg">
          Thinksync is a community of tech students getting together to help one
          another out. The tech industry relies on collaboration and networked
          learning. We provide a place for students to enhance their learning
          development for real-world scenarios.
        </p>
        <p className="leading-7 text-lg">
          We believe in the power of collaboration on the tech development
          ecosystem. We hope you enjoy using the platform and contributing to
          everyone&apos;s learning!🚀
        </p>
      </div>
    </div>
  );
};

export default About;
