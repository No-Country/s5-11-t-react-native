import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E7E7E7',
    marginBottom: 12,
    padding: 12,
    borderRadius: 4,
  },
  label: { fontWeight: 'bold' },
  connected: { fontWeight: 'bold', color: '#00BCD4' },
  button: (color) => ({
    backgroundColor: color,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  }),
  actionText: { color: 'white' },
});
