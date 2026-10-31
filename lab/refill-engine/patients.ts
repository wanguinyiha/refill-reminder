type Patient = {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    dueDate: string; //format YYYY-MM-DD
};

const patients: Patient[] = [
    {id: 1, firstName: "Amina", lastName: "Smith", phone: "+254798735724", dueDate: "2026-10-20"},
    {id: 2, firstName: "John", lastName: "Doe", phone: "+254798735725", dueDate: "2026-10-30"},
    {id: 3, firstName: "Jane", lastName: "Doe", phone: "+254798735726", dueDate: "2026-10-25"}
]

const today = "2026-10-29";

function getNames(List: Patient[]): string[] {
    return List.map(patient => patient.firstName); //map creates a new array containing the first names of each patient
}

function getOverdue(List: Patient[], today: string): Patient[] {
    return List.filter(patient => new Date(patient.dueDate) < new Date(today));
}

function getDueSoon(List: Patient[], today: string, cutoff: string): Patient[] {
    return List.filter(patient => patient.dueDate >= today && patient.dueDate <= cutoff);
}

function sortByDueDate(List: Patient[]): Patient[] {
    return [...List].sort((a, b) => a.dueDate.localeCompare(b.dueDate)); //localeCompare compares due dates alphabetically
}   

function summary(List: Patient[], today: string) {
    return List.reduce((acc, patient) => {
        return {
            total: acc.total + 1,
            overdue: patient.dueDate < today ? acc.overdue + 1 : acc.overdue
        };
    }, {
        total: 0,
        overdue: 0
    });
}

function markCollected(List: Patient[], id: number, nextDueDate: string): Patient[] {
    return List.map(patient => {
        if (patient.id === id) {
            return {...patient, dueDate: nextDueDate}; // replaces old due date with the new one
        }
        return patient;
    });
}

console.log(getNames(patients));                                    // expect [ 'Amina', 'Brian', 'Chebet', 'Daniel', 'Esther' ]
console.log(getNames(getOverdue(patients, today)));                 // expect [ 'Amina', 'Esther' ]
console.log(getNames(getDueSoon(patients, today, "2026-11-04")));   // expect [ 'Brian' ]
console.log(getNames(sortByDueDate(patients)));                     // expect [ 'Amina', 'Esther', 'Brian', 'Daniel', 'Chebet' ]
console.log(summary(patients, today));                              // expect { total: 5, overdue: 2 }
const updated = markCollected(patients, 1, "2026-11-25");
console.log(getNames(getOverdue(updated, today)));                  // expect [ 'Esther' ]
console.log(patients[0].dueDate);                                   // expect 2026-10-25 (original unchanged)