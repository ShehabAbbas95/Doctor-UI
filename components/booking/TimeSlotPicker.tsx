"use client";

import { TimeSlot } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlotPickerProps {
  timeSlots: TimeSlot[];
  selectedTimeSlot: TimeSlot | null;
  onTimeSlotSelect: (timeSlot: TimeSlot) => void;
}

export default function TimeSlotPicker({
  timeSlots,
  selectedTimeSlot,
  onTimeSlotSelect,
}: TimeSlotPickerProps) {
  if (timeSlots.length === 0) {
    return (
      <div className="p-4 text-center bg-muted rounded-md">
        <p className="text-sm text-muted-foreground">No available time slots for the selected date</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {timeSlots.map((slot) => (
        <Button
          key={slot.id}
          variant="outline"
          size="sm"
          className={cn(
            "h-10 transition-all", 
            selectedTimeSlot?.id === slot.id && "bg-primary text-primary-foreground ring-2 ring-primary",
            !slot.available && "opacity-50 cursor-not-allowed"
          )}
          disabled={!slot.available}
          onClick={() => slot.available && onTimeSlotSelect(slot)}
          aria-label={`Select appointment time at ${slot.time}`}
          aria-selected={selectedTimeSlot?.id === slot.id}
        >
          {slot.time}
        </Button>
      ))}
    </div>
  );
}