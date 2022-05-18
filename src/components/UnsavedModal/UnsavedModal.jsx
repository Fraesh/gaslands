import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";

export const UnsavedModal = ({ isOpen, onCancel, onSave, onDontSave }) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Unsaved changes</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Your unsaved changes will be lost. Do you want to save your current
          team?
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onDontSave} variant={"outline"}>
              Don't Save
            </Button>
            <Button onCancel={onCancel} variant="ghost">
              Cancel
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
