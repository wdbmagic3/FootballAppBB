import { Text, View, StyleSheet, Image } from "react-native";

import data from '../../assets/data/table-rankings.json';
const tableRankings = data.data.tableRankings.response;

type TableListItemProps = {
    item: (typeof tableRankings)[0];
};

export default function TableListItem({ item }: TableListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.position}>{item.position}</Text>
            <Image source={{ uri: item.driver.image }} style={styles.driverImage} />
            <Text style={styles.name}>{item.driver.name}</Text>
            <Text style={styles.played}>{item.played}</Text>
            <Text style={styles.gd}>{item.driver.gd}</Text>
            <Text style={styles.points}>{item.points}</Text>
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
    position: {
        width: 40,
        textAlign: 'center',
    },
    name: {
        flex: 1,
        width: 160,
        marginBottom: 5,
    },
    played: {
        width: 40,
        textAlign: 'center',
    },
    gd: {
        width: 40,
        textAlign: 'center',
    },
    points: {
        width: 40,
        textAlign: 'center',
    },
    driverImage: {
        height: 60,
        aspectRatio: 1,
        marginRight: 10,
    },

});
