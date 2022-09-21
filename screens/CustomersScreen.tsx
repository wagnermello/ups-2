import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomersScreen() {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-red-500")}>CustomersScreen</Text>
    </SafeAreaView>
  );
}
