"use client";

import { Appointment } from "@/lib/types";
import AppointmentCard from "./AppointmentCard";

interface AppointmentsListProps {
  appointments: Appointment[];
  onCancelAppointment: (appointmentId: string) => void;
}

export default function AppointmentsList({
  appointments,
  onCancelAppointment,
}: AppointmentsListProps) {
  if (appointments.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-lg font-medium">No appointments scheduled</h3>
        <p className="text-muted-foreground mt-2">
          Browse our doctors and book your first appointment
        </p>
      </div>
    );
  }

  // Sort appointments by date (most recent first)
  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
  );
  console.log(appointments);
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Your Appointments</h2>
      <div className="grid grid-cols-1 gap-4">
        {sortedAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onCancelAppointment={onCancelAppointment}
          />
        ))}
      </div>
    </div>
  );
}
