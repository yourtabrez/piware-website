import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import { techCategories, techItems } from '../../data/techStack';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  const filteredItems = activeCategory === 'all' 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      id="stack" 
      className="py-24 bg-white border-t border-slate-200 relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Engineering Stack"
            title="Industry-Standard Silicon, CAD & Measurement Tools."
            description="We work with proven, high-reliability toolchains trusted by top electronics and aerospace hardware manufacturers globally."
            align="left"
          />
        </motion.div>

        {/* Filter Category Tabs (Smooth touch scrolling on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-8 pb-2 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm font-bold'
                  : 'bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Tech Badges Grid with Smooth Category-Switch In-Transition */}
        <motion.div 
          key={activeCategory}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.025,
                delayChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, scale: 0.92, y: 12 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
                },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-card hover:border-slate-300 hover:shadow-card-hover transition-all flex flex-col items-center text-center justify-between group min-h-[120px]"
            >
              <div className="h-12 w-full flex items-center justify-center mb-2">
                {item.isText ? (
                  <span className="font-mono font-bold text-base text-slate-900 group-hover:text-black transition-colors">
                    {item.textBadge}
                  </span>
                ) : (
                  <img
                    src={item.image}
                    alt={`${item.name} logo - Piware Engineering Stack`}
                    className="max-h-9 max-w-[85%] object-contain filter group-hover:scale-105 transition-all"
                    loading="lazy"
                  />
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-slate-900 transition-colors m-0">
                  {item.name}
                </h4>
                <div className="text-[10px] font-mono text-slate-500 line-clamp-1 mt-0.5 font-medium">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
