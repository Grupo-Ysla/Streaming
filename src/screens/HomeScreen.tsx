import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../common/helpers/responsive';

export const HomeScreen = () => {
  console.log('normalize:', normalize(12));
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={true} barStyle="default" translucent />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../components/assets/images/HomeTwich.png')}
            resizeMode="cover"
            style={styles.ImageBackgroundPrincipal}
          />

          <View style={styles.ViewHeader}>
            <View style={styles.ViewBackgroundHeader} />

            <View style={styles.ViewContainerPerfil}>
              <Image
                style={styles.bottom1}
                source={require('../components/assets/images/Perfil.png')}
              />
              <View style={styles.TextPerfil}>
                <Text style={styles.TextName}>M4st3rmiau</Text>
                <Text style={styles.TextOnline}>ONLINE</Text>
              </View>
              <View style={{flexDirection: 'row-reverse', flex: 1}}>
                <Icon
                  name="md-chatbubble-ellipses-outline"
                  style={styles.IconMessage}
                />
              </View>
              <View style={styles.ViewMonedas}>
                <Image
                  source={require('../components/assets/images/monedas.png')}
                  style={styles.ImageMonedas}
                />
                <Text style={styles.TextCoins}>200</Text>
              </View>
            </View>
          </View>

          <View style={styles.ViewDescubrirContainer}>
            <Image style={styles.bottom} />
            <Text style={styles.TextDescubrir}>Descubrir</Text>
            <Text style={styles.TextSiguiendo}>Siguiendo</Text>
          </View>
          <View style={styles.ViewContainerIconsDescubrir}>
            <ImageBackground
              source={require('../components/assets/images/Siguiendo.png')}
              resizeMode="cover"
              style={styles.ImageBackgroundName1}
            />
            <View style={styles.ViewIconsDescubrir}>
              <TouchableOpacity style={styles.ViewStyle}>
                <Image
                  style={styles.iconStyle}
                  source={require('../components/assets/images/S.Accion.png')}
                />
                <Text style={styles.textStyle}>Accion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ViewStyle}>
                <Image
                  style={styles.iconStyle}
                  source={require('../components/assets/images/Sports.png')}
                />
                <Text style={styles.textStyle}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ViewStyle}>
                <Image
                  style={styles.iconStyle}
                  source={require('../components/assets/images/Rpg.png')}
                />
                <Text style={styles.textStyle}>RPG</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ViewStyle}>
                <Image
                  style={styles.iconStyle}
                  source={require('../components/assets/images/Musica.png')}
                />
                <Text style={styles.textStyle}>Musica</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ViewCanals}>
            <Text style={styles.TextCanals}>Canales en vivo</Text>
          </View>
          <View style={[styles.ViewCanals, {height: normalize(175)}]}>
            <ImageBackground
              source={require('../components/assets/images/Streamer.png')}
              resizeMode="cover"
              style={styles.ImageStreamer}
            />
            <View style={styles.ViewStreamers}>
              <Text style={styles.TextStreamer}>En vivo</Text>
            </View>
            <View style={styles.ViewViews}>
              <Text style={styles.TextViews}>13k Views</Text>
            </View>
          </View>
          <View style={styles.ViewTransmission}>
            <Text style={{color: 'white', fontSize: normalize(12)}}>
              Auronplay Esta transmitiendo Amoung us
            </Text>
            <View style={styles.ViewCategory}>
              <View
                style={[styles.ViewCategorySections, {width: normalize(41)}]}>
                <Text style={styles.TextCategorySections}>Accion</Text>
              </View>
              <View
                style={[styles.ViewCategorySections, {width: normalize(75)}]}>
                <Text style={styles.TextCategorySections}>Plataformas</Text>
              </View>
              <View
                style={[styles.ViewCategorySections, {width: normalize(55)}]}>
                <Text style={styles.TextCategorySections}>Deportes</Text>
              </View>
            </View>
          </View>
          <View style={styles.ViewCanals}>
            <Text style={styles.TextRecommended}>Juegos recomendados</Text>
          </View>

          <View style={styles.ViewRecommendedContainer}>
            <View style={styles.ViewRecommended}>
              <Image
                style={styles.ImageRecommended}
                source={require('../components/assets/images/FallGuys.png')}
              />
              <Text style={styles.TextGame}>Fall Guys</Text>
            </View>
            <View style={styles.ViewRecommendedJuegos}>
              <Image
                style={styles.ImageRecommended}
                source={require('../components/assets/images/League.png')}
              />
              <Text style={styles.TextGame}>Mobile L.</Text>
            </View>
            <View style={styles.ViewRecommendedJuegos}>
              <Image
                style={styles.ImageRecommended}
                source={require('../components/assets/images/CallOfDuty.png')}
              />
              <Text style={styles.TextGame}>Call oF Duty</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(10),
    fontFamily: 'Poppins-Regular',
  },
  iconStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: normalize(6),
    width: normalize(50),
  },
  bottom1: {
    borderRadius: normalize(20),
    marginLeft: '6%',
    backgroundColor: '#8a2be2',
    height: '100%',
    width: '100%',
    flex: 0.3,
    flexDirection: 'row',
  },
  bottom: {
    borderRadius: normalize(20),
    borderColor: '#8a2be2',
    marginTop: normalize(20),
    width: normalize(7),
    height: normalize(7),
    backgroundColor: '#8a2be2',
  },

  ViewStyle: {
    flexDirection: 'column',
    flex: 1,
  },

  TextName: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: normalize(15),
    color: 'white',
    flex: 1,
    fontFamily: 'Poppins-Bold',
    letterSpacing: normalize(0.8),
  },
  ImageBackgroundPrincipal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  ImageBackgroundName: {
    position: 'absolute',
    top: '-20%',
    right: 0,
    left: 0,
    opacity: 0.3,
    height: '110%',
  },
  TextOnline: {
    fontSize: normalize(8),
    color: '#29C69B',
    flex: 1,
    fontFamily: 'Poppins-Medium',
  },
  IconMessage: {
    fontSize: normalize(25),
    color: 'white',
  },
  TextCoins: {
    position: 'absolute',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    marginStart: '40%',
    flex: 1,
    height: '80%',
    fontSize: normalize(12),
  },
  ImageBackgroundExplore: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    opacity: 0.1,
    height: '100%',
    width: '95%',
  },
  TextDescubrir: {
    marginLeft: '3%',
    fontSize: normalize(20),
    color: 'white',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Bold',
    letterSpacing: normalize(0.5),
  },
  TextSiguiendo: {
    marginTop: '5%',
    marginStart: '7%',
    fontSize: normalize(13),
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    opacity: 0.3,
  },
  ViewDescubrirContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    marginStart: '6%',
    marginEnd: '6%',
    flex: 1,
    height: normalize(40),
  },
  ViewDescubrir: {
    flexDirection: 'row',
    marginStart: '2%',
    flex: 1,
    height: normalize(240),
  },
  ViewCanals: {
    flexDirection: 'row',
    marginStart: '6%',
    marginEnd: '6%',
    height: normalize(45),
  },
  TextCanals: {
    fontSize: normalize(16),
    fontWeight: '400',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: normalize(1),
  },
  ImageStreamer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: '100%',
  },
  ViewStreamers: {
    flexDirection: 'row',
    margin: '5%',
    backgroundColor: '#E33FB1',
    borderRadius: normalize(25),
    width: normalize(60),
    height: normalize(25),
  },
  TextStreamer: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(11.5),
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    letterSpacing: normalize(0.8),
    width: normalize(60),
  },
  ViewViews: {
    flexDirection: 'row',
    margin: '5%',
    marginStart: '35%',
    backgroundColor: '#4740A9',
    borderRadius: normalize(25),
    width: normalize(70),
    height: normalize(25),
  },
  TextViews: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(11.5),
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    letterSpacing: normalize(0.8),
    width: normalize(70),
    textAlign: 'center',
  },
  ViewTransmission: {
    flexDirection: 'column',
    marginStart: '6%',
    marginEnd: '6%',
    marginTop: '3%',
    height: normalize(40),
  },
  ViewCategory: {
    flexDirection: 'row',
    marginTop: '1%',
    borderRadius: normalize(25),
    width: '100%',
  },
  ViewCategorySections: {
    flexDirection: 'row',
    margin: '1%',
    backgroundColor: '#707070',
    borderRadius: normalize(25),
    width: '18%',
    height: normalize(15),
    opacity: 0.2,
  },
  TextCategorySections: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(10),
    fontWeight: '400',
    marginStart: '18%',
    textAlign: 'center',
  },
  TextRecommended: {
    fontSize: normalize(15),
    fontWeight: '400',
    textAlignVertical: 'center',
    color: 'white',
  },
  ViewRecommended: {
    width: normalize(65),
    borderRadius: normalize(15),
    height: normalize(60),
  },
  ViewRecommendedJuegos: {
    marginStart: '10%',
    width: normalize(65),
    borderRadius: normalize(15),
    height: normalize(60),
  },
  TextGame: {
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(11.5),
    marginTop: '3%',
    fontFamily: 'Poppins-Regular',
    letterSpacing: normalize(0.8),
  },
  ImageRecommended: {
    height: '100%',
    width: '100%',
    borderRadius: normalize(15),
  },
  ImageBackgroundName1: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    opacity: 0.3,
    height: '100%',
  },
  ViewHeader: {
    flexDirection: 'row',
    flex: 1,
    height: normalize(100),
  },
  ViewBackgroundHeader: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: '100%',
    opacity: 0.05,
    height: normalize(100),
  },
  ViewContainerPerfil: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: normalize(30),
    marginTop: normalize(35),
  },
  TextPerfil: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: normalize(40),
    left: normalize(12),
  },
  ViewMonedas: {
    flexDirection: 'row',
    flex: 0.6,
    marginEnd: '4%',
  },
  ImageMonedas: {
    marginStart: '10%',
    flex: 1,
    height: normalize(30),
  },
  ViewContainerIconsDescubrir: {
    flexDirection: 'row',
    marginTop: '2%',
    marginStart: '6%',
    marginEnd: '6%',
    height: normalize(65),
  },
  ViewIconsDescubrir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: '10%',
    height: normalize(40),
    marginTop: normalize(10),
  },
  ViewRecommendedContainer: {
    flexDirection: 'row',
    marginStart: '6%',
    width: '100%',
    flex: 1,
    height: normalize(190),
  },
  text: {
    fontFamily: 'TextUtilizar',
    fontSize: 16,
  },
});
