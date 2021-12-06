import React, {useCallback} from "react";
import type {FC, Dispatch, SetStateAction} from 'react'
import {View} from 'react-native'
import { Colors } from "react-native-paper";
import {styles} from './Person.style'
import {IconText} from '../components'
import * as D from '../data'

export type PersonIconsProps = {
    person: D.IPerson
    setPerson: Dispatch<SetStateAction<D.IPerson>>
}
// prettier-ignore
const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {
    const commentPressed = useCallback(
        () =>
            setPerson((person) => {
                const {comment} = person.counts
                return {...person, counts: {...person.counts, comment: comment + 1}}
        }), [])
    const retweetPressed = useCallback(
        () =>
            setPerson((person) => {
                const {retweet} = person.counts
                return {...person, counts: {...person.counts, retweet: retweet + 1}}
        }), [])
    const heartPressed = useCallback(
        () =>
            setPerson((person) => {
                const {heart} = person.counts
                return {...person, counts: {...person.counts, heart: heart + 1}}
        }), [])

    return (
        <View style={(styles.countsView)}>
            <IconText viewStyle={styles.touchableIcon} onPress={commentPressed}
                name="comment" size={24} color={Colors.blue500}
                textStyle={styles.iconText} text={person.counts.comment} />
            <IconText viewStyle={styles.touchableIcon} onPress={retweetPressed}
                name="comment" size={24} color={Colors.blue500}
                textStyle={styles.iconText} text={person.counts.comment} />
            <IconText viewStyle={styles.touchableIcon} onPress={heartPressed}
                name="comment" size={24} color={Colors.blue500}
                textStyle={styles.iconText} text={person.counts.comment} />
        </View>
    )
}
export default PersonIcons