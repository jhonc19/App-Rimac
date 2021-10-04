import Layout from './components/Layout';
import AutoPlan from './pages/AutoPlan';
import Home from './pages/Home';
import Gratitude from './pages/Gratitude';
import AplicationState from './context/AplicationState';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <AplicationState>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/autoplan" component={AutoPlan} />
            <Route exact path="/gratitude" component={Gratitude} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </Layout>
    </AplicationState>
  );
}

export default App;
