import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  // Estado para el color de la caja 1
  const [colorCaja1, setColorCaja1] = useState('red'); // Caja 1 inicialmente roja

  // Función para cambiar el color de la Caja 1
  const cambiarColorCaja1 = () => {
    setColorCaja1(colorCaja1 === 'red' ? 'blue' : 'red');
  };

  return (
    <View style={styles.container}>
      {/* Caja 1 (interactiva) */}
      <TouchableOpacity
        style={[styles.caja, { backgroundColor: colorCaja1 }]}
        onPress={cambiarColorCaja1}>
        <Text style={styles.texto}>Caja 1</Text>
      </TouchableOpacity>

      {/* Caja 2 */}
      <View style={[styles.caja, { backgroundColor: 'green' }]}>
        <Text style={styles.texto}>Caja 2</Text>
      </View>

      {/* Caja 3 */}
      <View style={[styles.caja, { backgroundColor: 'yellow' }]}>
        <Text style={styles.texto}>Caja 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra las cajas verticalmente
    alignItems: 'center', // Centra las cajas horizontalmente
    backgroundColor: '#1E3A8A', // Fondo azul oscuro
    padding: 20,
  },
  caja: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 15,
    elevation: 5, // Sombra para un efecto de profundidad
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco para visibilidad
  },
});