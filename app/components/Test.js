import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Vibration,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { useFocusEffect } from "@react-navigation/native";

const initData = [
  { key: 1, label: "test1" },
  { key: 2, label: "test2" },
];

function Test({ images }) {
  const [data, setData] = useState(initData);

  const renderItem = useCallback(
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={{
            // flex: 1,
            alignItems: "center",
            justifyContent: "center",
            // height: 100,
            // width: 100,
            backgroundColor: isActive ? "red" : "black",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onLongPress={drag}
          onLongPress={() => {
            drag();
            Vibration.vibrate(30);

            console.log("item:", item);
            console.log("index:", index);
          }}
        >
          <Image
            style={{ height: 200, width: 200 }}
            source={{ uri: item.uri }}
          />
        </TouchableOpacity>
      );
    },
    []
  );

  // useFocusEffect(() => {
  //   console.log("useFocusEffect");
  //   images &&
  //     images.map((x, index) => {
  //       // console.log("x", x);
  //       x.key = index;
  //       // console.log("x", x);
  //     });
  //   setData(images);
  // });
  useFocusEffect(
    React.useCallback(() => {
      console.log("useFocusEffect");
      images &&
        images.map((x, index) => {
          // console.log("x", x);
          x.key = index;
          // console.log("x", x);
        });
      setData(images);
    }, [images])
  );

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        autoscrollThreshold={100}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => {
          setData(data);
          // console.log("data:", data);
        }}
      />
    </View>
  );
}

export default Test;
