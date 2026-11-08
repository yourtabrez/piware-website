import React from 'react';

export default function SectionHead({ 
  eyebrow, 
  title, 
  description, 
  align = 'left',
  className = '' 
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border mb-4 ${
          isCenter ? 'mx-auto' : ''
        } bg-slate-100 text-slate-800 border-slate-200/90 shadow-sm`}>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
