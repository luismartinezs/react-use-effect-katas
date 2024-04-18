import { cn } from '@/utils/cn';

const Card = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}): React.JSX.Element => {
  return (
    <div className={cn("p-5 rounded-lg shadow-lg bg-transparent border border-primary-500 text-primary-900", className)}>
      {children}
    </div>
  );
};

export default Card
