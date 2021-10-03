import React from "react";

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  Colors,
} from "./styles.js";

// Icons
import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Villes favorites:</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={Colors.secondary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;