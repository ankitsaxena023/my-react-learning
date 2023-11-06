import './App.css'
import UserDataProvider from './context/UserDataProvider';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {

  return (
    <UserDataProvider>
      <h1>React Context Api</h1>
      <Login />
      <Profile />
    </UserDataProvider>
  )
}

export default App
