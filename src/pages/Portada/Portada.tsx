import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Carousel } from "@ant-design/react-native";
import { useState } from "react";

const Portada = () => {
  const [selectedIndex, setSelectedIndex] = useState<any>(2);
  const [carouselRef, setCarouselRef] = useState<any>();

  const onHorizontalSelectedIndexChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View>
      <View >
        <Image style={styles.images} source={require('../../../assets/pngtree-box-filled-with-various-tools-on-a-black-floor-picture-image_2480888.jpg')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  images: {
    // transform: [{rotate: 'deg'}],
    width: "100%",
    height: '100%',
  },
});

export default Portada;
