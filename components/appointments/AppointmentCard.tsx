import Image from "next/image";
import dayjs from "dayjs";
import { Appointment } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface AppointmentCardProps {
  appointment: Appointment;
  onCancelAppointment: (appointmentId: string) => void;
}

export default function AppointmentCard({
  appointment,
  onCancelAppointment,
}: AppointmentCardProps) {
  const { id, doctorName, doctorImage, specialty, location, dateTime } =
    appointment;

  // Parse the date using dayjs
  const appointmentDate = dayjs(dateTime);
  const formattedDate = appointmentDate.format("DD/MM/YYYY");
  const formattedTime = appointmentDate.format("h:mm A");
  console.log(dateTime, formattedDate);
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-24 sm:h-auto sm:w-36 flex-shrink-0">
            <Image
              src={doctorImage}
              alt={`Dr. ${doctorName}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 144px"
            />
          </div>
          <div className="p-4 flex flex-col sm:flex-row flex-grow gap-4 justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold">Dr. {doctorName}</h3>
              <p className="text-sm text-muted-foreground">{specialty}</p>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{formattedTime}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{location}</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex items-start">
              <Button
                variant="outline"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => onCancelAppointment(id)}
                aria-label={`Cancel appointment with Dr. ${doctorName}`}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
