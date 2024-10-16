import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 400,
        height: 250,
        borderRadius: 15, // Bo tròn góc ảnh
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        marginBottom: 30,
    },
    view: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#f1f1f1',
    },
});
