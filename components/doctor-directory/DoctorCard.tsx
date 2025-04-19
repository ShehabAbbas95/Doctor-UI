import Image from "next/image";
import { Doctor } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
  onBookClick: () => void;
}

export default function DoctorCard({ doctor, onBookClick }: DoctorCardProps) {
  const {
    name,
    image,
    specialty,
    rating,
    reviewCount,
    location,
    availability
  } = doctor;

  // Map availability to human-readable text and color
  const availabilityInfo = {
    high: { text: "High Availability", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
    medium: { text: "Medium Availability", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
    low: { text: "Low Availability", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={`Dr. ${name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-xl">Dr. {name}</h3>
          <p className="text-muted-foreground">{specialty}</p>
        </div>
        
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span className="font-medium">{rating}</span>
          <span className="text-muted-foreground">({reviewCount} reviews)</span>
        </div>
        
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <Badge variant="outline" className={`text-xs ${availabilityInfo[availability].color}`}>
            {availabilityInfo[availability].text}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={onBookClick}
          aria-label={`Book appointment with Dr. ${name}`}
        >
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
}