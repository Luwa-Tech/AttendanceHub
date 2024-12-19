// src/data/demoData.js
export const employees = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    email: `employee${i + 1}@example.com`,
    jobTitle: `Job Title ${i % 5 + 1}`,
    employeeId: 1000 + i,
  }));
  
  export const attendance = Array.from({ length: 100 }, (_, i) => ({
    employeeId: 1000 + i % 20,
    date: `2024-12-${(i % 31) + 1}`.padStart(2, '0'),
    status: i % 2 === 0 ? "Present" : "Absent",
    checkIn: i % 2 === 0 ? `08:${(i % 60).toString().padStart(2, '0')}` : null,
    checkOut: i % 2 === 0 ? `16:${(i % 60).toString().padStart(2, '0')}` : null,
  }));
  