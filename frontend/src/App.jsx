import { useEffect, useState } from "react";
import RequestContext from "./RequestContext";
import IndexPage from "./IndexPage";

const PORT = 8001;

const App = () => {
  const [requestItems, setRequestItems] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:${PORT}`);

    ws.onmessage = (event) => {
      setRequestItems((prevState) => [JSON.parse(event.data), ...prevState]);
    };

    return () => (ws.onmessage = null);
  }, []);

  return (
    <RequestContext.Provider value={requestItems}>
      <IndexPage />
    </RequestContext.Provider>
  );
};

export default App;
