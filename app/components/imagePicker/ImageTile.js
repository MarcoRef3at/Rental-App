import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";

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
              {selectedItemNumber != 0 && (
                <Text style={styles.text}>{selectedItemNumber}</Text>
              )}
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
  text: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});
