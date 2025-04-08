import { Link } from 'react-router-dom'
import '../assets/about.css'

const About: React.FC = () => {
  return (
    <div className="flex p-10">
    {/* Left side with overlapping images */}
    <div className="relative w-1/2">
      <img
        src="/jeremy.png"
        alt="Profile picture"
        className="hover:z-99 profile-pic absolute top-10 left-85 shadow-lg transition-transform duration-300 hover:scale-105 z-10 rounded"
      />

      <img
        src="/kilimanjaro.png"
        alt="Kilimanjaro"
        className="hover:z-99 kilimanjaro absolute top-0 left-5 shadow-lg transition-transform duration-300 hover:scale-105 z-9 rounded"
      />

      <img
        src="/jeremy_and_kc.png"
        alt="Wedding photo"
        className="hover:z-99 wedding-pic absolute top-60 left-0 shadow-lg transition-transform duration-300 hover:scale-105 rounded"
      />

      <iframe
        className="hover:z-99 w-full h-full absolute top-100 left-135 shadow-lg transition-transform duration-300 hover:scale-105 rounded z-8"
        src="https://www.youtube.com/embed/aZ-a_KB_Lio"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    {/* Right side with text box */}
    <div className="w-1/2 p-10">
      <div className="bg-white p-6 shadow-md rounded overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Hi Everyone!</h2>
        <p>
          I am a Washington native living in Seattle with my beautiful
          wife KC! I've lived most of my life between here, Vancouver,
          and Pullman WA, where I attended <Link className='text-cyan' to='/education'>WSU</Link> for my undergrad.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded overflow-y-auto">
        <p>
          I've been writing software full time since January 2016. Outside
          of writing code, I like to backpack/travel and have been to over
          50 countries. I also like to scuba dive, snowboard, skateboard,
          read, hike, camp, exercise.
        </p>
      </div>
    </div>
  </div>
  );
}

export default About;