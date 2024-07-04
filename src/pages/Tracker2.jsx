import SelectMunicipality from "../components/selectMunicipality/SelectMunicipality"
import DroughtStatus from "../components/selectMunicipality/DroughtStatusBar"
const Tracker1 = () => {
 return (
    <div >
      <header >
        <h1 className="flex justify-center p-10 text-4xl font-bold text-center my-8">Drougt Data</h1>
        <SelectMunicipality />
        <DroughtStatus />
      </header>
    </div>
  )
}

export default Tracker1