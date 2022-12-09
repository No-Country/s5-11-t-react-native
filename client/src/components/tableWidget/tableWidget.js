import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './stylesTableWidget';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { TablesContext } from '../../context/TablesContext';

const TableWidget = () => {

    const {value,state} = useContext(TablesContext)
    const navigation = useNavigation();
 
    
    return (
        <TouchableOpacity 
            style={styles.widgetContainer}
            onPress={()=>{
                navigation.navigate('StatusTables')
            }}
            
            >
            <View style={[styles.state, {backgroundColor:state}]}></View>
            <Image source={require('../../../assets/Icons/tableWhite.png')} />
            <Text style={styles.tableName}>{value.id}</Text>
        </TouchableOpacity>
    );
}

export default TableWidget;
