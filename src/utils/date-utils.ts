export function getCurrentMonthName(): string {
  return new Date().toLocaleDateString("it", { month: "long" });
}

export function getCurrentDayName(): string {
  return new Date().toLocaleDateString("it", { weekday: "long" });
}

export function getCurrentDayNumber(): string {
  return new Date().toLocaleDateString("it", { day: "numeric" });
}

export function getCurrentYearNumber(): string {
  return new Date().toLocaleDateString("it", { year: "numeric" });
}

export function getCurrentTime(): string {
  return new Date().toTimeString().split(" ")[0];
}
