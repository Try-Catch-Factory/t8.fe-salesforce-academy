'use client'

const Footer: React.FC = () => {
    return (
      <section className="background-gray p-10 sm:px-20 flex items-center justify-around">
        
        <div><p className="text-black">© 2024 All rights reserved.</p></div>
        <div className="flex h-20 justify-around ">
            <img className="" src="/img/facebookicon.svg" alt="" />
            <img className="" src="/img/instagramicon.svg" alt="" />
            <img className="" src="/img/twittericon.svg" alt="" />
        </div>
        <div className="flex items-center">
          <img className="h-10 sm:h-15 rounded-full" src="/img/logo.svg" alt="" />
          <h1 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-poppins text-black">IDIOMA<span className="font-taprom">Mundo</span></h1>
        </div>
        
      </section>
    );
  }
  
  export default Footer;