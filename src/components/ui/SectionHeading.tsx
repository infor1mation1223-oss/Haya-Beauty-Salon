import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span
          className={`inline-block text-sm font-medium tracking-wider uppercase mb-4 ${
            light ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 ${
          light ? 'text-white' : 'text-[var(--color-text)]'
        }`}
      >
        {title}
      </h2>
      {centered && (
        <div className="flex justify-center mb-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]" />
        </div>
      )}
      {children}
    </div>
  );
}
