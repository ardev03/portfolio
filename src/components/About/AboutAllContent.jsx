import React from 'react'
import bgImage from "../../assets/background2.jpg"

export default function AboutAllContent() {
  const skills = [
"React.js",
"JavaScript",
"Tailwind CSS",
"HTML5",
"CSS3",
"Bootstrap",
"Core Java",
"MySQL",
"Git",
"GitHub",
"VS Code",
"Vite"
];
const stats = [

{
number:"1+",
title:"Years Learning"
},

{
number:"8+",
title:"Projects Built"
},

{
number:"9+",
title:"Technologies"
},

{
number:"100%",
title:"Passion to Learn"
}

]
  return (
       <div className='w-f min-h-screen bg-cover bg-center bg-no-repeat'
               style={{ backgroundImage: `url(${bgImage})` }}>

  <div className="text-center max-w-4xl px-8 py-8 mx-auto">

  <p className="uppercase tracking-[8px] text-blue-400 px-7 py-9 font-semibold">
    About Me
  </p>

  <h1 className="text-5xl md:text-7xl font-bold mt-6 text-amber-50 leading-tight">
    Building
    <span className="text-blue-500"> Modern </span>
    Web Experiences
  </h1>

  <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-3xl mx-auto">
    I'm Arun Rana, a Frontend Developer passionate about creating
    fast, responsive, and intuitive web applications with modern
    technologies. I enjoy transforming ideas into beautiful digital
    products that deliver exceptional user experiences.
  </p>

</div>
<div className="backdrop-blur-xl bg-white/5 border px-8 py-8 border-white/10 rounded-3xl p-8">

<h2 className="text-3xl font-semibold text-amber-50 mb-6">
Who I Am
</h2>

<p className="text-zinc-400 leading-9">

I specialize in building responsive web applications using
React.js, JavaScript, Tailwind CSS, and modern frontend
technologies.

I enjoy solving real-world problems through clean,
maintainable code while continuously learning new tools and
best practices.

My goal is to build products that are not only visually
appealing but also performant, accessible, and user-friendly.

</p>

</div>
<div className="flex flex-wrap gap-4">

{skills.map((item)=>(
<div
key={item}
className="px-5 py-3 text-amber-50 rounded-full
bg-blue-500/10
border border-blue-500/30
hover:bg-blue-500
hover:text-white
transition duration-300">

{item}

</div>
))}

</div>
<div className="grid sm:grid-cols-2 gap-6">

{stats.map((item)=>(

<div
className="backdrop-blur-xl
bg-white/5
border border-white/10
rounded-3xl
p-8
hover:scale-105
transition duration-300">

<h1 className="text-6xl font-bold text-blue-500">
{item.number}
</h1>

<p className="text-zinc-400 mt-4">
{item.title}
</p>

</div>

))}

</div>
<div className="backdrop-blur-xl bg-gradient-to-1  from-blue-600/20 to-cyan-500/20 border border-blue-500/20 rounded-3xl p-10">

<h2 className="text-3xl font-bold">
Currently Looking For
</h2>

<p className="text-zinc-300 mt-6 leading-9">

I'm actively seeking Frontend Developer opportunities
where I can contribute to impactful products, collaborate
with talented engineers, and continue growing into a
Full-Stack Software Engineer while building scalable web
applications.

</p>

</div>
    </div>
  )
}
