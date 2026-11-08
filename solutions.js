"use strict";
function multiplyValue(value, multiplier) {
    if (multiplier === 0)
        return 0;
    if (multiplier)
        return value * multiplier;
    return value * 2;
}
function processInput(value) {
    if (typeof value === "string")
        return value.trim().toLowerCase();
    if (typeof value === "number")
        return value * 10;
    if (value && typeof value === "boolean")
        return "Active";
    return "Inactive";
}
function formatCoordinate(coordinate) {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished && course.students >= minStudents;
    });
}
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
class Employee {
    name;
    _baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this._baseSalary = baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of: ${this.department}: ${this.baseSalary}`;
    }
}
function getValue(value) {
    return value;
}
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
