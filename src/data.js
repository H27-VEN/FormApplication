import uuid from "uuid/v1";

const data = [
  {
    id: uuid(),
    name: "Suzanne Hill",
    email: "suzanne.hill@example.com",
    phone: "(472)-889-4718",
    designation: "Product Manager",
    company: "ABC Inc",
    address: "3291, Cherry St West Covina Texas United States"
  },
  {
    id: uuid(),
    name: "Wayne Gibson",
    email: "wayne.gibson@example.com",
    phone: "(370)-189-5343",
    designation: "Sales Head",
    company: "XYZ Inc",
    address: "6626, E North St Irvine Minnesota United States"
  },
  {
    id: uuid(),
    name: "Kylie Fields",
    email: "kylie.fields@example.com",
    phone: "(211)-060-5430",
    designation: "VP of Marketing",
    company: "ACME Corp",
    address: "6175, First Street Edison Connecticut United States"
  },
  {
    id: uuid(),
    name: "Ann Alvarez",
    email: "ann.alvarez@example.com",
    phone: "(219)-386-4722",
    designation: null,
    company: null,
    address: "151, Hogan St San Diego Iowa United States"
  },
  {
    id: uuid(),
    name: "Eli Alvarez",
    email: "eli.alvarez@example.com",
    phone: "(691)-839-3080",
    designation: null,
    company: null,
    address: "5289, Daisy Dr Knoxville Utah United States"
  }
];

export default data;
