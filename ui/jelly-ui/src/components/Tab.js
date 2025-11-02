"use client"
import Link from "next/link"
import Demandforecast from "./Demandforecast"
import { useState } from "react"

const Tab = ({tabName, key, id, handleEventData}) => {

  const [tabContent, setTabContent] = useState(<div></div>)

    const handleClick = (event) => {
      console.log(event.currentTarget.id)
      if (event.currentTarget.id === 'tab2') {   
        setTabContent(<Demandforecast />)       
        handleEventData(tabContent)         
      } else if (event.currentTarget.id === 'tab3') {
        setTabContent('tab3')              
      }
    }
    
  return (      
    <>  
        <button id={id} className="tablink" onClick={handleClick}>
            {tabName}
        </button>        
    </>
  )
}

export default Tab