"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Doctor, TimeSlot, Appointment } from "@/lib/types";
import TimeSlotPicker from "./TimeSlotPicker";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

interface BookingModalProps {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (appointment: Appointment) => void;
  availableSlots: TimeSlot[];
}

export default function BookingModal({
  doctor,
  isOpen,
  onClose,
  onConfirm,
  availableSlots,
}: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(
    null
  );

  const handleConfirm = () => {
    if (selectedDate && selectedTimeSlot) {
      // Create a date object with the selected date and time
      const appointmentDate = new Date(selectedDate);

      const timeString = selectedTimeSlot.time;
      let hours = 0;
      let minutes = 0;

      if (timeString.includes("AM") || timeString.includes("PM")) {
        const [timePart, period] = timeString.split(" ");
        const [hourStr, minuteStr] = timePart.split(":");

        hours = parseInt(hourStr, 10);
        minutes = parseInt(minuteStr, 10);

        // Convert 12-hour format to 24-hour
        if (period === "PM" && hours < 12) {
          hours += 12;
        } else if (period === "AM" && hours === 12) {
          hours = 0;
        }
      } else {
        // Handle 24-hour format like "10:30"
        const [hourStr, minuteStr] = timeString.split(":");
        hours = parseInt(hourStr, 10);
        minutes = parseInt(minuteStr, 10);
      }

      appointmentDate.setHours(hours, minutes, 0, 0);

      const newAppointment: Appointment = {
        id: uuidv4(),
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorImage: doctor.image,
        specialty: doctor.specialty,
        location: doctor.location,
        dateTime: appointmentDate,
        status: "confirmed",
      };

      onConfirm(newAppointment);
      setSelectedDate(undefined);
      setSelectedTimeSlot(null);
    }
  };
  // Filter time slots for the selected date
  const availableSlotsForDate = selectedDate ? availableSlots : [];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Appointment with Dr. {doctor.name}</DialogTitle>
          <DialogDescription>
            {doctor.specialty} • {doctor.location}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Select a date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border mx-auto"
              disabled={
                (date) =>
                  date < new Date() || // No past dates
                  date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Max 30 days in future
              }
            />
          </div>

          {selectedDate && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">
                Available times for {dayjs(selectedDate).format("DD/MM/YYYY")}
              </h3>
              <TimeSlotPicker
                timeSlots={availableSlotsForDate}
                selectedTimeSlot={selectedTimeSlot}
                onTimeSlotSelect={setSelectedTimeSlot}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTimeSlot}
          >
            Confirm Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
