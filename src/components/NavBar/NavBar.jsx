import {
  Box,
  HStack,
  Text,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdPrint,
  MdSave,
  MdFolderOpen,
  MdLibraryAdd,
  MdShare,
} from "react-icons/md";
import React from "react";
import { LoadModal } from "../LoadModal/LoadModal";

export const NavBar = ({ print, save, load, newTeam, dirty }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack w="full" p="4">
        <Text fontSize={"3xl"} fontFamily={"attack"}>
          Gaslands Builder
        </Text>
        <HStack flex="1" justifyContent={"flex-end"}>
          <ButtonGroup size="sm">
            <Button onClick={print} disabled leftIcon={<MdPrint />}>
              Print
            </Button>
            <Button onClick={print} disabled leftIcon={<MdShare />}>
              Share
            </Button>
            <Button onClick={save} disabled={!dirty} leftIcon={<MdSave />}>
              Save
            </Button>
            <Button onClick={onOpen} leftIcon={<MdFolderOpen />}>
              Load
            </Button>
            <Button onClick={newTeam} leftIcon={<MdLibraryAdd />}>
              New Team
            </Button>
          </ButtonGroup>
        </HStack>
      </HStack>
      <LoadModal onClose={onClose} isOpen={isOpen} load={load} />
    </>
  );
};
