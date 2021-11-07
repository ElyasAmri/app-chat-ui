import React, {Component, useRef} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {findNodeHandle, UIManager} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function ChatDropdown() {
  const ref = useRef<Component>();
  const menu = ['Add User'];
  const nav = useNavigation();
  const {params} = useRoute() as any;

  const onOpen = () => {
    const node = findNodeHandle(ref.current as any);
    UIManager.showPopupMenu(node as number, menu , ()=>{}, dropdownAction)
  }

  const dropdownAction = (_:any, index?: number) => {
    const action = menu[index as number]
    switch (action){
      case "Add User":
        nav.navigate("AddUserScreen", params);
        break;
    }
  }

  return <Ionicons ref={ref as any}
                   name="menu" size={30}
                   color="gray" style={{marginRight: 10}} onPress={onOpen}/>
}
