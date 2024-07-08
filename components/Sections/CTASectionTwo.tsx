'use client'
import CTAButton from "@/authentication/components/CTAButton";

const CTASectionTwo: React.FC = () => {
  return (
    <section className="bg-customGreen p-4 sm:px-20 flex items-center justify-around">
      <p className="flex-1 text-2xl font-black font-poppins bg-gradient-to-r from-16222A to-3A6073 text-transparent bg-clip-text text-left">¡No lo dudes más!</p>

      <CTAButton />

    </section>
  );
}

export default CTASectionTwo;