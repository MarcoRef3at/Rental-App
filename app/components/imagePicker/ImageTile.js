import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import colors from "../../config/colors";

const { width } = Dimensions.get("window");

class ImageTile extends React.PureComponent {
  render() {
    const {
      item,
      index,
      selected,
      selectImage,
      selectedItemNumber,
      renderSelectedComponent,
      renderExtraComponent,
    } = this.props;
    if (!item) return null;
    return (
      <TouchableHighlight
        style={{ opacity: selected ? 1 : 0.5 }}
        underlayColor="transparent"
        onPress={() => selectImage(index)}
      >
        <View style={{ position: "relative" }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ImageBackground style={styles.image} source={{ uri: item.uri }}>
              {selected &&
                renderSelectedComponent &&
                renderSelectedComponent(selectedItemNumber)}
              {renderExtraComponent && renderExtraComponent(item)}
            </ImageBackground>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ImageTile;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width / 3,
    height: width / 3,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
