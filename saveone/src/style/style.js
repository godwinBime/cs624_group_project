import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme";

const saveOneStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.primary,
    },
    
    itemDescripitionCard:{
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black'
    },
    itemImage:{
        width: 100,
        height: 120
    },
    itemText: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    }

    
})



export default saveOneStyles;


