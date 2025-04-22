import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function imageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={ imageSource } style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 340,
    borderRadius: 18,
  },
});
