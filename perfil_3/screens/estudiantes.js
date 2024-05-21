import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const estudiantesData = [
    {
        id: 1,
        name: 'Jeanfranco Campos',
        carnet: '20220106',
        photo: require('../image/20181103_153346.jpg')
    },
    {
        id: 2,
        name: 'Pablo Sex',
        carnet: '20220777',
        photo: require('../image/coito.jpeg')
    },
    {
        id: 3,
        name: 'Pablo Sex2',
        carnet: '20220666',
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
                        <Paragraph style={styles.carnet}>Carnet: {student.carnet}</Paragraph>
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
        backgroundColor: '#07379c', // Color de fondo para la card
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
    carnet: {
        fontSize: 16,
        textAlign: 'center',
        color: '#d7d7d7', // Color del texto del carnet
        marginBottom: 10,
    },
});

export default Estudiantes;