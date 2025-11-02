'use client'
import Tab from "./Tab";
import Tabcontent from "./Tabcontent";
import {useState} from 'react'

const Tabs = () => {
    const tabNames = [
        {tabName: "Risk | Opportunities | Threats",id: "tab1"},
        {tabName: "Sales | Demand Forecasting", id: "tab2"},
        {tabName: "Inventory Management", id: "tab3"},
        {tabName: "Quality Control", id: "tab4"},
        {tabName: "Logistics Optimization", id: "tab5"},
        {tabName: "Predictive maintenance | Asset Management", id: "tab6"},
    ];

    const [tabContent, setTabContent] = useState()

    const handleEventData = (comp) => {
        setTabContent(comp)
    }

    return (
        <>        
           {tabNames.map((tab, index) => {
                return <Tab key={index} id={tab.id} tabName={tab.tabName} handleEventData={handleEventData}/>                  
            })}
            <Tabcontent comp={tabContent}/>    
        </>
      
    )
  }
  export default Tabs