import React, { useState, useEffect } from "react";

//components
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import Espace from "./Espace";
import { Text, View } from "react-native";
import { StyledInput } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Modal } from "react-native-paper";

const Intermediaire = ({ todos, setTodos }) => {
  // Modal visibility & input value
  const [modalVisible, setModalVisible] = useState(true);
  const [todoInputValue, setTodoInputValue] = useState();

  // function to add new todo
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];

    // Saving to async storage
    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
        setModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  // edit existing todo item
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);

    // Saving to async storage
    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
        setTodoToBeEdited(null);
        setModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  // clear all todos
  const handleClearTodos = () => {
    // Saving to async storage
    AsyncStorage.setItem("storedTodos", JSON.stringify([]))
      .then(() => {
        setTodos([]);
      })
      .catch((error) => console.log(error));
  };

  function Rien({
    modalVisible,
    setModalVisible,
    handleAddTodo,
    todoToBeEdited,
    setTodoToBeEdited,
    todoInputValue,
    setTodoInputValue,
    handleEditTodo,
    todos,
  }) { 

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
    return <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={handleCloseModal}
    ><View>
      <StyledInput
              placeholder="Nom d'une ville"
              placeholderTextColor={Colors.alternative}
              selectionColor={Colors.fourth}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
            />
    </View></Modal>
   }

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <Espace/>
      <Rien
      todoInputValue={todoInputValue}
      setTodoInputValue={setTodoInputValue}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      handleAddTodo={handleAddTodo}
      todoToBeEdited={todoToBeEdited}
      setTodoToBeEdited={setTodoToBeEdited}
      handleEditTodo={handleEditTodo}
      todos={todos}
      />
      {/* <InputModal
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      /> <Espace/> */}
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />

    
    </>
  );
};

export default Intermediaire;