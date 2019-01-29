import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle, textStyles, buttonStyle } = styles;

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <TouchableOpacity onPress={onAccept} style={buttonStyle}>
                        <Text style={textStyles}>
                            Yes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDecline} style={buttonStyle}>
                        <Text style={textStyles}>
                            No
                        </Text>
                    </TouchableOpacity>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    textStyles:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 15,
        marginRight: 5,
        width: 150,
    }
})

export { Confirm };