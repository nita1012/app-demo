import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import FRInputParent from './components/FRInputParent';
import ClickCounter from './components/ClickCounter'
import User from './components/User';
import Counter1 from './components/Counter1';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import HookCounter from './components/HookCounter';
import HookConterTwo from './components/HookConterTwo'
import FetchData from './components/FetchData'
import CounterOne from './components/CounterOne'
import DataFetchingTwo from './components/DataFetchingTwo'
import DocTitleOne from './components/DocTitleOne'
function App() {
  return (
    <div className="App">
      <DocTitleOne/>
      {/* <DataFetchingTwo/> */}
      {/* <CounterOne/> */}
      {/* <FetchData/> */}
      {/* <HookCounter/> */}
      {/* <HookConterTwo/> */}
      {/* <UserProvider value='nita'>
      <ComponentC/>
      </UserProvider> */}
      
      {/* <User name={() => 'nita'}/>
      <Counter1 render={(count,incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}/> */}

      {/* <ClickCounter/> */}
      {/* <ClickCounter/> */}
     {/* < FRInputParent/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind></EventBind> */}
      {/* <Message></Message> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
