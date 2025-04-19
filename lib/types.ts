// Doctor specialty types
export type Specialty = 
  | "Cardiology"
  | "Dermatology"
  | "Neurology"
  | "Pediatrics"
  | "Ophthalmology"
  | "Orthopedics"
  | "Psychiatry"
  | "Oncology";

// Availability levels
export type Availability = "high" | "medium" | "low";

// Doctor model
export interface Doctor {
  id: string;
  name: string;
  image: string;
  specialty: Specialty;
  rating: number;
  reviewCount: number;
  location: string;
  availability: Availability;
}

// Appointment status
export type AppointmentStatus = "confirmed" | "cancelled" | "completed";

// Appointment model
export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorImage: string;
  specialty: Specialty;
  location: string;
  dateTime: Date;
  status: AppointmentStatus;
}

// Time slot model for booking
export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}