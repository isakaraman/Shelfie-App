import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.text }]}>About</Text>

        <Link style={styles.link} href="/">
          Go Back To Home
        </Link>
      </View>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b7f8ebff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
