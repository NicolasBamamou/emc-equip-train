import React, { useState, useMemo } from 'react';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid3X3, List } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  certification?: string;
}

interface CourseGridProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  showViewToggle?: boolean;
  variant?: 'default' | 'compact' | 'featured';
  maxItems?: number;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  title,
  subtitle,
  showFilters = true,
  showViewToggle = true,
  variant = 'default',
  maxItems
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply level filter
    if (levelFilter) {
      filtered = filtered.filter(course =>
        course.level.toLowerCase().includes(levelFilter.toLowerCase())
      );
    }

    // Apply max items limit
    if (maxItems) {
      filtered = filtered.slice(0, maxItems);
    }

    return filtered;
  }, [courses, searchTerm, levelFilter, maxItems]);

  const levels = useMemo(() => {
    const uniqueLevels = [...new Set(courses.map(course => course.level))];
    return uniqueLevels.sort();
  }, [courses]);

  return (
    <div className="space-y-6">
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center">
          {title && <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      {/* Filters */}
      {showFilters && (
        <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-col gap-3 w-full">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Level Filter */}
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tous les niveaux" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Tous les niveaux</SelectItem>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* View Toggle */}
          {showViewToggle && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
        {filteredCourses.length} cours trouvé{filteredCourses.length !== 1 ? 's' : ''}
        {searchTerm && ` pour "${searchTerm}"`}
        {levelFilter && ` (niveau: ${levelFilter})`}
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
            : 'space-y-3 sm:space-y-4'
        }>
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              variant={variant}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">
            Aucun cours trouvé
          </h3>
          <p className="text-sm sm:text-base text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseGrid; 