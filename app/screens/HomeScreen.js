import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HomeScreenCard from "../components/HomeScreenCard";
import Carousel from "react-native-snap-carousel";
import { createStackNavigator } from "@react-navigation/stack";
import ItemDetailScreen from "../components/ItemDetailScreen";
import AppStatusBar from "../components/AppStatusBar";

class HomeScreen extends React.Component {
  _navigation = this.props.navigation;

  constructor(props) {
    super(props);

    this.widht = Dimensions.get("window").width;
    this.itemWidth = (this.widht * 80) / 100;
    console.log(this.itemWidth);

    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Nike Joyride",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem = ({ item, index }) => {
    console.log("Item " + item + " and index " + index);

    return (
      <TouchableOpacity
        onPress={() => {
          this._navigation.navigate("DetailScreen");
        }}
      >
        <HomeScreenCard />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <AppStatusBar />
        <Text style={styles.newsTitle}>NEWS</Text>
        <Carousel
          loop={true}
          sliderWidth={this.widht}
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.carouselItems}
          itemWidth={this.itemWidth}
          renderItem={this._renderItem}
          layout={"default"}
        />
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#01011f",
  },

  newsTitle: {
    color: "white",
    alignSelf: "flex-start",
    margin: 15,
    fontSize: 18,
  },
});
