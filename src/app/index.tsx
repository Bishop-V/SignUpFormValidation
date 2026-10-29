import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
export default function home() {
  return (
    <ScrollView style={[{}]}>
      <View style={styles.signUpForm}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput style={styles.input} placeholder="Username" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    width: "50%",
    marginVertical: 5,
    backgroundColor: "#C3C3CA",
    borderRadius: 99,
  },
  signUpForm: {
    marginVertical: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
});
