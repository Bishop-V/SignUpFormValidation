import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Confirmation() {
  const { firstName } = useLocalSearchParams<{ firstName: string }>();
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.title}>Successfully registered</Text>
        <Text style={styles.title}>Welcome {firstName}!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  main: {
    marginVertical: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});
