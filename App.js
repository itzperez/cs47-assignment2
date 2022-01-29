import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>

        <View style={styles.top}>
            <Image style={{flex: 1, height: '60%', width: '100%', resizeMode: 'contain'}} source={require('./assets/Icons/menu_light.png')} />
            <Text style={{fontSize: 40, fontFamily: 'Sydney-Bold'}}> ensom </Text>
            <Image style={{flex: 1, height: '60%', width: undefined, resizeMode: 'contain'}} source={require('./assets/Icons/sun.png')} />
        </View>

        <View style={styles.middle}>


            <View style={styles.middleTop}>
                <Image style={styles.middleImage} source={require('./assets/Profiles/mtl.jpg')} />
            </View>

            <View style={styles.middleBottom} >
                <View style={styles.middleBottomPadded}>

                    <View style={styles.middleBottomPaddedA}>
                        <Text style={{color: Themes.light.text, fontSize: 28, fontFamily: 'Sydney'}}> My hottest take </Text>

                    </View>

                    <View style={styles.middleBottomPaddedB}>
                        <Image style={{flex: .2, height: '90%', width: undefined, resizeMode: 'contain'}}source={require('./assets/Icons/player_light.png')} />
                        <Image style={{flex: .7, height: undefined, width: undefined, resizeMode: 'contain'}}source={require('./assets/Icons/audio_waveform_light.png')} />

                    </View>

                </View>

            </View>




        </View>

        <View style={styles.bottom}>
            <View style={styles.bottom1} >
                <Image style={{flex: 1, height: undefined, width: undefined, resizeMode: 'contain'}} source={require('./assets/Icons/discover_light.png')} />
                <Text style={{color: Themes.light.textSecondary, textAlign: 'center'}}> Discover </Text>
            </ View>
            <View style={styles.bottom2} >
                <Image style={{flex: 1, height: undefined, width: undefined, resizeMode: 'contain'}} source={require('./assets/Icons/heart_light.png')} />
                <Text style={{color: Themes.light.textSecondary, textAlign: 'center'}}> Matches </Text>
            </ View>
            <View style={styles.bottom3} >
                <Image style={{flex: 1, height: undefined, width: undefined, resizeMode: 'contain'}} source={require('./assets/Icons/messages_light.png')} />
                <Text style={{color: Themes.light.textSecondary, textAlign: 'center'}}> DMs </Text>
            </ View>


        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: .1,
    width: '90%',
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middle: {
    flex: .8,
    width: '90%',
    marginTop: '5%',
    marginBottom: '25%'

  },
  middleTop: {
    flex: .7,
    height: undefined,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleImage: {
      flex: 1,
      height: undefined,
      width: '90%',
      resizeMode: 'contain',
      borderRadius: 40,
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
  },
  middleBottom: {
    flex: .3,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',


  },
  middleBottomPadded: {
    flex: .8, //to add top and bottom margins
    height: undefined,
    width: '90%',
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },

  },
  middleBottomPaddedA: {
    flex: .35, //to add top and bottom margins
    height: undefined,
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',


  },
  middleBottomPaddedB: {
    flex: .65, //to add top and bottom margins
    height: undefined,
    width: '100%',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },


  bottom: {
    flex: .1,
    width: '100%',
    backgroundColor: Themes.light.text,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  bottom1: {
    flex: .2,
    backgroundColor: Themes.light.text,
    height: '100%',
    width: '100%',

  },
  bottom2: {
    flex: .2,
    backgroundColor: Themes.light.text,

  },
  bottom3: {
    flex: .2,
    backgroundColor: Themes.light.text,

  },
});
