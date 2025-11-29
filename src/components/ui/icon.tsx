import * as Icons from 'lucide-react';

interface IconProps {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
  size?: number;
  className?: string;
}

export default function Icon({ name, fallback = 'CircleAlert', size = 24, className = '' }: IconProps) {
  const LucideIcon = Icons[name] || Icons[fallback];
  return <LucideIcon size={size} className={className} />;
}
