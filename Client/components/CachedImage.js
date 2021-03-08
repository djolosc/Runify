import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Crypto from 'expo-crypto';
const CachedImage = (props) => {
  const [image, setImage] = useState({
    imgURI: '',
  });
  let unmounted = false;
  useEffect(() => {
    (async () => {
      const filesystemURI = await getImageFilesystemKey(props.source.uri);
      loadImage(filesystemURI, props.source.uri);
    })();
    return () => (unmounted = true);
  }, []);
  useEffect(() => {
    if (image.imgURI.length) {
      (async () => {
        const filesystemURI = await getImageFilesystemKey(props.source.uri);
        if (
          props.source.uri === image.imgURI ||
          filesystemURI === image.imgURI
        ) {
          return null;
        }
        loadImage(filesystemURI, props.source.uri);
      })();
    }
    return () => (unmounted = true);
  }, [image]);
  const getImageFilesystemKey = async (remoteURI) => {
    const hashed = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      remoteURI
    );
    return `${FileSystem.cacheDirectory}${hashed}`;
  };
  const loadImage = async (filesystemURI, remoteURI) => {
    try {
      // Use the cached image if it exists
      const metadata = await FileSystem.getInfoAsync(filesystemURI);
      if (!unmounted && metadata.exists) {
        setImage({
          imgURI: filesystemURI,
        });
        return;
      }
      // otherwise download to cache
      const imageObject = await FileSystem.downloadAsync(
        remoteURI,
        filesystemURI
      );
      if (!unmounted) {
        setImage({
          imgURI: imageObject.uri,
        });
      }
    } catch (err) {
      console.log('Image loading error:', err);
      if (!unmounted) {
        setImage({ imgURI: remoteURI });
      }
    }
  };
  return (
    <View>
      {props.isBackground ? (
        <ImageBackground
          {...props}
          source={image.imgURI ? { uri: image.imgURI } : null}
        >
          {props.children}
        </ImageBackground>
      ) : (
        <Image
          {...props}
          source={image.imgURI ? { uri: image.imgURI } : null}
        />
      )}
    </View>
  );
};
export default CachedImage;
