import { useState } from "react";
import React from "react";
import "./App.css";
import { Vehicle } from "./components/Vehicle/Vehicle";
import { Team } from "./components/Team/Team";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";
import { UnsavedModal } from "./components/UnsavedModal/UnsavedModal";

let resume = () => {};

function App() {
  const [state, setState] = useState({ vehicles: [{}] });
  const [dirty, setDirty] = useState(false);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const lastOpen = window.localStorage.getItem("lastOpen");
    if (lastOpen) {
      const item = window.localStorage.getItem("teams");
      let teams = item ? JSON.parse(item) : {};
      const team = teams[lastOpen];
      if (team) load(team);
    }
  }, []);

  const save = () => {
    if (!state.name) {
      toast({
        title: "Your team doesn't have a name!",
        description: `Give your team a name so we can save it!`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return false;
    }
    const item = window.localStorage.getItem("teams");
    let teams = item ? JSON.parse(item) : {};
    teams[state.name] = state;
    window.localStorage.setItem("teams", JSON.stringify(teams));
    window.localStorage.setItem("lastOpen", state.name);
    toast({
      title: "Your team has been saved.",
      description: `${state.name} is now saved in your local storage.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setDirty(false);
    return true;
  };

  const load = (team) => {
    const _load = () => {
      setState(team);
      setDirty(false);
      window.localStorage.setItem("lastOpen", team.name);
    };
    if (dirty) {
      resume = _load;
      onOpen();
    } else {
      _load();
    }
  };

  const newTeam = () => {
    const _newTeam = () => {
      setState({ vehicles: [] });
      setDirty(false);
    };
    if (dirty) {
      resume = _newTeam;
      onOpen();
    } else {
      _newTeam();
    }
  };

  return (
    <>
      <UnsavedModal
        isOpen={isOpen}
        onClose={onClose}
        onSave={() => {
          const success = save();
          if (success) resume();
          onClose();
        }}
        onDontSave={() => {
          resume();
          onClose();
        }}
        onCancel={() => {
          resume = () => {};
          onClose();
        }}
      />
      <NavBar save={save} load={load} newTeam={newTeam} dirty={dirty} />
      <Box display="flex" justifyContent={"center"} p="8" w="full">
        <Box maxW="7xl" w="full">
          <Team
            team={state}
            onChange={(t) => {
              setState(t);
              if (!dirty) setDirty(true);
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
