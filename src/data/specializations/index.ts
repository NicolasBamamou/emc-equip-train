import { heavyEquipmentSpecialization } from './heavy-equipment';
import { miningSafetySpecialization } from './mining-safety';
import { dieselMechanicsSpecialization } from './diesel-mechanics';
import { miningEngineeringSpecialization } from './mining-engineering';
import { electricalMechatronicsSpecialization } from './electrical-mechatronics';
import { operationsManagementSpecialization } from './operations-management';
import { softSkillsSpecialization } from './soft-skills';

// Export all specializations
export const specializations = [
  heavyEquipmentSpecialization,
  miningSafetySpecialization,
  dieselMechanicsSpecialization,
  miningEngineeringSpecialization,
  electricalMechatronicsSpecialization,
  operationsManagementSpecialization,
  softSkillsSpecialization,
];

// Export individual specializations for specific imports
export {
  heavyEquipmentSpecialization,
  miningSafetySpecialization,
  dieselMechanicsSpecialization,
  miningEngineeringSpecialization,
  electricalMechatronicsSpecialization,
  operationsManagementSpecialization,
  softSkillsSpecialization,
};

// Type definitions
export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  description: string;
  topics: string[];
  certification: string;
}

export interface Subcategory {
  id: string;
  title: string;
  courses: Array<{ id?: string; title: string; label?: string }>;
}

export interface Specialization {
  id: string;
  title: string;
  image: string;
  introduction: string;
  description: string;
  coreCourses: string[];
  certifications: string[];
  rating: number;
  courses: Course[];
  subcategories?: Subcategory[];
} 