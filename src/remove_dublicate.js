import React from "react";
import "./style.css";

export default function App() {

  const standardsList = [
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Geometry"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Orders of Operation"},
    {"Grade": "Math 2", "Domain": "Geometry"},
    {"Grade": "Math 2", "Domain": "Geometry"}
  ];

var setobj = new Set();

var result = standardsList.reduce((acc,item)=>{
  if(!setobj.has(item.Grade)){
    setobj.add(item.Grade,item)
    acc.push(item)
  }
  return acc;
},[]);

console.log(result)

  return (
    <div>
      <h1>Remove Duplicate</h1>
    </div>
  );
}
