import { StyleSheet , Dimensions } from "react-native"

const dim = Dimensions.get("window");

export default styles = {
    default: StyleSheet.create({
        bg: {
            height: dim.height,
            width: dim.width,
        },
        highBtn: {
            position: 'absolute',
            bottom: 100  
        }
    }),
    //screens
    start: StyleSheet.create({
        bg: {
            height: dim.height,
            width: dim.width,
            alignItems: 'center',   
        },
        logo: {
            width: 115,
            height: 115,
            marginTop: 115,
        },
        buttons: {
           position: 'absolute',
           bottom: 100  
        }
    }),
    login: StyleSheet.create({
        forgot: {
            alignSelf: 'flex-end',
            marginHorizontal:16
        },
        forgotView:{
            flexDirection: 'row'
        },
        forgotText: {
            fontFamily: 'Monopolis-Medium',
            fontSize: 14,
            color: 'white',
            marginRight: 5
        }
    }),
    cadastrar: StyleSheet.create({
        pic:{
            alignItems: 'center'
        },
        scroll:{
            alignItems: 'center',
            paddingBottom: 100
        },
        scrollView:{
            height: dim.height - 430
        },
        highBtn: {
            position: 'absolute',
            bottom: 50  
        }
    }),
    //components
    formParent: StyleSheet.create({
        buttonBack: {
            paddingHorizontal: 20,
            paddingVertical: 20
        },
        title: {
            color: 'white',
            fontSize: 34,
            fontFamily: 'Metropolis-Bold',
            marginVertical: 15,
            marginLeft: 15,
        },
        form: {
            flex: 1,
            alignItems: 'center',
        },
    }),
    InputForms: StyleSheet.create({
        View: {
            width: dim.width - 32,
            height: 64,
            backgroundColor: '#FFF',
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 2,
            justifyContent: 'center',
            marginBottom: 8,
        },
        title: {
            textAlignVertical: 'center',
            fontFamily: 'Metropolis-Regular',
            color: '#9B9B9B',
            marginLeft: 20,
            position: 'absolute'
        },
        inputText: {
            fontFamily: 'Metropolis-Medium',
            color: '#2D2D2D',
            fontSize: 18,
            lineHeight: 20,
            marginLeft: 17,
            paddingTop: 28,
            paddingBottom: 12,
        },
        instructions:{
            color: 'white',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            marginHorizontal: 16,
            lineHeight: 20,
            marginBottom: 13
        }
    }),
    buttons: StyleSheet.create({
        btn1: {
            width: dim.width - 110,
            height: 40,
            borderColor: '#F2B705',
            borderWidth: 3,
            borderRadius: 20,
            marginBottom: 25,
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
        },
        btn2: {
            width: dim.width - 110,
            height: 40,
            backgroundColor: '#F2B705',
            borderRadius: 20,
            marginBottom: 25,
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
        },
        text1:{
            width: dim.width - 110,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily: 'Metropolis-Medium',
            letterSpacing: 2,
            color: '#F2B705',
            fontSize: 20,
            textTransform: 'uppercase'
        },
        text2:{
            width: dim.width - 110,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily: 'Metropolis-Medium',
            letterSpacing: 2,
            color: '#FFFFFF',
            fontSize: 20,
            textTransform: 'uppercase'
        }
    }),
}