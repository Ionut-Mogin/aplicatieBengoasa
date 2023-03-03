import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import ProductCard from '../../components/product-card/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('https://happyfamily.herokuapp.com/teaching-be/api/products/show');
                const json = await response.json();
               setProducts(json.products);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])
  return (
    <View>
            <SafeAreaView style={styles.safeArea}>

                    <ScrollView style={styles.scrollView} 
                        contentContainerStyle={styles.contentContainer}
                        persistentScrollbar={true}>
                            {products.map(item => <ProductCard key={item._id} {...item}/>)}
                    </ScrollView>
            </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      paddingTop: StatusBar.currentHeight,
  },
  body: {
    padding: 20,
    backgroundColor: 'black'
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#fff',
  }
});

export default Products;
