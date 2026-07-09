import { motion } from 'motion/react';
import { Code2, Smartphone, Layers } from 'lucide-react';
import { servicesData } from '../data';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-7 h-7 text-blue-600" />;
    case 'MonitorPhone':
      return <Smartphone className="w-7 h-7 text-cyan-600" />;
    case 'Layers':
      return <Layers className="w-7 h-7 text-indigo-600" />;
    default:
      return <Code2 className="w-7 h-7 text-primary" />;
  }
};

const getServiceBgStyles = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return 'bg-blue-50/80 border-blue-100/50';
    case 'MonitorPhone':
      return 'bg-cyan-50/80 border-cyan-100/50';
    case 'Layers':
      return 'bg-indigo-50/80 border-indigo-100/50';
    default:
      return 'bg-slate-50 border-gray-100';
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Abstract structural shapes */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] rounded-full bg-slate-50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-20" id="services-heading-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-sans">
            Specialization
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
            Services I Offer
          </h2>
          <div className="h-[4px] w-12 bg-primary rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10" id="services-grid">
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 15px 35px -10px rgba(15, 23, 42, 0.05)" }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-blue-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                id={`service-card-${service.id}`}
              >
                {/* Custom gradient background flash on hover */}
                <div className="absolute inset-0 bg-linear-to-b from-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Service Icon Box */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 group-hover:scale-105 transition-transform ${getServiceBgStyles(service.iconName)}`}>
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Details */}
                <h3 className="font-sans font-bold text-gray-900 text-xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Dynamic visual indicator link */}
                <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Inquire about this</span>
                  <span className="text-sm">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
