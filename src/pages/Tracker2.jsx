import SelectMunicipality from "../components/selectMunicipality/SelectMunicipality"
import DroughtStatus from "../components/selectMunicipality/DroughtStatusBar"
import DataService from "../components/dataService/DataServiceComponent"
const Tracker1 = () => {
 return (
    <div className="min-h-dvh">
      {/* <header > */}
        <h1 className="flex justify-center p-10 text-4xl font-bold text-center my-8">Drougt Data</h1>
        <SelectMunicipality />
        <DroughtStatus />
        <DataService />
      {/* </header> */}
    </div>
  )
}

export default Tracker1