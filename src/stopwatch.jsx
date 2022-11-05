import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Stopwatch() {
    const startTime = useRef(null)
    const intervalRef = useRef(null)
    const [now, setNow] = useState(0)
    const [laps,setNewLap] = useState([])
    let secondsElapsed = 0
    function handleStart(){
        startTime.current = Date.now()
        intervalRef.current = setInterval(()=>{
            setNow(Date.now())
        },10)
    }

    function handleStop(){
        clearInterval(intervalRef.current)

    }
    secondsElapsed = (now - startTime.current)/1000;

    function handleLapCreation(){
        setNewLap([...laps,secondsElapsed])
    }
  return (
    <>
    <section>
        <h1>{secondsElapsed.toFixed(3)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleLapCreation}>Create a new Lap</button>
        {laps?.length ? <article>
            <h1>Laps</h1>
            {laps.map(lap=><p key={lap}>{lap}</p>)}
        </article> :null}
    </section> 
    </>
  )
}

export default Stopwatch