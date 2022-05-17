import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Vehicle } from "./components/Vehicle/Vehicle";
import { Team } from "./components/Team/Team";
import { Box } from "@chakra-ui/react";

function App() {
  const [state, setState] = useState([{ name: "Test", vehicles: [{}] }]);
  return (
    <Box display="flex" justifyContent={"center"} p="8" w="full">
      <Box maxW="1000px">
        {state.map((t, i) => (
          <Team
            team={t}
            onChange={(t) =>
              setState([...state.slice(0, i), t, ...state.slice(i + 1)])
            }
            onDelete={() =>
              setState([...state.slice(0, i), ...state.slice(i + 1)])
            }
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;
