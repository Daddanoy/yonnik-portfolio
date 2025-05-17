import { RevealOnScroll } from "./RevealOnScroll"

export const About = () => {

  const frontendSkills = ["React", "Javascript", "Zustand", "TailwindCSS", "Axios"]
  const backendSkills = ["Node.js", "Express", "Auth(JWT)", "MongoDB", "RESTful API", "Sockets.io"]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
     
      <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6">
        I’m a self-taught developer who started by building small passion projects and quickly got hooked on the full development process — from crafting interfaces to structuring APIs. Along the way, I’ve deepened my understanding through hands-on projects, online courses like CS50, and countless hours of reading, testing, and iterating. I thrive when learning something new and turning that knowledge into something real and usable. My goal now is to join a team where I can grow, contribute, and keep pushing myself toward becoming a better engineer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech,key)=>(
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" key={key}>{tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech,key)=>(
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" key={key}>{tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

              <h3 className="text-xl font-bold mb-4">📚 Learning Journey</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ">
              <li><strong>CS50: Introduction to Computer Science</strong></li>
      <li>Built full-stack apps while learning React, Node.js, MongoDB</li>
      <li>Studied via Codecademy, YouTube tutorials, and docs</li>
      <li>Actively learning system design and backend architecture</li>
                
              </ul>
            </div>

             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

              <h3 className="text-xl font-bold mb-4">🛠 Skill Development</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Implemented real-time features using Socket.IO</li>
      <li>Built and deployed REST APIs with Express & MongoDB</li>
      <li>Handled user auth with JWT and session management</li>
      <li>Focused on clean code, reusability, and UI/UX experience</li>
    </ul>
            </div>
            
      </div>
      </div>
      </RevealOnScroll>
    </section>
  )

}