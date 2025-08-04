import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Clock, Users, Award } from 'lucide-react';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    price: string;
    image: string;
    certification?: string;
    link?: string; // Custom link for courses with dedicated pages
  };
  variant?: 'default' | 'compact' | 'featured';
  showActions?: boolean;
  specializationId?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  variant = 'default',
  showActions = true,
  specializationId
}) => {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  // Use custom link if provided, otherwise use default route structure
  const getCourseLinkUrl = () => {
    if (course.link) {
      return course.link;
    }
    return specializationId ? `/specialization/${specializationId}/course/${course.id}` : `/course/${course.id}`;
  };

  return (
    <Card className={`overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg min-h-[300px] sm:min-h-[350px] ${
      isFeatured ? 'ring-2 ring-primary/20' : ''
    }`}>
      <div className={`overflow-hidden ${isCompact ? 'h-32' : 'h-48 sm:h-56'}`}>
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <CardHeader className={`${isCompact ? 'pb-2' : ''} px-4 sm:px-6`}>
        <CardTitle className={`${isCompact ? 'text-sm' : 'text-base sm:text-lg'} line-clamp-2 leading-tight`}>
          {course.title}
        </CardTitle>
        {!isCompact && (
          <CardDescription className="flex items-center gap-2 text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            {course.duration}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className={`flex-grow ${isCompact ? 'pb-2' : ''} px-4 sm:px-6`}>
        {!isCompact && (
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-3 leading-relaxed">
            {course.description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
          <span className="bg-blue-100 text-primary px-2 py-1 rounded-full flex items-center gap-1 text-xs">
            <Users className="w-3 h-3" />
            <span className="truncate">{course.level}</span>
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
            <Award className="w-3 h-3" />
            <span className="truncate">{course.price}</span>
          </span>
        </div>
      </CardContent>
      
      {showActions && (
        <CardFooter className="pt-4 px-4 sm:px-6 pb-4 sm:pb-6">
          <Button asChild className="w-full text-xs sm:text-sm h-10 sm:h-11" size={isCompact ? 'sm' : 'default'}>
            <Link to={getCourseLinkUrl()}>
              {isCompact ? 'Voir' : 'En Savoir Plus'}
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CourseCard; 