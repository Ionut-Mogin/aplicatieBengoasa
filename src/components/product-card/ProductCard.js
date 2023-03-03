import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

const ProductCard = (props) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri: props.image}} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 400,
        height: 400
    },
    container: {
        flex: 0.5,
        padding: 20,
        margin: 15
    },
    title: {
        fontSize: 22,
        color: '#0c0c0c',
        margin: 5,
    },
    description: {
        fontSize: 18,
        color: '#ccc',
        margin: 2
    }
})

export default ProductCard