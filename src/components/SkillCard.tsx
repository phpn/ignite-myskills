import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet
} from 'react-native';


interface skilCardProps extends TouchableOpacityProps {
    skill: string
}


export function SkillCard({ skill, ...rest }: skilCardProps){

    return(
        <TouchableOpacity 
            key={skill}  
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.textSkill}>
                { skill }
            </Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({

    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    }
})