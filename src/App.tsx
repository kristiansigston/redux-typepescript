import { Provider } from "react-redux";
import { store } from "./state";
import RepositoriesList from "./repositories_list";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for repositories</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
