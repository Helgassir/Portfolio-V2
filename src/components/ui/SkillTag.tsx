import { HTMLAttributes } from 'react';

interface SkillTagProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  color?: string;
}

export default function SkillTag({ 
  name, 
  color = 'bg-primary-100 text-primary-700',
  ...props 
}: SkillTagProps) {
  return (
    <div 
      className={`px-3 py-1.5 rounded-md text-sm font-medium ${color}`}
      {...props}
    >
      {name}
    </div>
  );
}