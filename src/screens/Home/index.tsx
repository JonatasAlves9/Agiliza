import React from "react";
import { View, Text, Button, Image } from "react-native";
import { logo } from "../../assets/images";
import { Header } from "../../components/header";

import { styles } from './style';

export function Home({ navigation }: any) {
    return (
        <>
            <Header url={'www.google.com'} />

            <View style={styles.container}>
                <Button title="aperte=me" onPress={() => navigation.navigate('Login')} />

            </View>
        </>
    )
}