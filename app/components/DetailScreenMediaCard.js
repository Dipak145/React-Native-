import React from "react";
import { View, StyleSheet } from "react-native";

function DetailScreenMediaCard(props) {
  return <View style={styles.main}></View>;
}

const styles = StyleSheet.create({
  main: {
    width: "90%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default DetailScreenMediaCard;
