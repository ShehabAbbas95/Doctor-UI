import { Doctor, Specialty } from "./types";

// List of specialties
export const specialties: Specialty[] = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Pediatrics",
  "Ophthalmology",
  "Orthopedics",
  "Psychiatry",
  "Oncology"
];

// Mock doctors data
export const doctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Jane Smith",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Cardiology",
    rating: 4.9,
    reviewCount: 124,
    location: "Downtown Medical Center",
    availability: "high"
  },
  {
    id: "doc-2",
    name: "Robert Johnson",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Neurology",
    rating: 4.7,
    reviewCount: 98,
    location: "Central Hospital",
    availability: "medium"
  },
  {
    id: "doc-3",
    name: "Maria Garcia",
    image: "https://images.pexels.com/photos/5998516/pexels-photo-5998516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Pediatrics",
    rating: 4.8,
    reviewCount: 156,
    location: "Children's Medical Center",
    availability: "high"
  },
  {
    id: "doc-4",
    name: "James Williams",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Dermatology",
    rating: 4.6,
    reviewCount: 87,
    location: "Skin & Wellness Clinic",
    availability: "low"
  },
  {
    id: "doc-5",
    name: "Sarah Brown",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Psychiatry",
    rating: 4.9,
    reviewCount: 112,
    location: "Mental Health Institute",
    availability: "medium"
  },
  {
    id: "doc-6",
    name: "David Lee",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Orthopedics",
    rating: 4.8,
    reviewCount: 143,
    location: "Sports Medicine Center",
    availability: "high"
  },
  {
    id: "doc-7",
    name: "Michelle Chen",
    image: "https://images.pexels.com/photos/5207104/pexels-photo-5207104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Ophthalmology",
    rating: 4.7,
    reviewCount: 92,
    location: "Vision Care Center",
    availability: "medium"
  },
  {
    id: "doc-8",
    name: "Thomas Wilson",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specialty: "Oncology",
    rating: 4.9,
    reviewCount: 178,
    location: "Cancer Treatment Institute",
    availability: "low"
  }
];