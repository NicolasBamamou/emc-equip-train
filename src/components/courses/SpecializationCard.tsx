import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award, BookOpen } from 'lucide-react';

interface SpecializationCardProps {
  specialization: {
    id: string;
    title: string;
    image: string;
    introduction: string;
    description: string;
    coreCourses: string[];
    certifications: string[];
    rating: number;
    courses?: any[];
  };
  onSelect?: (id: string) => void;
  variant?: 'default' | 'compact' | 'featured';
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
  specialization,
  onSelect,
  variant = 'default'
}) => {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  const handleSelect = () => {
    if (onSelect) {
      onSelect(specialization.id);
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
      isFeatured ? 'ring-2 ring-primary/20' : ''
    } ${isCompact ? 'h-full' : ''}`}>
      <div className={`overflow-hidden ${isCompact ? 'h-32' : 'h-48 sm:h-56'}`}>
        <img 
          src={specialization.image} 
          alt={specialization.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <CardHeader className={`${isCompact ? 'pb-2' : ''} px-4 sm:px-6`}>
        <CardTitle className={`${isCompact ? 'text-sm' : 'text-lg sm:text-xl'} line-clamp-2 leading-tight`}>
          {specialization.title}
        </CardTitle>
        {!isCompact && (
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {specialization.introduction}
          </p>
        )}
      </CardHeader>
      
      <CardContent className={`flex-grow ${isCompact ? 'pb-2' : ''} px-4 sm:px-6`}>
        {!isCompact && (
          <p className="text-gray-700 mb-4 line-clamp-3 text-xs sm:text-sm leading-relaxed">
            {specialization.description}
          </p>
        )}
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(specialization.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            ({specialization.rating.toFixed(1)})
          </span>
        </div>

        {/* Core Courses */}
        {!isCompact && (
          <div className="mb-4">
            <h4 className="font-semibold text-xs sm:text-sm text-gray-700 mb-2 flex items-center gap-2">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              Cours phares
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {specialization.coreCourses.slice(0, 3).map((course, index) => (
                <li key={index} className="line-clamp-1">
                  • {course}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {!isCompact && (
          <div className="mb-4">
            <h4 className="font-semibold text-xs sm:text-sm text-gray-700 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Certifications
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {specialization.certifications.slice(0, 2).map((cert, index) => (
                <li key={index} className="line-clamp-1">
                  • {cert}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Course Count */}
        {specialization.courses && (
          <div className="text-xs text-gray-500">
            {specialization.courses.length} cours disponibles
          </div>
        )}
      </CardContent>
      
      {onSelect && (
        <div className="p-4 pt-0 px-4 sm:px-6">
          <Button 
            onClick={handleSelect}
            className="w-full text-xs sm:text-sm"
            size={isCompact ? 'sm' : 'default'}
          >
            Voir les cours
          </Button>
        </div>
      )}
    </Card>
  );
};

export default SpecializationCard; 