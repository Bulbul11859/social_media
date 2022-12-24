import axios from 'axios'
import React, { useEffect } from 'react'

const About = () => {

  return (
    <section>
  
      <h1>Hi I am About part</h1>
     
    </section>
  )
}

export default About

export async function users(){
    let {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
}
