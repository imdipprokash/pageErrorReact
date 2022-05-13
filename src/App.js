import NoInternet from "./pages/NoInternet";
import InternetPage from "./pages/InternetPage";
import { Offline, Online } from "react-detect-offline";

function App() {
  return (
    <div>
      <Offline>
        <NoInternet />
      </Offline>
      <Online>
        <InternetPage />
      </Online>
    </div>
  );
}

export default App;
