import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"

import Card from "./Card"

import Button from "./Button"
import Student from "./Student"

import UserGreeting from "./UserGreeting"


import List from "./List"

function App() {

  const fruits = [{id: 1, name:"apple" , calories: 95}, 
    {id: 2,name:"orange", calories: 45}, 
    {id: 3,name:"banana", calories: 105}, 
    {id: 4,name:"coconut", calories: 159}, 
    {id: 5,name:"pineapple", calories: 37}];

    const vegetables = [{id: 1, name:"potatos" , calories: 10}, 
      {id: 2,name:"carriots", calories: 20}, 
      {id: 3,name:"corn", calories: 99}, 
      {id: 4,name:"lettuce", calories: 210}, 
      {id: 5,name:"brocoli", calories: 43}];

  return (
      <>
        <List items={fruits} category="Fruits"></List>
        <List items={vegetables} category="Vegetables"></List>
        <UserGreeting isLoggedIn={false} username="BroCode"></UserGreeting>
        <Button></Button>
        <Student name="Spongebob" age={30} isStudent={true}></Student>
        <Student name="Leila" age={33} isStudent={false}></Student>
        <Student name="Rude" age={12} isStudent={false}></Student>
        <Student name="Sting" age={23} isStudent={true}></Student>
        <Student ></Student>
        <Header />
        
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
       
        <Food />
        <Footer />
      </>
      
  )
}

export default App
