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

        <TextInput style={styles.input} placeholder="First name" />

        <TextInput style={styles.input} placeholder="Last name" />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput style={styles.input} placeholder="Password" />

        <TextInput style={styles.input} placeholder="Confirm Password" />
        <Pressable>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signUpButton: {
    paddingHorizontal: 15,
    marginVertical: 15,
    paddingVertical: 10,
    backgroundColor: "#4FA6ED",
    borderRadius: 20,
  },
  input: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    width: "50%",
    marginVertical: 10,
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
