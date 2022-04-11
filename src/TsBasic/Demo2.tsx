import React from 'react'

type demo2Props={
    name:string;
    age:number;
    
}
let personname:string;
personname='aman'
const Demo2 = ({name,age}:demo2Props) => {
  return (
    <main>
        {/* Types Around Props */}
        <section style={{border:'2px solid '}}>
        <i>My name is: {name}</i>
        <b>My age is {age}</b>
        <br/>
        {/* Types Around varibles  */}
        <u>{personname}</u>
        </section>
    </main>
  )
}

export default Demo2;