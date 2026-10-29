import { useEffect } from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
