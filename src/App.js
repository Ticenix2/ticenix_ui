import './App.css';
import {store} from "./Actions/store";
import {Provider} from "react-redux";
import {Dcc} from "./Components/DC"

function App() {
  return (
    <Provider store={store}>
      <Dcc />
    </Provider>
  );
}

export default App;
