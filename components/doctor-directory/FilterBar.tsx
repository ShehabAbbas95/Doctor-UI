"use client";

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger,

  SelectValue 
} from "@/components/ui/select";
import { Specialty, Availability } from "@/lib/types";
import { specialties } from "@/lib/mock-data";

interface FilterBarProps {
  onFilterChange: (specialty: Specialty | "all", availability: Availability | "all") => void;
  selectedSpecialty: Specialty | "all";
  selectedAvailability: Availability | "all";
}

export default function FilterBar({ 
  onFilterChange, 
  selectedSpecialty, 
  selectedAvailability 
}: FilterBarProps) {
  
  const handleSpecialtyChange = (value: string) => {
    onFilterChange(value as Specialty | "all", selectedAvailability);
  };

  const handleAvailabilityChange = (value: string) => {
    onFilterChange(selectedSpecialty, value as Availability | "all");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-64">
        <label 
          htmlFor="specialty-select" 
          className="text-sm font-medium mb-1 block"
        >
          Specialty
        </label>
        <Select 
          value={selectedSpecialty} 
          onValueChange={handleSpecialtyChange}
        >
          <SelectTrigger id="specialty-select" className="w-full">
            <SelectValue placeholder="All Specialties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specialties</SelectItem>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full sm:w-64">
        <label 
          htmlFor="availability-select" 
          className="text-sm font-medium mb-1 block"
        >
          Availability
        </label>
        <Select 
          value={selectedAvailability} 
          onValueChange={handleAvailabilityChange}
        >
          <SelectTrigger id="availability-select" className="w-full">
            <SelectValue placeholder="All Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Availability</SelectItem>
            <SelectItem value="high">High Availability</SelectItem>
            <SelectItem value="medium">Medium Availability</SelectItem>
            <SelectItem value="low">Low Availability</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}