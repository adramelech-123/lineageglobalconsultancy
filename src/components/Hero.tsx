
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
          Transforming <br />
          Digital Futures
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            We help businesses navigate the complex digital landscape with innovative IT solutions and strategic consulting.
          </p>
          <button className="group flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
            Let's Talk
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        <div className="mt-16 relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Modern office space"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;