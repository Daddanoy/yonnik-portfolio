import { RevealOnScroll } from "./RevealOnScroll"
import ehubDemo from '../../assets/ehubDemo.mov';
import tableDaysDemo from '../../assets/tabledaysdemo.mov';


export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2 ">E-Hub</h3>
            <p className="text-gray-400 mb-4">A streamlined social hub for managing friendships, events, and conversations—all in one place. </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Express", "Cloudinary","Mongo","Sockets" ].map((tech,key)=>(
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" key={key}>{tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a href="https://ehub-app-1.onrender.com/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2 ">TableDay</h3>
            <p className="text-gray-400 mb-4">A term based data visualization tool for tracking learning progress</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Mongo", "Express",  ].map((tech,key)=>(
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" key={key}>{tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a href="https://table-day-1.onrender.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4"  target="_blank" 
  rel="noopener noreferrer">View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2 ">E-Hub-Demo</h3>
              <p className="text-gray-400 mb-4">Feature walk-through of the Lykahub project.</p>
  <video
    src={ehubDemo}
    controls
    className="w-full rounded-lg border mt-4"
  />

            
          </div>

          <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2 ">TableDay-Demo</h3>
            <p className="text-gray-400 mb-4">Feature walk-through of the TableDay project.</p>
  <video
    src={tableDaysDemo}
    controls
    className="w-full rounded-lg border mt-4"
  />

            <div className="flex justify-between items-center">
             
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}


