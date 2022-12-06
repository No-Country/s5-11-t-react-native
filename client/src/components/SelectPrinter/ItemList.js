import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './StylesItemList';
import React from 'react';

const ItemList = ({
  label,
  value,
  onPress,
  connected,
  actionText,
  color = '#00BCD4',
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label || 'UNKNOWN'}</Text>
        <Text>{value}</Text>
      </View>
      {connected && <Text style={styles.connected}>Terhubung</Text>}
      {!connected && (
        <TouchableOpacity onPress={onPress} style={styles.button(color)}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemList;
