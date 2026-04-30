import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Image } from 'expo-image';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  // Estado para el color de la caja 1
  const [colorCaja1, setColorCaja1] = useState('red'); // Caja 1 inicialmente roja

  // Función para cambiar el color de la Caja 1
  const cambiarColorCaja1 = () => {
    setColorCaja1(colorCaja1 === 'red' ? 'blue' : 'red'); // Alterna entre rojo y azul
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Paso 1: Creación de 3 cajas */}
      <View style={styles.container}>
        {/* Caja 1 (que cambia de color) */}
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

      {/* Paso 2: Información sobre cómo probar */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      {/* Paso 3: Explora */}
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>

      {/* Paso 4: Obtener un nuevo comienzo */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flexDirection: 'row', // Distribuir las cajas horizontalmente
    justifyContent: 'space-around', // Espacio entre cajas
    alignItems: 'center', // Centrar las cajas verticalmente
    marginTop: 50, // Ajuste para que las cajas no se peguen a la parte superior
  },
  caja: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Bordes redondeados
    marginHorizontal: 10, // Espacio entre las cajas
  },
  texto: {
    fontSize: 18,
    color: '#fff', // Texto blanco para que sea visible sobre los colores
  },
});