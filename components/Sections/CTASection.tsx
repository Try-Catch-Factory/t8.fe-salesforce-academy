'use client'
import CTAButton from "@/authentication/components/CTAButton";

const CTASection: React.FC = () => {
  return (
    <section className="bg-customGreen p-4 sm:px-20 flex items-center justify-around">
      
      <CTAButton />
        
      <p className="flex-1 text-2xl font-black font-poppins bg-gradient-to-r from-16222A to-3A6073 text-transparent bg-clip-text text-right">APRENDE, DESCUBRE, COMUNICATE.</p>
        
        
      
    </section>
  );
}

export default CTASection;