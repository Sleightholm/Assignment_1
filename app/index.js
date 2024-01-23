import { Pressable, Text, TextInput, View } from "react-native";
import React from "react";
import Styles from "../styles/page-styles";
import { Link } from "expo-router";

export default function Page() {
  const [person, onChangeName] = React.useState("");
  const [noun, onChangeNoun] = React.useState("");
  const [event, onChangeEvent] = React.useState("");
  const instruct = "Fill in the blanks below according to the hints given \n and press 'Make my Hall Pass' to get your pass!";

  const clearFields = () => {
    onChangeName("");
    onChangeNoun("");
    onChangeEvent("");
  }

  return (
    <View style={Styles.page}>
      <Text style={Styles.title}>Assignment 1</Text>
      <Text style={Styles.subtitle}>Hall Pass Mad Libs</Text>
      <Text>{instruct}</Text>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeName}
        value={person}
        placeholder="Name"
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeNoun}
        value={noun}
        placeholder="Noun"
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeEvent}
        value={event}
        placeholder="An Event"
      />
      <View style={Styles.container}>
      <Link
        style={Styles.button}
        href={{
          pathname: "/page2",
          params: { person, noun, event },
        }} asChild
      >
        <Pressable>
          <Text>Make my Hall Pass</Text>
        </Pressable>
      </Link>
        <Link
         style={Styles.button} 
         onPress={clearFields}
         href={"."}
        >
        <Pressable>
          <Text>Clear</Text>
        </Pressable>
         </Link>
         </View>
    </View>
  );
}
