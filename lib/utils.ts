import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TimeSlot } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate mock appointment time slots
export function generateAppointmentSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  
  // Generate times from 9 AM to 5 PM
  for (let hour = 9; hour <= 17; hour++) {
    // Generate slots at :00 and :30 past each hour
    for (let minute of [0, 30]) {
      const timeString = `${hour % 12 || 12}:${minute === 0 ? '00' : minute}`;
      const period = hour < 12 ? 'AM' : 'PM';
      const displayTime = `${timeString} ${period}`;
      
      // Randomly determine if the slot is available
      const available = Math.random() > 0.3;
      
      slots.push({
        id: `slot-${hour}-${minute}`,
        time: displayTime,
        available
      });
    }
  }
  
  return slots;
}