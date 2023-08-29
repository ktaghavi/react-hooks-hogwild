import React , {useState} from 'react'

function HogCard({individualHog}) {
    const [extra, setExtra] = useState(false)
  return (
  <div onClick={()=>setExtra(!extra)}>
    <p>{individualHog.name}</p>
    <img src={individualHog.image}/>
    {extra?
    <>
    <p>{individualHog.specialty}</p>
    <p>{individualHog.greased}</p>
    <p>{individualHog.weight}</p>
    <p>{individualHog["highest medal achieved"]}</p> 
    </>
    :
    <></>
    }
    
    </div>

  )

}

export default HogCard