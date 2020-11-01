import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function UploadPhotos() {
    return (
        
            <View style={globalStyles.container}>
                <Text>Upload screen</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
})