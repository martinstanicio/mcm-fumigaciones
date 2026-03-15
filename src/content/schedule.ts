type ScheduleItem = {
  day: string;
  hours: string;
  openHour: number;
  closeHour: number;
  active: boolean;
};

export const schedule: ScheduleItem[] = [
  {
    day: "Lunes",
    hours: "8:00 - 21:00",
    openHour: 8,
    closeHour: 21,
    active: true,
  },
  {
    day: "Martes",
    hours: "8:00 - 21:00",
    openHour: 8,
    closeHour: 21,
    active: true,
  },
  {
    day: "Miércoles",
    hours: "8:00 - 21:00",
    openHour: 8,
    closeHour: 21,
    active: true,
  },
  {
    day: "Jueves",
    hours: "8:00 - 21:00",
    openHour: 8,
    closeHour: 21,
    active: true,
  },
  {
    day: "Viernes",
    hours: "8:00 - 21:00",
    openHour: 8,
    closeHour: 21,
    active: true,
  },
  {
    day: "Sábado",
    hours: "8:00 - 12:00",
    openHour: 8,
    closeHour: 12,
    active: true,
  },
  {
    day: "Domingo",
    hours: "Cerrado",
    openHour: 0,
    closeHour: 0,
    active: false,
  },
];
