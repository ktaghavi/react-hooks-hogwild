import React, {useState} from 'react'
import HogCard from './HogCard'

function HogContainer({hogsData}) {
    const [filterGreased, setFilterGreased] = useState(false)
    const [sortType, setSortType] = useState("name")

    function compareFn(hogA,hogB){
        if(hogA[sortType]<hogB[sortType]){
            return -1
        }
        else if (hogA[sortType]>hogB[sortType]){
            return 1
        }
        return 0
    }

    const sortedHogs = hogsData.sort(compareFn)

    const filteredHogs = hogsData.filter((hog)=>{
        if (filterGreased === false){
            return true
        }
        return hog.greased
    })
    
    
    const hogsCard = filteredHogs.map((hog) => {
    return(
    <HogCard key={hog.name} individualHog={hog} />
        )
})
  return (
  <div>
    <button onClick={()=>setFilterGreased(!filterGreased)}>
        {filterGreased? "Bring back all hogs" : "Filter Greased"}
        </button>
        <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>

        {hogsCard}
    </div>
    )
}

export default HogContainer