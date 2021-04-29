import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Navbar, Footer} from './Components'
import { AllDocs, AddDoc } from './Pages'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Redirect from='/' to='/alldocs' exact/>
          <Route exact path='/alldocs' component={AllDocs} />
          <Route exact path='/adddocs' component={AddDoc} />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App