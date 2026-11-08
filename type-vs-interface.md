# What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

## Introduction

TypeScript এ `type` alias এবং `interface` দুটিই কোনো value বা object এর
type নির্ধারণ করতে সাহায্য করে। সাধারণ object এর ক্ষেত্রে এদের ব্যবহার অনেকটা
একই রকম মনে হতে পারে। তবে এদের capability এবং ব্যবহারের ক্ষেত্র এক নয়।
সঠিকটি বেছে নিলে code আরও পরিষ্কার, maintainable এবং সহজে extend করা যায়।

## Description

`interface` মূলত object এর structure বা contract বর্ণনা করার জন্য তৈরি। এটি
`extends` ব্যবহার করে অন্য interface-এর বৈশিষ্ট্য গ্রহণ করতে পারে।

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: "Arif",
  permissions: ["manage-users"],
};
```

অন্যদিকে, `type` alias object shape ছাড়াও union, intersection, primitive
এবং tuple-এর মতো type প্রকাশ করতে পারে।

```ts
type Status = "pending" | "success" | "failed";

type UserWithStatus = User & {
  status: Status;
};
```

একটি গুরুত্বপূর্ণ পার্থক্য হলো declaration merging। একই নামের একাধিক
`interface` declaration TypeScript একত্র করতে পারে, কিন্তু একই scope এ একই
নামের `type` alias পুনরায় declare করা যায় না।

```ts
interface Product {
  name: string;
}

interface Product {
  price: number;
}

// Product-এর name এবং price দুটিই এখন required।
```

তাই reusable object contract বা extendable public API তৈরি করলে
`interface` সুবিধাজনক। আর union, tuple, অথবা একাধিক type মিলিয়ে নতুন type
তৈরি করতে হলে `type` বেশি উপযোগী। তবে object-এর জন্য `type` ব্যবহার করাও
সম্পূর্ণ বৈধ।

## Conclusion

দুটির মধ্যে একটি সব পরিস্থিতিতে শ্রেষ্ঠ নয়। সাধারণ নিয়ম হিসেবে object
contract-এর জন্য `interface` এবং union বা complex type composition-এর জন্য
`type` বেছে নিতে পারেন। সবচেয়ে গুরুত্বপূর্ণ হলো একই project-এ ধারাবাহিক
naming ও coding convention বজায় রাখা।
