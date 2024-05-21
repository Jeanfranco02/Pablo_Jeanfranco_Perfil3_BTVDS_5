import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const estudiantesData = [
    {
        id: 1,
        name: 'Papas Fritas',
        descripcion: 'Son un plato de patatas que se cocinan mediante fritura hasta que queden doradas y crujientes',
        photo: require('../image/papas.jpeg')
    },
    {
        id: 2,
        name: 'Hamburguesa',
        descripcion: 'Una hamburguesa es un emparedado que contiene carne picada o de origen vegetal, ​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse',
        photo: require('../image/hamb.jpeg')
    },
    {
        id: 3,
        name: 'Pizza',
        descripcion: 'La pizza es un plato hecho con una masa plana, habitualmente circular, elaborada con harina de trigo, levadura, agua y sal que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a temperatura alta en un horno de leña',
        photo: require('../image/pizza.jpeg')
    },
    {
        id: 4,
        name: 'elegi',
        descripcion: '20220106',
        photo: require('../image/20181103_153346.jpg')
    },
    {
        id: 5,
        name: 'elegi',
        descripcion: '20220777',
        photo: require('../image/coito.jpeg')
    },
    {
        id: 6,
        name: 'elegi',
        descripcion: '20220666',
        photo: require('../image/coito.jpeg')
    },
];

const Estudiantes = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {estudiantesData.map(student => (
                <Card key={student.id} style={styles.card}>
                    <Card.Content>
                        <Title style={styles.name}>{student.name}</Title>
                        <Paragraph style={styles.descripcion}>Descripción: {student.descripcion}</Paragraph>
                    </Card.Content>
                    <Card.Cover source={student.photo} style={styles.image} />
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#1f1f1f', // Color de fondo para la pantalla
    },
    card: {
        width: 300,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#9d2d23', // Color de fondo para la card
        overflow: 'hidden', // Para que la imagen no se salga de los bordes de la card
    },
    image: {
        height: 220,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#ffffff', // Color del texto del nombre
    },
    descripcion: {
        fontSize: 16,
        textAlign: 'center',
        color: '#d7d7d7', // Color del texto del descripcion
        marginBottom: 10,
    },
});

export default Estudiantes;