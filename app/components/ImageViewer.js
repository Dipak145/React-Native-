import React, { Component } from "react";
import * as Font from "expo-font";
import {
  AppRegistry,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
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

export default class ImageViewer extends Component {
  render() {
    return (
      <ImageBackground source={this.props.imgsource} style={styles.image}>
        {/* <AppText style={{ fontSize: 15 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </AppText> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 25,
  },
});
