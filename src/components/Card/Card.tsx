import { cn } from '@/utils/cn';
import Styles from './Card.module.css';

const Card = ({
  children,
  className,
  shiny,
}: {
  children?: React.ReactNode;
  className?: string;
  shiny?: boolean;
}): React.JSX.Element => {
  return (
    <div className={cn("p-5 rounded-lg shadow-lg bg-transparent border border-primary-500 text-primary-900", className, shiny && Styles.shiny)}>
      {children}
    </div>
  );
};

export default Card
