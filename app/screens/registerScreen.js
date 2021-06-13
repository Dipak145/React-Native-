import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import StatusBarScreen from "../components/StatusBarScreen";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("* Username"),
  email: Yup.string().required().email().label("* Email"),
  password: Yup.string().required().min(4).label("* Passowrd"),
  confirmPassword: Yup.string().required().min(4).label("* ConfirmPassowrd"),
});

function RegisterScreen() {
  // const [backColor, setbackColor] = useState("white");
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    console.log("Image" + image);
  };

  return (
    <StatusBarScreen>
      <ImageBackground
        style={styles.image}
        source={require("../assets/background.jpg")}
        resizeMode="stretch"
      >
        <View style={styles.container}>
          <View style={styles.profileImage}>
            <AppText style={{ fontSize: 10 }}>PROFILE PICTURE</AppText>
            <TouchableOpacity onPress={pickImage}>
              {image === null ? (
                <Image
                  source={require("../assets/camera.png")}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    margin: 15,
                  }}
                />
              ) : (
                <Image
                  source={{ uri: image }}
                  style={{
                    height: 90,
                    width: 90,
                    borderRadius: 45,
                    margin: 15,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.gender}>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                backgroundColor: "white",
                margin: 10,
              }}
            >
              <FontAwesome5
                name="male"
                size={50}
                style={{ alignSelf: "center", marginTop: 3 }}
              />
              <AppText style={{ margin: 15 }}>Boy</AppText>
            </View>

            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                backgroundColor: "white",
                margin: 10,
              }}
            >
              <FontAwesome5
                name="female"
                size={50}
                style={{ alignSelf: "center", marginTop: 3 }}
              />
              <AppText style={{ margin: 15 }}>Girl</AppText>
            </View>

            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                backgroundColor: "white",
                margin: 10,
              }}
            >
              <MaterialCommunityIcons
                name="human-male"
                size={60}
                style={{ alignSelf: "center", marginTop: 3 }}
              />
              <AppText style={{ margin: 9 }}>Other</AppText>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.input}>
              <AppTextInput placeholder="NAME" />
              <AppTextInput placeholder="EMAIL" />
              <AppTextInput placeholder="PASSWORD" />
              <AppTextInput placeholder="CONFIRM-PASSWORD" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppButton title="CREATE ACCOUNT" />
            </View>
            <View style={styles.text}>
              <AppText>Have an account?</AppText>
              <TouchableOpacity onPress={() => console.log("Submitted")}>
                <AppText>Log in</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </StatusBarScreen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 0,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  gender: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
