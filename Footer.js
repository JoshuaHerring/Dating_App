import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

// A simple component that returns a container with some text
export default function Footer() {

    return(
        <View style={styles.container}>
        <Text style={styles.footer}>&copy;2023</Text>

        <Text style={styles.footer}>Joshua Day Herring</Text>
        </View>
    )
}

// Simple styles to prove that I can self contain the styles in the same file as my exported component whilst only exporting the footer and not he styles
styles = StyleSheet.create({
    container: {
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    footer:{
        color: 'pink',
    }
})
