function daysOfSupply(totalPills: number, pillsPerDay: number): number {
    return totalPills / pillsPerDay;
}

function needsReminder(daysLeft: number, reminderDays: number): boolean {
  return daysLeft <= reminderDays;
}

function reminderText(firstName: string, daysLeft: number): string {
  return `Hi ${firstName}, your refill is due in ${daysLeft} days.`;
}

console.log(daysOfSupply(30, 2));        // expect 15
console.log(daysOfSupply(45, 2));        // expect 22
console.log(needsReminder(3, 5));        // expect true
console.log(needsReminder(10, 5));       // expect false
console.log(reminderText("Amina", 3));   // expect: Hi Amina, your refill is due in 3 days.