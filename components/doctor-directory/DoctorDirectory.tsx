"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorList from "./DoctorList";
import FilterBar from "./FilterBar";
import AppointmentsList from "../appointments/AppointmentsList";
import { doctors } from "@/lib/mock-data";
import { Doctor, Appointment, Specialty, Availability } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

export default function DoctorDirectory() {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | "all">(
    "all"
  );
  const [selectedAvailability, setSelectedAvailability] = useState<
    Availability | "all"
  >("all");
  const { toast } = useToast();

  const handleFilter = (
    specialty: Specialty | "all",
    availability: Availability | "all"
  ) => {
    setSelectedSpecialty(specialty);
    setSelectedAvailability(availability);

    let filtered = [...doctors];

    if (specialty !== "all") {
      filtered = filtered.filter((doctor) => doctor.specialty === specialty);
    }

    if (availability !== "all") {
      filtered = filtered.filter(
        (doctor) => doctor.availability === availability
      );
    }

    setFilteredDoctors(filtered);
  };

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
    toast({
      title: "Appointment Confirmed",
      description: `Your appointment with Dr. ${
        appointment.doctorName
      } has been booked for ${new Date(appointment.dateTime).toLocaleString()}`,
    });
  };

  const cancelAppointment = (appointmentId: string) => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== appointmentId)
    );
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Find Your Doctor</h1>
        <p className="text-muted-foreground">
          Book appointments with top specialists in your area
        </p>
      </div>

      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="doctors" className="flex-1 sm:flex-initial">
            Find Doctors
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex-1 sm:flex-initial">
            My Appointments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="doctors" className="space-y-6">
          <FilterBar
            onFilterChange={handleFilter}
            selectedSpecialty={selectedSpecialty}
            selectedAvailability={selectedAvailability}
          />
          <DoctorList
            doctors={filteredDoctors}
            onBookAppointment={addAppointment}
          />
        </TabsContent>

        <TabsContent value="appointments">
          <AppointmentsList
            appointments={appointments}
            onCancelAppointment={cancelAppointment}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
