import React, { useEffect, useReducer, useRef, useState } from 'react';
import Gun from 'gun';
import './App.css';
import { HexColorPicker } from 'react-colorful';
import accessEnv from './utils/accessEnv';

const SERVER_ADDRESS = accessEnv('SERVER_ADDRESS', 'https://ci-cd-back.herokuapp.com')
const ENV = accessEnv('NODE_ENV')

const gun = Gun({
  peers: [
    `${SERVER_ADDRESS}${ENV === 'development' ? ':3030' : ''}/gun`
  ], localStorage: false
})

function colorReducer(_state: string, color: string) {
  return color
}

function App() {
  const backGroundRef = useRef<HTMLElement | null>(null)

  const [colorState, dispatchColor] = useReducer(colorReducer, "#aabbcc")

  const [colorName, setColorName] = useState('')

  const [color, setColor] = useState("#aabbcc")


  useEffect(() => {
    gun.get('color').on(col => {
      dispatchColor(col.sync)
    }, { change: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeBackgroundColor = (col: string) => {
    if (backGroundRef.current)
      backGroundRef.current.style.backgroundColor = col
  }

  const getColorName = async (colorHash: string) => {
    try {
      const response = await (await fetch(`${SERVER_ADDRESS}${ENV === 'development' ? ':3030' : ''}/api/color/${colorHash.slice(1)}`)).json()
      setColorName(response.name)
    }
    catch (e) {
      setColorName(colorHash)
    }
  }

  useEffect(() => {
    if (backGroundRef.current)
      backGroundRef.current.style.backgroundColor = colorState
    setColor(colorState)
    getColorName(colorState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorState])

  return (
    <div className="app">
      <header className="app-header" ref={backGroundRef}>
        <div style={{ padding: 30 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}>
            <HexColorPicker color={color} onChange={(col) => {
              setColor(col);
              changeBackgroundColor(col)
            }} onMouseUp={() => gun.get('color').put({ sync: color })} />
          </div>
          <p>
            {colorName}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
