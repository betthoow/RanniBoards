import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"

import Card from "./Card"

import Button from "./Button"
import Student from "./Student"

import UserGreeting from "./UserGreeting"

function App() {
  return (
      <>
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
