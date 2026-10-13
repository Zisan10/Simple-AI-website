import React from "react";
import {
  GiBrain,
  GiDelicatePerfume,
  GiEyeTarget,
  GiLifeSupport,
  GiRobotGrab,
  GiRobotHelmet,
  GiWashingMachine,
} from "react-icons/gi";
import {
  BsFillTrainFreightFrontFill,
  BsTypeStrikethrough,
} from "react-icons/bs";
import {
  RiAiGenerate,
  RiFacebookBoxLine,
  RiFacebookCircleFill,
  RiFacebookLine,
  RiGeminiFill,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";

const MainPage = () => {
  return (
    <div>
      {/* header section  */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 sticky top-0 text-white bg-linear-to-tr from-purple-950 via-black to-blue-950">
        <h4>
          <a href="/" className="text-3xl font-bold cursor-pointer">
            A<span className="text-blue-600">i</span>
          </a>
        </h4>
        <div className="flex justify-between items-center gap-x-10">
          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-x-10 font-semibold">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-600 transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-blue-600 transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-blue-600 transition-all duration-300">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-blue-600 transition-all duration-300">
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <a
            href=""
            className="bg-blue-600 px-10 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 active:bg-blue-800">
            Contact
          </a>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-linear-to-br text-white from-purple-950 via-black to-blue-950">
        <main>
          {/* hero area start  */}
          <section>
            <div className="lg:min-h-screen h-98 scroll-smooth flex justify-between items-center-safe gap-10">
              <div>
                <div>
                  <p className="lg:text-md text-sm font-bold text-black bg-white inline">
                    Let's Learn...
                  </p>
                  <h3 className="lg:text-5xl text-3xl font-bold py-3">
                    Artificial Intelligence (AI)
                  </h3>
                  <p className="text-zinc-100 lg:text-lg text-md pb-5">
                    Understand AI concepts without technical jargen. Start your
                    joureny today.
                  </p>
                </div>
                <div className="flex flex-row gap-x-5">
                  <button className="bg-blue-600 px-10 py-2 cursor-pointer rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 active:bg-blue-800">
                    Start Now
                  </button>
                  <button className="border border-blue-500 cursor-pointer px-10 py-2 rounded-lg font-semibold active:bg-blue-800">
                    Explore Topics
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="./hero.png"
                  alt="hero image"
                  className="w-full h-full"
                />
              </div>
            </div>
          </section>
          {/* what is ai  */}
          <section>
            <div className="pb-20">
              <h2 className="text-center font-bold text-3xl mb-10">
                What is AI<span className="text-blue-500">?</span>
              </h2>
              <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
                <div className="lg:w-3/6 w-full h-56 bg-linear-to-b from-[#00b7ff] to-[#ff30ff] rounded-lg border-2 outline outline-purple-600 hover:outline-0 hover:border-blue-600 border-transparent hover:shadow-2xl ease-in-out hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer p-5 ">
                  <div className="flex justify-between items-center gap-3 pb-5">
                    <h3 className="text-2xl font-bold">AI Definition</h3>
                    <i className="bg-zinc-900 text-2xl p-2 rounded-lg text-purple-600">
                      <GiBrain />
                    </i>
                  </div>
                  <p className="text-md font-md text-black">
                    AI is about teaching machines to "think" and "act"
                    intelligently, though current systems are still far from
                    replicating the full depth of human cognition
                  </p>
                </div>
                {/* second  */}
                <div className="lg:w-3/6 w-full h-56 bg-linear-to-tr from-zinc-800 to-purple-950 bg-transparent rounded-lg border-2 outline outline-purple-600 hover:outline-0 hover:border-blue-600 border-transparent hover:shadow-2xl ease-in-out hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer p-5 ">
                  <div className="flex justify-between items-center gap-3 pb-5">
                    <h3 className="text-2xl font-bold">Real Life Example</h3>
                    <i className="bg-zinc-900 text-2xl p-2 rounded-lg text-purple-600">
                      <GiLifeSupport />
                    </i>
                  </div>
                  <p className="text-md font-md text-blue-700">
                    A simple real-life example is Netflix, which recommends
                    movies and shows based on what you’ve watched before.
                  </p>
                </div>
                {/* third */}
                <div className="lg:w-3/6 w-full h-56 bg-linear-to-tr from-zinc-800 to-purple-950 bg-transparent rounded-lg border-2 outline outline-purple-600 hover:outline-0 hover:border-blue-600 border-transparent hover:shadow-2xl ease-in-out hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer p-5 ">
                  <div className="flex justify-between items-center gap-3 pb-5">
                    <h3 className="text-2xl font-bold">AI Definition</h3>
                    <i className="bg-zinc-900 text-2xl p-2 rounded-lg text-purple-600">
                      <BsTypeStrikethrough />
                    </i>
                  </div>
                  <div className=" flex justify-between items-center gap-x-2">
                    <div>
                      <h4 className="text-sm font-bold pb-2">
                        Based on Capabilities
                      </h4>
                      <ul className="text-sm list-disc ml-3 text-blue-700">
                        <li>Narrow AI (Weak AI)</li>
                        <li>General AI (Strong AI)</li>
                        <li>Superintelligent AI</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold pb-2">
                        Based on Functionalities
                      </h4>
                      <ul className="text-sm list-disc ml-3 text-blue-700">
                        <li>Reactive Machines</li>
                        <li>Limited Memory</li>
                        <li>Self-Aware AI</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* AI works  */}
          <section>
            <div className="pb-20">
              <h2 className="text-center font-bold text-3xl mb-10">
                How AI Works<span className="text-blue-500">?</span>
              </h2>
              <div className="flex justify-center items-center gap-px-5">
                <div className="flex justify-between items-center lg:gap-3 gap-1 border border-blue-600 p-3 lg:w-xl w-lg rounded-lg">
                  <span className="lg:px-5 text-sm lg:text-md px-2 lg:py-2 py-1 rounded-lg bg-linear-to-tr from-purple-800 to-blue-950 bg-transparent">
                    Data
                  </span>
                  <div className="text-blue-700">⇨</div>
                  <span className="lg:px-5 text-sm lg:text-md px-2 lg:py-2 py-1 rounded-lg bg-linear-to-tr from-zinc-800 to-purple-950 bg-transparent">
                    Algorithm
                  </span>
                  <div className="text-purple-700">⇨</div>
                  <span className="lg:px-5 text-sm lg:text-md px-2 lg:py-2 py-1 rounded-lg bg-linear-to-tr from-blue-800 to-purple-950 bg-transparent">
                    Training
                  </span>
                  <div className="text-blue-700">⇨</div>
                  <span className="mr-1 px-5 text-sm lg:text-md py-2 rounded-lg bg-linear-to-tr from-zinc-800 to-purple-950 bg-transparent">
                    Prediction
                  </span>
                </div>
              </div>
              {/* works layouts */}
              <div className="pt-10">
                <p className="text-md font-bold text-black bg-blue-50 inline p-1 rounded-md">
                  Let's Learn more...
                </p>
                <div className="pt-5 flex flex-col justify-between items-center gap-y-5">
                  <div className="flex flex-col gap-y-5 lg:flex-row lg:justify-between items-center gap-x-5">
                    <div className="lg:w-3/6 w-full h-52 flex justify-between items-center gap-x-3 bg-linear-to-tr from-black to-purple-950 bg-transparent rounded-lg border-transparent transition-all duration-300 cursor-pointer p-5 ">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          What is Data<span className="text-blue-500">?</span>
                        </h4>
                        <p className="text-md font-md text-blue-400">
                          Data is raw information such as numbers, text, or
                          measurements that can be collected and stored.
                          <span className="hidden lg:block">
                            When analyzed, data becomes meaningful insights that
                            help in decision-making.
                          </span>
                        </p>
                      </div>
                      <img
                        src="./data.jpg"
                        alt="Data"
                        className="w-50 h-40 rounded-lg hidden lg:block"
                      />
                    </div>
                    {/* algorithm  */}
                    <div className="lg:w-3/6 w-full h-52 flex justify-between items-center gap-x-3 bg-linear-to-tr from-purple-950 to-black bg-transparent rounded-lg border-transparent transition-all duration-300 cursor-pointer p-5 ">
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          What is Algorithm
                          <span className="text-blue-500">?</span>
                        </h4>
                        <p className="text-md font-md text-blue-400">
                          an algorithm is a set of rules or instructions that
                          tells the computer how to solve problems or make
                          decisions.{" "}
                          <span className="hidden lg:block">
                            {" "}
                            For example, machine learning algorithms learn from
                            data to make predictions.
                          </span>
                        </p>
                      </div>
                      <img
                        src="./algorithm.jpg"
                        alt="Data"
                        className="w-50 h-40 rounded-lg hidden lg:block"
                      />
                    </div>
                  </div>
                  <div className="lg:hidden block">
                    <button className=" px-5 cursor-pointer active:bg-amber-950 py-2 rounded-lg bg-linear-to-tr from-purple-800 to-blue-950 bg-transparent">
                      Learn More
                    </button>
                  </div>
                  {/* training  */}
                  <div className="hidden lg:block">
                    <div className="flex justify-between items-center gap-x-5">
                      <div className="w-3/6 h-52 flex justify-between items-center gap-x-3 bg-linear-to-tr from-black to-purple-950 bg-transparent rounded-lg border-transparent transition-all duration-300 cursor-pointer p-5 ">
                        <div>
                          <h4 className="font-bold text-lg mb-2">
                            What is Training
                            <span className="text-blue-500">?</span>
                          </h4>
                          <p className="text-md font-md text-blue-400">
                            Training means teaching a model by feeding it large
                            amounts of data so it can learn patterns and make
                            predictions. For example, a machine learning model
                            can be trained with thousands of images of cats and
                            dogs to recognize the difference between them.
                          </p>
                        </div>
                        <img
                          src="./training.jpg"
                          alt="Data"
                          className="w-50 h-40 rounded-lg"
                        />
                      </div>
                      {/* prediction  */}
                      <div className="w-3/6 h-52 flex justify-between items-center gap-x-3 bg-linear-to-tr from-purple-950 to-black bg-transparent rounded-lg border-transparent transition-all duration-300 cursor-pointer p-5 ">
                        <div>
                          <h4 className="font-bold text-lg mb-2">
                            What is Prediction
                            <span className="text-blue-500">?</span>
                          </h4>
                          <p className="text-md font-md text-blue-400">
                            Prediction/output is the result a trained model
                            produces after analyzing input data. For example, if
                            you give a model an image of a cat, the output might
                            be the prediction “cat.”
                          </p>
                        </div>
                        <img
                          src="./output.jpg"
                          alt="Data"
                          className="w-50 h-40 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* AI Technology  */}
          <section>
            <div className="pb-20">
              <h2 className="text-center font-bold text-3xl mb-10">
                Types of AI Technolog
                <span className="text-4xl text-blue-600">y</span>
              </h2>
              <div className="flex flex-col justify-between items-center gap-y-5">
                <div className="flex justify-between items-center gap-x-5">
                  <div className="w-3/6 h-60 bg-linear-to-b from-[#00b7ff] to-[#ff30ff] rounded-lg cursor-pointer p-5 ">
                    <div className="flex justify-between items-center gap-3 pb-5">
                      <h3 className="text-2xl font-bold">Machine Learning</h3>
                      <i className="bg-transparent text-2xl p-2 rounded-lg text-purple-600">
                        <GiWashingMachine />
                      </i>
                    </div>
                    <p className="text-md font-md text-black pb-5">
                      Machine learning is a branch of artificial intelligence
                      that enables computers to learn from data and improve
                      their performance without being explicitly programmed.🤖
                    </p>
                    <span className="hover:text-blue-500 transition-all duration-300 underline active:bg-blue-800">
                      Learn More
                    </span>
                  </div>
                  <div className="w-3/6 h-60 bg-zinc-900 rounded-lg cursor-pointer p-5 ">
                    <div className="flex justify-between items-center gap-3 pb-5">
                      <h3 className="text-2xl font-bold">Deep Learning</h3>
                      <i className="bg-transparent text-2xl p-2 rounded-lg text-purple-600">
                        <GiDelicatePerfume />
                      </i>
                    </div>
                    <p className="text-md font-md text-blue-700 pb-5">
                      Deep learning is a type of machine learning that uses
                      artificial neural networks with many layers to
                      automatically learn complex patterns from large amounts of
                      data. 🧠
                    </p>
                    <span className="hover:text-blue-500 transition-all duration-300 underline active:bg-blue-800">
                      Learn More
                    </span>
                  </div>
                  <div className="w-3/6 h-60 bg-linear-to-b from-[#00b7ff] to-[#ff30ff] rounded-lg cursor-pointer p-5 ">
                    <div className="flex justify-between items-center gap-3 pb-5">
                      <h3 className="text-2xl font-bold">Computer Vision</h3>
                      <i className="bg-transparent text-2xl p-2 rounded-lg text-purple-600">
                        <GiEyeTarget />
                      </i>
                    </div>
                    <p className="text-md font-md text-black pb-5">
                      Computer vision is a field of artificial intelligence that
                      enables computers to interpret and understand images and
                      videos like humans do. 👁️
                    </p>
                    <span className="hover:text-blue-500 transition-all duration-300 underline active:bg-blue-800">
                      Learn More
                    </span>
                  </div>
                </div>
                {/* second  */}
                <div className="flex justify-between items-center gap-x-5">
                  <div className="w-3/6 h-60 bg-zinc-900 rounded-lg cursor-pointer p-5 ">
                    <div className="flex justify-between items-center gap-3 pb-5">
                      <h3 className="text-2xl font-bold">Natural Language</h3>
                      <i className="bg-transparent text-2xl p-2 rounded-lg text-purple-600">
                        <BsFillTrainFreightFrontFill />
                      </i>
                    </div>
                    <p className="text-md font-md text-blue-700 pb-5">
                      Natural language is the human language used for
                      communication, such as English or Bangla, that computers
                      try to understand and process in AI systems. 🗣️
                    </p>
                    <span className="hover:text-blue-500 transition-all duration-300 underline active:bg-blue-800">
                      Learn More
                    </span>
                  </div>
                  <div className="w-3/6 h-60 bg-linear-to-b from-[#00b7ff] to-[#ff30ff] rounded-lg cursor-pointer p-5 ">
                    <div className="flex justify-between items-center gap-3 pb-5">
                      <h3 className="text-2xl font-bold">Generativ Ai</h3>
                      <i className="bg-transparent text-2xl p-2 rounded-lg text-purple-600">
                        <RiAiGenerate />
                      </i>
                    </div>
                    <p className="text-md font-md text-black pb-5">
                      Generative AI is a type of artificial intelligence that
                      creates new content—such as text, images, music, or
                      code—by learning patterns from existing data.
                    </p>
                    <span className="hover:text-blue-500 transition-all duration-300 underline active:bg-blue-800">
                      Learn More
                    </span>
                  </div>
                  <div className="w-3/6 h-60 bg-zinc-900 rounded-lg cursor-pointer p-5 ">
                    <div className="flex justify-between items-center gap-3 pb-5">
                      <h3 className="text-2xl font-bold">Robotics</h3>
                      <i className="bg-transparent text-2xl p-2 rounded-lg text-purple-600">
                        <GiRobotHelmet />
                      </i>
                    </div>
                    <p className="text-md font-md text-blue-700 pb-5">
                      Robotics is the interdisciplinary field that designs,
                      builds, and programs machines capable of performing tasks
                      autonomously or with human guidance.
                    </p>
                    <span className="hover:text-blue-500 transition-all duration-300 underline active:bg-blue-800">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* popular AI tools  */}
          <section>
            <div className="pb-20">
              <h2 className="text-center font-bold text-3xl mb-10">
                Popular AI Tool<span className="text-4xl text-blue-600">s</span>
              </h2>
              <div className="flex flex-col justify-between items-center gap-y-5">
                <div className="flex justify-between items-center gap-x-5 relative">
                  <div className="w-3/6 h-64 border-b-2 border-[#00b7ff] border-r bg-linear-to-b from-[#00b7ff] to-[#ff30ff] rounded-lg cursor-pointer p-5">
                    <div className="flex justify-between items-center gap-3 pb-3">
                      <h3 className="text-2xl font-bold">Open AI-ChatGpt</h3>
                      <img
                        src="./gpt.png"
                        alt="gpt"
                        className="bg-white rounded-lg"
                      />
                    </div>
                    <p className="text-md font-md text-blue-700 ">
                      <h3 className="font-bold text-white inline">
                        What it does :
                      </h3>{" "}
                      AI-powered conversational agent
                    </p>
                    <p className="text-md font-md text-purple-700 pb-2">
                      <h3 className="font-bold text-white inline">
                        Who uses it :{" "}
                      </h3>
                      Everyone.
                    </p>
                    <p className="text-md font-md text-blue-700 pb-5">
                      ChatGPT is an advanced generative AI model developed by
                      OpenAI that can understand and produce human-like text for
                      conversation, problem-solving, and creative tasks.
                    </p>
                  </div>
                  <div className="w-3/6 h-64 border-b border-white border-r rounded-lg cursor-pointer p-5">
                    <div className="flex justify-between items-center gap-3 pb-3">
                      <h3 className="text-2xl font-bold">Google-Gemini</h3>
                      <div className="bg-white rounded-lg p-1">
                        <i className="text-4xl text-purple-600">
                          <RiGeminiFill />
                        </i>
                      </div>
                    </div>
                    <p className="text-md font-md text-blue-700 ">
                      <h3 className="font-bold text-white inline">
                        What it does :
                      </h3>{" "}
                      Advanced AI for productivity
                    </p>
                    <p className="text-md font-md text-purple-700 pb-2">
                      <h3 className="font-bold text-white inline">
                        Who uses it :{" "}
                      </h3>
                      Businesses and developers
                    </p>
                    <p className="text-md font-md text-blue-700 pb-5">
                      Gemini is Google’s multimodal AI model that can understand
                      and generate text, images, audio, and video to assist with
                      reasoning, creativity, and productivity.
                    </p>
                  </div>
                  <div className="w-3/6 h-64 bg-linear-to-b from-[#00b7ff] to-[#ff30ff] rounded-lg cursor-pointer p-5">
                    <div className="flex justify-between items-center gap-3 pb-3">
                      <h3 className="text-2xl font-bold">GitHub-Copilot</h3>
                      <div className="bg-white rounded-lg p-1">
                        <i className="text-4xl text-purple-600">
                          <RiGithubLine />
                        </i>
                      </div>
                    </div>
                    <p className="text-md font-md text-blue-700 ">
                      <h3 className="font-bold text-white inline">
                        What it does :
                      </h3>{" "}
                      Code Generation & assistance
                    </p>
                    <p className="text-md font-md text-purple-700 pb-2">
                      <h3 className="font-bold text-white inline">
                        Who uses it :{" "}
                      </h3>
                      Developers.
                    </p>
                    <p className="text-md font-md text-blue-700 pb-5">
                      GitHub Copilot is an AI-powered coding assistant that
                      suggests code and functions in real time to help
                      developers write software faster and more efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* real life ai works  */}
          <section>
            <div className="pb-20">
              <h2 className="text-center font-bold text-3xl mb-10">
                Real Life AI Work
                <span className="text-4xl text-blue-600">s</span>
              </h2>
              {/*------------------------------------- */}
              <div className="flex justify-center items-center ">
                <div class="relative w-150 h-100">
                  <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-40 h-40 rounded-full border-2 border-blue-500 
                    flex items-center justify-center text-center font-semibold animate-pulse [animation-duration:6s]">
                    Real Life AI Works
                  </div>
                  <div class="absolute top-10 left-10 border-2 border-green-500 px-6 py-2 rounded">
                    Health Care
                  </div>
                  <div class="absolute top-10 right-10 border-2 border-amber-500 px-6 py-2 rounded">
                    Self Driving Cars
                  </div>
                  <div class="absolute bottom-10 left-10 border-2 border-pink-500 px-6 py-2 rounded">
                    Education
                  </div>
                  <div class="absolute bottom-10 right-10 border-2 border-purple-500 px-6 py-2 rounded">
                    Business
                  </div>
                  <div class="absolute top-35 left-30 w-28 h-0.5 bg-green-500 rotate-30"></div>
                  <div class="absolute top-35 right-30 w-28 h-0.5 bg-amber-500 rotate-[-30deg]"></div>
                  <div class="absolute bottom-35 left-30 w-28 h-0.5 bg-pink-500 rotate-[-30deg]"></div>
                  <div class="absolute bottom-35 right-30 w-28 h-0.5 bg-purple-500 rotate-30"></div>
                </div>
              </div>
            </div>
          </section>
          {/* ai road map  */}
          <section>
            <div className="pb-20">
              <h2 className="text-center font-bold text-3xl mb-10">
                AI Learning Roadma
                <span className="text-4xl text-blue-600">p</span>
              </h2>
              <div className="flex justify-center items-center">
                <div className="flex justify-between items-center gap-x-1 relative">
                  <div className="bg-green-500 px-3 py-2 rounded-lg w-48 flex justify-center items-center">
                    Basic Programing
                  </div>
                  <div className="w-10 h-1 bg-linear-to-b from-black to-blue-500 right-0"></div>
                  <div className="bg-amber-500 px-3 py-2 rounded-lg w-48 flex justify-center items-center">
                    Python
                  </div>
                  <div className="w-10 h-1 bg-linear-to-b from-black to-blue-500 right-0"></div>
                  <div className="bg-pink-500 px-3 py-2 rounded-lg w-48 flex justify-center items-center">
                    Math (Linear Algebra)
                  </div>
                  <div className="w-10 h-1 bg-linear-to-b from-black to-blue-500 right-0"></div>
                  <div className="bg-purple-500 px-3 py-2 rounded-lg w-48 flex justify-center items-center">
                    Machine Learning
                  </div>
                  <div className="w-10 h-1 bg-linear-to-b from-black to-blue-500 right-0"></div>
                  <div className="bg-blue-500 px-3 py-2 rounded-lg w-48 flex justify-center items-center">
                    Deep Learning
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* footer  */}
        </main>
      </div>
      <footer>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-x-10 py-20 bg-linear-to-br from-blue-950 to-purple-950 border-purple-500">
          <div className="text-zinc-300 w-3/6">
            <div className="flex justify-start gap-x-2 pb-3 items-center">
              <i className="text-amber-500 text-3xl">
                <GiBrain />
              </i>
              <h4>
                <a
                  href="/"
                  className="text-3xl font-bold text-white cursor-pointer">
                  A<span className="text-blue-600">i</span>
                </a>
              </h4>
            </div>
            <span className="text-sm pb-5 block text-zinc-500">
              Your AI Learning Hub.
            </span>
            <p className="text-zinc-400">
              Discover the world of Artificial Intelligence with
              easy-to-understand guides and resources.
            </p>
          </div>
          <div className="text-zinc-300 w-3/6">
            <h2 className="text-2xl font-bold text-white pb-2">Useful Links</h2>
            <ul>
              <li className="flex flex-col justify-start gap-y-3">
                <a
                  href="#"
                  className="hover:text-blue-600 transition-all duration-300">
                  About Us
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-all duration-300">
                  support
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-all duration-300">
                  Privacu
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-all duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-zinc-300 w-3/6">
            <h2 className="text-2xl font-bold text-white pb-5">Follow Us</h2>
            <div className="flex justify-start items-center gap-x-10">
              <a
                href="#"
                className="hover:bg-green-500 transition-all duration-500 text-white font-bold text-lg p-2 rounded-lg border-b border-white">
                <RiFacebookLine />
              </a>
              <a
                href="#"
                className="hover:bg-amber-500 transition-all duration-500 text-white font-bold text-lg p-2 rounded-lg border-b border-white">
                <RiLinkedinLine />
              </a>
              <a
                href="#"
                className="hover:bg-pink-500 transition-all duration-500 text-white font-bold text-lg p-2 rounded-lg border-b border-white">
                <RiYoutubeLine />
              </a>
              <a
                href="#"
                className="hover:bg-purple-500 transition-all duration-500 text-white font-bold text-lg p-2 rounded-lg border-b border-white">
                <RiTwitterLine />
              </a>
              <a
                href="#"
                className="hover:bg-blue-500 transition-all duration-500 text-white font-bold text-lg p-2 rounded-lg border-b border-white">
                <RiGithubLine />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
