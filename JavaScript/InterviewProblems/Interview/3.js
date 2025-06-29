// Filter out users who possess all documents present in the selectedDocuments by writing a code in JavaScript.

let users = [
  {
    name: "Arvind",

    age: 21,

    gender: "MALE",

    documents: ["Adhar", "12_Marksheet"],
  },

  {
    name: "Sunil",

    age: 15,

    gender: "MALE",

    documents: ["Pancard", "Passport"],
  },

  {
    name: "Rahul",

    age: 18,

    gender: "MALE",

    documents: ["10_Marksheet"],
  },

  {
    name: "Neha",

    age: 21,

    gender: "FFMALE",

    documents: ["Adhar", "1O_Marksheet", "Pancard"],
  },

  {
    name: "Tanu",

    age: 21,

    gender: "FFMALE",

    documents: [],
  },
];
let selectedDocuments = ["Adhar", "1O_Marksheet"];

let ans = users.filter((obj) => {
  return selectedDocuments.every((doc) => obj.documents.includes(doc));
});
console.log(ans);
