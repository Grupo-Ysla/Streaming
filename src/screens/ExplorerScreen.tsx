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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../common/helpers/responsive';
import {ScrollView} from 'react-native-gesture-handler';

export const ExplorerScreen = () => {
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

          <View style={styles.ViewExplorerContainer}>
            <Image style={styles.bottom} />
            <Text style={styles.TextExplorar}>Explorar</Text>
            <Text style={styles.TextSiguiente}>Top Games</Text>
          </View>
          <View style={styles.ViewExplorer}>
            <View style={styles.ViewBackgroundExplorer}>
              <ImageBackground
                source={require('../components/assets/images/FreeBack.png')}
                style={styles.ImageBackgroundExplore}
              />
              <View style={styles.ViewGames}>
                <Image
                  source={require('../components/assets/images/FreeImage.png')}
                  style={styles.ImageGameOne}
                />
                <View style={styles.ViewTextGame}>
                  <Text style={styles.TextExplore}>Free Fire</Text>
                  <Text style={styles.TextNumberExplore}>18.6 K</Text>
                </View>
              </View>
            </View>
            <View style={styles.ViewBackgroundExplorer}>
              <ImageBackground
                source={require('../components/assets/images/FreeBackRe.png')}
                style={styles.ImageBackgroundExplore}
              />
              <View style={styles.ViewGames}>
                <Image
                  source={require('../components/assets/images/Fuego.png')}
                  style={styles.ImageGameTwo}
                />
                <View style={styles.ViewTextGame}>
                  <Text style={styles.TextExplore}>Clash Royale</Text>
                  <Text style={styles.TextNumberExplore}>28.6 K</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.ViewCategory}>
            <Text style={styles.TextCategory}>Categorias</Text>
            <Text style={[styles.TextCategory, {color: 'gray'}]}>
              Canales en vivo
            </Text>
          </View>
          <View style={styles.ViewAllCategories}>
            <Text style={styles.TextAllCategories}>Todas las categorias</Text>
          </View>
          <View style={styles.ViewAllCategoriesContainer}>
            <View style={styles.ViewGameCategoryOne}>
              <View style={styles.ViewBackgroundGameCategory} />

              <Image
                source={require('../components/assets/images/FallGuys.png')}
                style={styles.ImageGameCategoryOne}
              />
              <View style={styles.ViewTextGameCategory}>
                <Text style={styles.TextGameCategory}>
                  Fall Guys: Ultimate knockout
                </Text>
                <View style={styles.ViewInformationGameCategory}>
                  <Text
                    style={[
                      styles.TextInformationGameCategory,
                      {width: normalize(100)},
                    ]}>
                    6.4 Espectadores
                  </Text>
                  <Text style={styles.TextInformationGameCategory}>
                    4.5 M Seguidores
                  </Text>
                </View>
                <View
                  style={[
                    styles.ViewCategory,
                    {marginTop: '2%', width: '100%'},
                  ]}>
                  <View style={styles.ViewCategorySections}>
                    <View style={styles.ViewBackAllCategories} />
                    <Text style={styles.TextCategorySections}>Accion</Text>
                  </View>
                  <View style={styles.ViewCategorySections}>
                    <View style={styles.ViewBackAllCategories} />
                    <Text style={styles.TextCategorySections}>Plataformas</Text>
                  </View>
                  <View style={styles.ViewCategorySections}>
                    <View style={styles.ViewBackAllCategories} />
                    <Text style={styles.TextCategorySections}>Deportes</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.ViewGameCategoryOne,
                {
                  marginTop: '5%',
                },
              ]}>
              <View style={styles.ViewBackgroundGameCategory} />

              <Image
                source={require('../components/assets/images/Fortnite.png')}
                style={styles.ImageGameCategoryOne}
              />
              <View style={styles.ViewTextGameCategory}>
                <Text style={styles.TextGameCategory}>Fortnite</Text>
                <View
                  style={[
                    styles.ViewInformationGameCategory,
                    {
                      width: normalize(200),
                    },
                  ]}>
                  <Text
                    style={[
                      styles.TextInformationGameCategory,
                      {width: normalize(100)},
                    ]}>
                    75.0 Espectadores
                  </Text>
                  <Text style={styles.TextInformationGameCategory}>
                    78.5 M Seguidores
                  </Text>
                </View>
                <View
                  style={[
                    styles.ViewCategory,
                    {
                      marginTop: '2%',
                      width: '100%',
                    },
                  ]}>
                  <View style={styles.ViewCategorySections}>
                    <View style={styles.ViewBackAllCategories} />
                    <Text style={styles.TextCategorySections}>Accion</Text>
                  </View>
                  <View style={styles.ViewCategorySections}>
                    <View style={styles.ViewBackAllCategories} />
                    <Text style={styles.TextCategorySections}>Plataformas</Text>
                  </View>
                  <View style={styles.ViewCategorySections}>
                    <View style={styles.ViewBackAllCategories} />
                    <Text style={styles.TextCategorySections}>Deportes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom1: {
    borderRadius: normalize(20),
    marginLeft: '10%',
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
  TextName: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: normalize(15),
    color: 'white',
    flex: 1,
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
    fontSize: normalize(10),
    color: '#66cdaa',
    flex: 1,
  },
  IconMessage: {
    fontSize: normalize(30),
    color: 'white',
    marginTop: '-2%',
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
  TextExplorar: {
    marginLeft: '1%',
    fontSize: normalize(22),
    fontWeight: '300',
    color: 'white',
    textAlignVertical: 'center',
  },
  TextSiguiente: {
    marginTop: '5%',
    marginStart: '35%',
    fontSize: normalize(13),
    fontWeight: '400',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewExplorerContainer: {
    flexDirection: 'row',
    marginStart: '10%',
    marginEnd: '10%',
    flex: 1,
    height: normalize(40),
  },
  ViewExplorer: {
    flexDirection: 'row',
    marginStart: '2%',
    flex: 1,
    height: normalize(240),
  },
  ViewBackgroundExplorer: {
    flexDirection: 'column',
    flex: 0.8,
  },
  TextExplore: {
    color: 'white',
    marginStart: '10%',
    fontSize: normalize(15),
    marginTop: 0,
  },
  TextNumberExplore: {
    color: 'white',
    marginStart: '10%',
    fontSize: normalize(13),
  },
  ViewCategory: {
    flexDirection: 'row',
    marginStart: '-1%',
    height: normalize(15),
  },
  TextCategory: {
    textAlignVertical: 'center',
    color: 'white',
    marginStart: '8%',
    fontSize: normalize(11),
  },
  ViewAllCategories: {
    flexDirection: 'row',
    marginStart: '2%',
    height: normalize(45),
  },
  TextAllCategories: {
    textAlignVertical: 'center',
    color: 'white',
    marginStart: '4%',
    fontSize: normalize(13),
  },
  ViewCategorySections: {
    flexDirection: 'row',
    margin: '1%',
    borderRadius: normalize(25),
    width: '18%',
    height: normalize(15),
  },
  TextCategorySections: {
    textAlignVertical: 'center',
    color: 'white',
    fontSize: normalize(8),
    fontWeight: '400',
    textAlign: 'center',
    width: '100%',
  },
  ViewBackAllCategories: {
    backgroundColor: '#FFFFFF',
    opacity: 0.1,
    flexDirection: 'row',
    borderRadius: normalize(12),
    width: '100%',
    position: 'absolute',
    height: normalize(17),
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
    marginTop: '-1%',
    width: '100%',
    height: normalize(40),
    left: normalize(15),
  },
  ViewMonedas: {
    flexDirection: 'row',
    flex: 0.7,
    marginEnd: '4%',
  },
  ImageMonedas: {
    marginStart: '10%',
    flex: 1,
    height: '97%',
  },
  ViewContainerIconsDescubrir: {
    flexDirection: 'row',
    marginStart: '10%',
    marginEnd: '10%',
  },
  ViewIconsDescubrir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: '10%',
  },
  ViewRecommendedContainer: {
    flexDirection: 'row',
    marginStart: '10%',
    width: '100%',
    flex: 1,
  },
  ViewGames: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    bottom: normalize(25),
  },
  ImageGameOne: {
    flex: 1,
    width: normalize(180),
    marginTop: normalize(30),
  },
  ImageGameTwo: {
    flex: 1,
    width: normalize(150),
    marginTop: normalize(30),
    marginStart: normalize(30),
  },
  ViewTextGame: {
    flexDirection: 'column',
    width: '100%',
    bottom: normalize(35),
  },
  ViewAllCategoriesContainer: {
    flexDirection: 'column',
    marginStart: '2%',
    height: normalize(400),
    borderRadius: normalize(12),
    marginEnd: '2%',
  },
  ViewGameCategoryOne: {
    flexDirection: 'row',
    height: normalize(130),
    borderRadius: normalize(12),
    width: '100%',
  },
  ViewBackgroundGameCategory: {
    backgroundColor: '#FFFFFF',
    opacity: 0.1,
    flexDirection: 'row',
    height: normalize(125),
    borderRadius: normalize(12),
    width: '100%',
    position: 'absolute',
  },
  ImageGameCategoryOne: {
    left: '10%',
    marginTop: '2%',
    height: normalize(80),
    width: normalize(70),
    borderRadius: normalize(12),
  },
  ViewTextGameCategory: {
    marginStart: '10%',
    width: '100%',
    marginTop: '3%',
    flexDirection: 'column',
  },
  TextGameCategory: {
    color: 'white',
    fontSize: normalize(17),
    width: normalize(170),
  },
  ViewInformationGameCategory: {
    width: normalize(250),
    marginTop: '3%',
    flexDirection: 'row',
  },
  TextInformationGameCategory: {
    color: 'white',
    fontSize: normalize(11),
  },
});
