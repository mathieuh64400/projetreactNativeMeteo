import React, { useState } from "react";
import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  Colors,
} from "./styles.js";
import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  todoInputValue,
  setTodoInputValue,
  handleEditTodo,
  todos,
}) => {
  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        // date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      });
    } else {
      handleEditTodo({
        title: todoInputValue,
        // date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      });
    }

    setTodoInputValue("");
  };

  const handleCloseModal = () => {
    setTodoInputValue("");
    setModalVisible(false);
    setTodoToBeEdited(null);
  };

  return (
    <>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
           

            <StyledInput
              placeholder="Nom d'une ville"
              placeholderTextColor={Colors.alternative}
              selectionColor={Colors.fourth}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
            />

            <ModalActionGroup>
              <ModalAction onPress={handleCloseModal} color={Colors.secondary}>
                <AntDesign name="close" size={28} color={Colors.fourth} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color={Colors.secondary}>
                <AntDesign name="check" size={28} color={Colors.fourth} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;