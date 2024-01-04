import Image from 'next/image'
import Link from 'next/link'
import '@/app/globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-blue">
      <div className="my-20">
        <Image 
          src="/images/Ashleigh Kelley(2).png"
          width={400}
          height={400} 
          alt="Ashleigh Kelley"
        />
      </div>
      <div className="text-sky-blue text-center max-w-5xl">
        <p>Ashleigh Kelley is a seasoned software engineer with a wealth of expertise spanning nine years, 
          encompassing both production support and software development. Graduating with a Bachelor of Science in 
          Computer Engineering from Clemson University in 2014, Ashleigh has honed her skills and knowledge to 
          become a proficient professional in the field.</p><br></br>

        <p>Currently residing in the vibrant Tampa Bay, FL area, Ashleigh brings a unique blend of technical prowess
           and business acumen to her work. Throughout her career, Ashleigh has demonstrated a commitment to excellence in 
           software engineering, with a strong focus on agile development methodologies. With a proactive and collaborative approach 
           to problem-solving, Ashleigh has contributed to the success of numerous projects and has become a valuable asset in the 
           ever-evolving landscape of software development.</p>
      </div>
      <div className="my-20 grid text-center lg:max-w-5xl lg:w-50 lg:mb-10 lg:grid-cols-2 lg:text-left space-x-4">
        <Link
          href="/experience"
          className="group rounded-lg border px-5 py-4 hover:border-orange"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-blue-grey`}>
            Business{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-orange">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-sky-blue opacity-50`}>
            Resume, professional experience
          </p>
        </Link>

        <Link
          href="/interests"
          className="group rounded-lg border px-5 py-4 hover:border-orange"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-blue-grey`}>
            Casual{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-orange">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-sky-blue opacity-50`}>
            Personal interests, fun API integrations
          </p>
        </Link>
      </div>
      <div className='flex space-x-4'>
        <Link 
          rel="icon"
          href="https://www.linkedin.com/in/ashleighlkelley"
        >
          <Image 
            src="/images/LI-In-Bug.png"
            width={35}
            height={35} 
            alt="LinkedIn"
          />
        </Link>
        <Link 
          rel="icon"
          href="https://github.com/ashleigh-kelley"
        >
          <Image 
            src="/images/github-mark-white.png"
            width={30}
            height={30} 
            alt="GitHub"
          />
        </Link>
      </div>
    </main>
  )
}
