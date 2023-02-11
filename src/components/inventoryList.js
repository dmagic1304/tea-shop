import { v4 } from 'uuid'; 

let inventoryList = [  
 {  
    name: "Camomile",
    origin: "Asia",
    flavor: "Sweet",
    price: "$7",
    poundsRemaining: 130,
    poundsSold: 0,
    id: v4()
 },
 {  
    name: "Green",
    origin: "Alaska",
    flavor: "Herbal",
    price: "$4",
    poundsRemaining: 130,
    poundsSold: 0,
    id: v4()
 },
 {  
    name: "Black",
    origin: "New Zeland",
    flavor: "Refreshing",
    price: "$8",
    poundsRemaining: 130,
    poundsSold: 0,
    id: v4()
 },
 {  
    name: "Fruit",
    origin: "Spain",
    flavor: "Sweet",
    price: "$6",
    poundsRemaining: 130,
    poundsSold: 0,
    id: v4()
 },
 {  
    name: "Herbal",
    origin: "Chile",
    flavor: "Refreshing",
    price: "$5",
    poundsRemaining: 130,
    poundsSold: 0,
    id: v4()
 },
 {  
    name: "Elderflower",
    origin: "Argentina",
    flavor: "Sweet",
    price: "$8",
    poundsRemaining: 130,
    poundsSold: 0,
    id: v4()
 }
];

export default inventoryList;