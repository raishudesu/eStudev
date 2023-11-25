import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Team from "./Team";

const About = () => {
  return (
    <Card className="max-w-screen-xl">
      <CardHeader>
        <CardTitle
          className={`scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0`}
        >
          About think<span className="text-yellow-500">sync</span>
        </CardTitle>
        <CardDescription className="leading-7 text-lg">
          Thinksync is a community of tech students getting together to help one
          another out. The tech industry relies on collaboration and networked
          learning. We provide a place for students to enhance their learning
          development for real-world scenarios.
          <br />
          <br />
          We believe in the power of collaboration on the tech development
          ecosystem. We hope you enjoy using the platform and contributing to
          everyone&apos;s learning!🚀
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-12">
        <Team />
      </CardContent>
      <CardFooter>
        <p className="leading-7 text-lg text-muted-foreground">
          Our team is just a bunch of students. We have no office, but we come
          together online each day to build a student community and improve the
          tech careers of millions. Happy hacking! ❤️
        </p>
      </CardFooter>
    </Card>
  );
};

export default About;
