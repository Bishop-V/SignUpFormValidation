import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpForm } from "@/schemas/signUpSchema";
export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = (data: SignUpForm) => {
    const { firstName, lastName, email } = data;
  };
  return (
    <ScrollView style={[{}]}>
      <View style={styles.signUpForm}>
        <Text style={styles.title}>Sign Up</Text>

        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="First name"
            />
          )}
        />

        {errors.firstName && (
          <Text style={styles.error}>{errors.firstName.message}</Text>
        )}

        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Last name"
            />
          )}
        />

        {errors.lastName && (
          <Text style={styles.error}>{errors.lastName.message}</Text>
        )}

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              keyboardType="email-address"
            />
          )}
        />

        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          )}
        />

        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        <Controller
          control={control}
          name="passwordConfirm"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Confirm Password"
              secureTextEntry
            />
          )}
        />

        {errors.passwordConfirm && (
          <Text style={styles.error}>{errors.passwordConfirm.message}</Text>
        )}

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
  error: {
    color: "#C83E3E",
  },
});
