import { createStackNavigator } from 'react-navigation';
import Dashboard from './Dashboard/Dashboard';
import AddTransaction from './AddTransaction/AddTransaction';
import Login from './Login/Login';
import Chart from './Chart/Chart';


const Navigation = createStackNavigator(
  {
    Login: {screen: Login},
    Dashboard: {screen: Dashboard},
    Chart: {screen: Chart},
  },
  {
    initialRouteName: 'Login',
  }
);

export default Navigation;
