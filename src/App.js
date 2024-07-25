import LoginProps from './Components/LoginProps';
import RegistrationClass from './Components/RegistrationClass';
import RegistrationFunction from './Components/RegistrationFunction';
import LoginRef from './Components/LoginRef';
import UserContext from './Context/UserContext';


const App = () => {
  return (
    <UserContext>
      <div>
        <h1>React App</h1>
        <LoginProps />
        <hr />
        <RegistrationClass />
        <hr />
        <RegistrationFunction />
        <hr />
        <LoginRef />
      </div>
    </UserContext>
  );
};

export default App;
