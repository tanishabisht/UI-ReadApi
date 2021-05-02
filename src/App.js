import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Navbar, Footer} from './Components'
import { AllDocs, AddDoc, CreateModel, CreateAPI, FinalDoc } from './Pages'
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
          <Route exact path='/finaldoc' component={FinalDoc} />
          <Route exact path='/create_model' component={CreateModel} />
          <Route exact path='/create_api' component={CreateAPI} />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App