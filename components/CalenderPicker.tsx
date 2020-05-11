import React, { FC } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CalenderPicker: FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={"investment"}
                style={{ height: 50, width: 150 }}
                onValueChange={(value, index) => navigation.navigate("Calender", { path: value })}
            >
                <Picker.Item label="investment" value="investment" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});

export default CalenderPicker;