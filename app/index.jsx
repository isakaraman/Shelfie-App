import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/Health.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Home</Text>
      <Text style={{ marginTop: 20, marginBottom: 30 }}>House</Text>

      <Link style={styles.link} href="/about">
        About Page
      </Link>
      <Link style={styles.link} href="/contact">
        Contact Page
      </Link>
    </View>
  );
};

export default Home;

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
  img: {
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
