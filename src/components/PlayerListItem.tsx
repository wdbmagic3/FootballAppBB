import { Text, View, StyleSheet, Image } from "react-native";

import data from '../../assets/data/players.json';
const tablePlayers = data.data.tablePlayers.response;

type PlayerListItemProps = {
    item: (typeof tablePlayers)[0];
};

export default function PlayerListItem({ item }: PlayerListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.squadnumber}>{item.squadnumber}</Text>
            <Image source={{ uri: item.image }} style={styles.playerImage} />
            <View style={{flex: 1}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.age}>Age: {item.age}</Text>
            </View>
            <View style={{flex: 1}}>
            <Text style={styles.position}>{item.position}</Text>
            </View>
            <Text style={styles.appearances}>{item.appearances}</Text>
            <Text style={styles.goals}>{item.goals}</Text>
        </View>
    );    
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,

        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    squadnumber: {
        width: 40,
        textAlign: 'center',
    },
    name: {
        flex: 1,
        width: 100,
        textAlign: 'center',
        marginBottom: 5,
    },
    age: {
        textAlign: 'center',
        flex: 1,
    },
    position: {
        width: 80,
        textAlign: 'center',
    },
    appearances: {
        width: 40,
        textAlign: 'center',
    },
    goals: {
        width: 40,
        textAlign: 'center',
    },
    playerImage: {
        height: 60,
        aspectRatio: 1,
        marginRight: 10,
    },

});
