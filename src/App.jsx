import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TypeWriterEffect from 'react-typewriter-effect';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <h1>
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, This is a type writer animation package',
          'it consist of two types...',
          'Single text display and multi text display',
          'Fonts can be customized.',
          'The type speed can be customized as well',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      > </TypeWriterEffect>
        Vite + React
        </h1>
       
    </div>
  )
}

export default App
