import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function Zach() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Text>This is the count {count}</Text>
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
}
