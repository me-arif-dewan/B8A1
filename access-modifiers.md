# Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

## Introduction

Object-Oriented Programming এ class এর data এবং behavior কীভাবে ব্যবহার
করা যাবে, তা নিয়ন্ত্রণ করা গুরুত্বপূর্ণ। TypeScript এর access modifiers
property ও method এর accessibility নির্ধারণ করে। এগুলো encapsulation বজায়
রাখতে এবং অনিচ্ছাকৃত পরিবর্তন কমাতে সাহায্য করে।

## Description

`public` হলো default access level। Class এর বাইরে থেকেও public property
বা method ব্যবহার করা যায়। `private` member কেবল যে class এ declare করা
হয়েছে, সেই class এর ভেতরেই access করা যায়। `protected` member parent
class এবং তার subclass এ ব্যবহার করা যায়, কিন্তু class এর বাইরের code থেকে
সরাসরি access করা যায় না।

```ts
class Employee {
  public name: string;
  private _salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this._salary = salary;
    this.department = department;
  }

  public getSalary(): number {
    return this._salary;
  }
}

class Manager extends Employee {
  describe(): string {
    return `${this.name} manages ${this.department}`;
    // this._salary ব্যবহার করলে TypeScript error হবে।
  }
}

const manager = new Manager("Arif", 60000, "Engineering");
console.log(manager.name); // অনুমোদিত
console.log(manager.getSalary()); // অনুমোদিত
// console.log(manager._salary);   // Error: private member
```

এখানে `salary` সরাসরি প্রকাশ না করে `getSalary()` method দিয়ে পড়ার সুযোগ
দেওয়া হয়েছে। প্রয়োজনে setter যোগ করে salary পরিবর্তনের আগে validation করা
যায়।

`readonly` property initialization এর পরে পুনরায় assign করা আটকায়।

```ts
class Account {
  constructor(public readonly accountId: number) {}
}

const account = new Account(101);
// account.accountId = 202; // Error
```

মনে রাখতে হবে, TypeScript এর `private` ও `protected` মূলত compile-time
restriction। JavaScript runtime এও private রাখতে চাইলে `#salary` এর মতো
ECMAScript private field ব্যবহার করা যায়। `readonly` ও runtime freeze নয়;
এটি TypeScript type-checking এর নিয়ম।

## Conclusion

`public` ব্যবহার করুন সবার জন্য উন্মুক্ত member এ, `private` ব্যবহার করুন
class এর অভ্যন্তরীণ data তে, আর `protected` রাখুন subclass এর প্রয়োজনীয়
member এর জন্য। পরিবর্তন ঠেকাতে `readonly` ব্যবহার করুন। সঠিক modifier
নির্বাচন করলে class এর দায়িত্ব ও data access অনেক বেশি নিয়ন্ত্রিত থাকে।
