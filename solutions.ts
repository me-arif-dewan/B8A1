function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === 0) return 0;
  if (multiplier) return value * multiplier;
  return value * 2;
}


function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") return value.trim().toLowerCase();
  if (typeof value === "number") return value * 10;
  if (value && typeof value === "boolean") return "Active";

  return "Inactive";
}


function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }

  return result;
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) {
  return courses.filter((course) => {
    return course.isPublished && course.students >= minStudents;
  });
}


function pluckValues<T, K extends of keyof T>(items: T[], key: K): T[K][] {
   return items.map(item => item[key]);
}


class Employee {
  protected name: string;
  private _baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this._baseSalary = baseSalary;
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  public getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo() {
    return `Manager of: ${this.department}: ${this.baseSalary}`;
  }
}


function getValue<T>(value: T): T {
  return value;
}


function validateAgeAsync(age: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {

        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);

    });
}
