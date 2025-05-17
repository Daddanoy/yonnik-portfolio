
import { RevealOnScroll } from "./RevealOnScroll"
import emailjs from "emailjs-com"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {

  const [formData, setFormData] = useState({
    from_name:"",
    email:"",
    messsage:""
  })

  const SERVICE_ID = "service_m4mwq1q"
  const TEMPLTE_ID = "template_nipfcpq"
  const PUBLIC_KEY = "woXGw38URFKIFolyN"


  const handleSubmit = (e)=>{
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLTE_ID, e.target, PUBLIC_KEY).then((result)=>{
      toast.success("Message Sent!")
      setFormData({name:"", email:"", message:""})
    }).catch(()=>alert("Oops! Something went wrong , please try again"))
  }
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 ">
      <RevealOnScroll>
        <div className="px-4 w-95 md:w-150">

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get in Touch</h2>
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input 
              type="text" 
              id="name"
               name="from_name" 
               required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-whte transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name:e.target.value })}
                 />
            </div>

            <div className="relative">
              <input 
              type="email" 
              id="email"
               name="email" 
               required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-whte transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com..."
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                 />
            </div>

            <div className="relative">
              <textarea 
              type="text" 
              id="message"
               name="message" 
               required
               rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-whte transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e)=>setFormData({...formData, message: e.target.value})}
                 />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send message</button>
            
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}


