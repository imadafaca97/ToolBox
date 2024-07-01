import { useState, useCallback, useRef } from "react";
import YoutubePlayer from 'react-native-youtube-iframe'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";


const ModalComponent = ({ imageUrl, videoId, name, text }: any) => {
  const [playing, setPlaying] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {videoId && <YoutubePlayer
              height={200}
              width={300}
              play={playing}
              videoId={videoId}
            />}
            {!videoId && imageUrl && <Image source={imageUrl} style={styles.image} />}
            <Text style={styles.title}>{name || "No text available"}</Text>
            <Text style={styles.modalText}>{text || "No text available"}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.card]}
        onPress={() => setModalVisible(true)}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  },
  modalText: {
    fontSize: 14,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    marginBottom: 50,
  },
});
export default ModalComponent;
