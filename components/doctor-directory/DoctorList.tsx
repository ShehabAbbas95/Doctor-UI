"use client";

import { useState } from "react";
import { Doctor, Appointment } from "@/lib/types";
import DoctorCard from "./DoctorCard";
import BookingModal from "../booking/BookingModal";
import { generateAppointmentSlots } from "@/lib/utils";

interface DoctorListProps {
  doctors: Doctor[];
  onBookAppointment: (appointment: Appointment) => void;
}

export default function DoctorList({
  doctors,
  onBookAppointment,
}: DoctorListProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleConfirmBooking = (appointment: Appointment) => {
    onBookAppointment(appointment);
    setIsBookingModalOpen(false);
  };

  if (doctors.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-lg font-medium">
          No doctors match your search criteria
        </h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your filters to see more results
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBookClick={() => handleBookClick(doctor)}
          />
        ))}
      </div>

      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          isOpen={isBookingModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
          availableSlots={generateAppointmentSlots()}
        />
      )}
    </div>
  );
}
