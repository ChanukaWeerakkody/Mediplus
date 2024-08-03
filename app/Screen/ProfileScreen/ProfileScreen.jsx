import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import {images} from "../../../constants";
import Header from "../HomeScreen/Header";

export default function ProfileScreen() {
    const { user } = useUser();

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header/>
            <StatusBar style="light" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={images.logo}
                        style={styles.logoImage}
                    />
                </View>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={styles.image}
                />
                <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{user?.emailAddresses[0].emailAddress}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        height: 300,
        width: '100%',
        padding: 20,
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    logoImage: {
        height: 300,
        width: '100%',
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: -20,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
    },
    infoContainer: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoText: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
    },
});

