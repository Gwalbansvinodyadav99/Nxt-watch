import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
    </Switch>
  </>
)

export default App
