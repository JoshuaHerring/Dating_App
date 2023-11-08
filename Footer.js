import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';


export default function Footer() {

    return(
        <View style={styles.container}>
        <Text style={styles.footer}>&copy;2023</Text>

        <Text style={styles.footer}>Joshua Day Herring</Text>
        </View>
    )
}

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


//Can you put the styles for the footer here