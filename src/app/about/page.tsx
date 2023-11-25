import { Card, CardContent, CardFooter } from "@/components/ui/card";
import About from "./components/About";
import Team from "./components/Team";

const AboutPage = () => {
  return (
    <section className="w-full mt-6 flex justify-center">
      <Card className="max-w-screen-xl p-6">
        <CardContent className="flex flex-col justify-center items-center gap-12">
          <About />
          <Team />
        </CardContent>
        <CardFooter>
          <p className="leading-7 text-lg">
            Our team is just a bunch of students. We have no office, but we come
            together online each day to build a student community and improve
            the tech careers of millions. Happy hacking! ❤️
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AboutPage;
