function About() {
  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <div>
          <h4>Afolabi Oluwasegun</h4>
          <p>Front-End Mobile/Web Developer</p>
        </div>
      </div>
      <div className="flex flex-row bg-green-100 w-fit p-2">
        <a
          className="mr-3 text-sm text-green-400"
          href="https://github.com/lekkss"
        >
          GitHub
        </a>
        <a
          className="mr-3 text-sm text-blue-600"
          href="https://www.linkedin.com/in/afolabi-oluwasegun-59b7b489/"
        >
          LinkedLn
        </a>
      </div>
    </div>
  );
}

export default About;
