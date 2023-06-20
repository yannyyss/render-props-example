import Storage from './components/storage/Storage'
import NeedStorage from './components/needstorage/NeedStorage'
import './App.css'

function App() {

  return (
    <>
      <Storage
        render={({ load, save, remove }) => {
          return (
            <NeedStorage
              load={load}
              save={save}
              remove={remove}
            />
          )
        }}
      />  
    </>
  )
}

export default App
