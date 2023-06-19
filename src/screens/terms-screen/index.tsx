import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {Images} from 'src/assets';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import Button, {Alignments} from 'src/components/button';
import {fontWeights} from 'src/config/fontWeight';
import {colors} from 'src/config/colors';
import {fontSizes} from 'src/config/fontSize';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const TermsScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [showFull, setShowFull] = useState(false);

  // Selectors

  // Effects
  useEffect(() => {
    console.log('UseEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('UseLayoutEffect');
  }, []);

  // Functions

  // Validators

  // Screen Design
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.main}
        resizeMode="cover"
        style={{
          width: fullWidth,
          height: fullHeight,
        }}>
        <ScrollView style={styles.bottomView}>
          <View
            style={{
              marginTop: 60 * heightRef,
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
            }}>
            <Icon
              onPress={() => {
                navigation.goBack();
              }}
              name={'angle-left'}
              type={IconType.FontAwesome}
              size={30 * heightRef}
              color={'#FFFFFF'}
              style={{top: -10 * heightRef}}
            />
            <Text style={styles.infoText2}>Conditions générales</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => {}}
                name={'bell'}
                type={IconType.Feather}
                size={24 * heightRef}
                color={'transparent'}
              />
            </View>
          </View>
          <View style={{width: '90%'}}>
            <Text style={styles.infoText3}>
              Bienvenue sur My.tontine, une application de gestion de tontines
              basée en Côte-d'Ivoire. Les présentes Conditions Générales
              d'Utilisation (CGU) décrivent les termes et conditions régissant
              l'utilisation de l'application My.tontine, y compris toutes les
              fonctionnalités et services associés à l'application.
            </Text>
            <Text style={styles.infoText3}>
              1. Acceptation des conditions d’utilisation
            </Text>
            <Text style={styles.infoText3}>
              En utilisant l'application My.tontine, vous acceptez les présentes
              CGU. Si vous n'acceptez pas ces termes et conditions, vous ne
              pouvez pas utiliser l'application My.tontine.
            </Text>
            <Text style={styles.infoText3}>2. Description des services</Text>
            <Text style={styles.infoText3}>
              L'application My.tontine permet aux utilisateurs de créer, gérer
              et rejoindre des tontines en ligne. Les utilisateurs peuvent
              également effectuer des paiements et recevoir des paiements en
              utilisant les fonctionnalités intégrées de l'application.
            </Text>
            <Text style={styles.infoText3}>3. Comptes d’utilisateur</Text>
            <Text style={styles.infoText3}>
              Pour utiliser l'application My.tontine, vous devez créer un compte
              utilisateur. Vous êtes responsable de toutes les activités qui se
              produisent sous votre compte et vous acceptez de ne pas partager
              votre compte avec des tiers. Vous acceptez également de fournir
              des informations précises et complètes lors de la création de
              votre compte. Si vous découvrez une utilisation non autorisée de
              votre compte, vous devez en informer immédiatement l'équipe de
              support de My.tontine.
            </Text>
            <Text style={styles.infoText3}>4. Propriété intellectuelle</Text>
            <Text style={styles.infoText3}>
              L'ensemble des éléments présents sur l'application My.tontine,
              notamment les textes, les logos, les images, les photographies,
              les vidéos, les chartes graphiques, les logiciels, les bases de
              données, les sons, les musiques, les noms, les marques, les
              enseignes, les slogans, les dessins, les modèles, les chartes
              graphiques, les chartes d'ergonomie, les fonctionnalités et les
              services proposés, sont la propriété exclusive de My.tontine et/ou
              de ses partenaires. Toute reproduction, représentation,
              utilisation ou adaptation, sous quelque forme que ce soit, de tout
              ou partie de ces éléments, sans l'accord préalable écrit de
              My.tontine, est strictement interdite et constitue un délit de
              contrefaçon.
            </Text>
            <Text style={styles.infoText3}>5. Responsabilité</Text>
            <Text style={styles.infoText3}>
              My.tontine décline toute responsabilité quant aux erreurs ou
              omissions de l'application My.tontine. L'application My.tontine
              est fournie "telle quelle" sans garantie d'aucune sorte, explicite
              ou implicite, y compris, mais sans s'y limiter, les garanties de
              qualité marchande, d'adéquation à un usage particulier, de non-
              violation et de sécurité. My.tontine ne sera pas responsable de
              tout dommage direct, indirect, accessoire, spécial, punitif,
              consécutif ou autre résultant de l'utilisation de l'application
              My.tontine, même si My.tontine a été informé de la possibilité de
              tels dommages.
            </Text>
            <Text style={styles.infoText3}>
              6. Modification des conditions d’utilisation
            </Text>
            <Text style={styles.infoText3}>
              My.tontine se réserve le droit de modifier ces conditions
              d'utilisation à tout moment, à sa seule discrétion. Si nous
              modifions ces conditions d'utilisation, nous vous en informerons
              par le biais de l'application My.tontine ou par e-mail. Votre
              utilisation continue de l'application My.tontine après la
              publication des modifications constitue votre acceptation des
              nouvelles conditions d'utilisation.
            </Text>
            <Text style={styles.infoText3}>7. Résiliation</Text>
            <Text style={styles.infoText3}>
              My.tontine se réserve le droit de résilier votre accès à
              l'application My.tontine à tout moment, avec ou sans motif. En cas
              de résiliation, vos droits d'utilisation de l'application
              My.tontine seront immédiatement suspendus.
            </Text>
            <Text style={styles.infoText3}>
              8. Loi applicable et juridiction compétente
            </Text>
            <Text style={styles.infoText3}>
              Les présentes CGU sont régies et interprétées conformément aux
              lois de la Côte-d'Ivoire. Tout litige découlant de l'utilisation
              de l'application My.tontine sera soumis à la compétence exclusive
              des tribunaux compétents de la Côte-d’Ivoire. En utilisant
              l'application My.tontine, vous acceptez d'être lié par les
              présentes CGU. Si vous avez des questions ou des préoccupations
              concernant ces conditions d'utilisation, veuillez contacter
              l'équipe de support de My.tontine.
            </Text>
            <Text style={styles.infoText3}>
              9. Confidentialité et protection des données
            </Text>
            <Text style={styles.infoText3}>
              My.tontine s'engage à protéger la confidentialité des informations
              personnelles des utilisateurs et à respecter les lois et
              réglementations applicables en matière de protection des données.
              Les informations collectées auprès des utilisateurs sont utilisées
              uniquement pour fournir les services de l'application My.tontine
              et pour communiquer avec les utilisateurs au sujet de leur compte
              et de leurs transactions. Les informations personnelles des
              utilisateurs ne sont pas partagées avec des tiers sans le
              consentement de l'utilisateur, sauf si cela est requis par la loi.
            </Text>
            <Text style={styles.infoText3}>10. Sécurité des données</Text>
            <Text style={styles.infoText3}>
              My.tontine prend des mesures raisonnables pour protéger les
              informations des utilisateurs contre la perte, le vol, l'accès non
              autorisé, la divulgation, la modification ou la destruction.
              Cependant, aucune méthode de transmission de données sur Internet
              ou de stockage électronique n'est complètement sûre. Par
              conséquent, My.tontine ne peut garantir la sécurité absolue des
              informations des utilisateurs.
            </Text>
            <Text style={styles.infoText3}>11. Utilisation responsable</Text>
            <Text style={styles.infoText3}>
              Les utilisateurs de l'application My.tontine s'engagent à utiliser
              les services de manière responsable et légale. Les utilisateurs ne
              doivent pas utiliser l'application My.tontine pour des activités
              illégales, frauduleuses ou malveillantes. My.tontine se réserve le
              droit de suspendre ou de résilier le compte d'un utilisateur si
              celui-ci viole les présentes CGU ou s'engage dans une activité
              illégale ou frauduleuse.
            </Text>
            <Text style={styles.infoText3}>
              12. Communication avec les utilisateurs
            </Text>
            <Text style={styles.infoText3}>
              My.tontine peut envoyer des communications, y compris des e-mails,
              des messages in-app et des notifications push, aux utilisateurs de
              l'application My.tontine concernant leur compte, les transactions,
              les mises à jour du service et les offres spéciales. Les
              utilisateurs peuvent choisir de ne plus recevoir ces
              communications en modifiant les paramètres de notification dans
              l'application.
            </Text>
            <Text style={styles.infoText3}>13. Durée</Text>
            <Text style={styles.infoText3}>
              Les présentes CGU entrent en vigueur à compter de la date de votre
              acceptation et demeurent en vigueur jusqu'à leur résiliation par
              l'une ou l'autre des parties conformément aux termes des
              présentes.
            </Text>

            <Text style={styles.infoText3}>
              Nous espérons que vous apprécierez l'utilisation de l'application
              My.tontine. Si vous avez des questions ou des commentaires
              concernant les CGU ou l'application My.tontine, n'hésitez pas à
              contacter notre équipe de support.
            </Text>
          </View>
        </ScrollView>
        {/* </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TermsScreen;

// Bienvenue sur My.tontine, une application de gestion de tontines basée en Côte-d'Ivoire. Les présentes Conditions Générales d'Utilisation (CGU) décrivent les termes et conditions régissant l'utilisation de l'application My.tontine, y compris toutes les fonctionnalités et services associés à l'application.

// Acceptation des conditions d’utilisation

// En utilisant l'application My.tontine, vous acceptez les présentes CGU. Si vous n'acceptez pas ces termes et conditions, vous ne pouvez pas utiliser l'application My.tontine.
// Description des services

// L'application My.tontine permet aux utilisateurs de créer, gérer et rejoindre des tontines en ligne. Les utilisateurs peuvent également effectuer des paiements et recevoir des paiements en utilisant les fonctionnalités intégrées de l'application.

// Comptes d’utilisateur

// Pour utiliser l'application My.tontine, vous devez créer un compte utilisateur. Vous êtes responsable de toutes les activités qui se produisent sous votre compte et vous acceptez de ne pas partager votre compte avec des tiers. Vous acceptez également de fournir des informations précises et complètes lors de la création de votre compte. Si vous découvrez une utilisation non autorisée de votre compte, vous devez en informer immédiatement l'équipe de support de My.tontine.

//  4.Propriété intellectuelle

// L'ensemble des éléments présents sur l'application My.tontine, notamment les textes, les logos, les images, les photographies, les vidéos, les chartes graphiques, les logiciels, les bases de données, les sons, les musiques, les noms, les marques, les enseignes, les slogans, les dessins, les modèles, les chartes graphiques, les chartes d'ergonomie, les fonctionnalités et les services proposés, sont la propriété exclusive de My.tontine et/ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'accord préalable écrit de My.tontine, est strictement interdite et constitue un délit de contrefaçon.

//  5.Responsabilité
// My.tontine décline toute responsabilité quant aux erreurs ou omissions de l'application My.tontine. L'application My.tontine est fournie "telle quelle" sans garantie d'aucune sorte, explicite ou implicite, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier, de non- violation et de sécurité. My.tontine ne sera pas responsable de tout dommage direct, indirect, accessoire, spécial, punitif, consécutif ou autre résultant de l'utilisation de l'application My.tontine, même si My.tontine a été informé de la possibilité de tels dommages.

//  6.Modification des conditions d’utilisation

// My.tontine se réserve le droit de modifier ces conditions d'utilisation à tout moment, à sa seule discrétion. Si nous modifions ces conditions d'utilisation, nous vous en informerons par le biais de l'application My.tontine ou par e-mail. Votre utilisation continue de l'application My.tontine après la publication des modifications constitue votre acceptation des nouvelles conditions d'utilisation.

// 7.Résiliation
// My.tontine se réserve le droit de résilier votre accès à l'application My.tontine à tout moment, avec ou sans motif. En cas de résiliation, vos droits d'utilisation de l'application My.tontine seront immédiatement suspendus.

// 8.Loi applicable et juridiction compétente
// Les présentes CGU sont régies et interprétées conformément aux lois de la Côte-d'Ivoire. Tout litige découlant de l'utilisation de l'application My.tontine sera soumis à la compétence exclusive des tribunaux compétents de la Côte-d’Ivoire. En utilisant l'application My.tontine, vous acceptez d'être lié par les présentes CGU. Si vous avez des questions ou des préoccupations concernant ces conditions d'utilisation, veuillez contacter l'équipe de support de My.tontine.

// 9.Confidentialité et protection des données
// My.tontine s'engage à protéger la confidentialité des informations personnelles des utilisateurs et à respecter les lois et réglementations applicables en matière de protection des données. Les informations collectées auprès des utilisateurs sont utilisées uniquement pour fournir les services de l'application My.tontine et pour communiquer avec les utilisateurs au sujet de leur compte et de leurs transactions. Les informations personnelles des utilisateurs ne sont pas partagées avec des tiers sans le consentement de l'utilisateur, sauf si cela est requis par la loi.

// 10.Sécurité des données
// My.tontine prend des mesures raisonnables pour protéger les informations des utilisateurs contre la perte, le vol, l'accès non autorisé, la divulgation, la modification ou la destruction. Cependant, aucune méthode de transmission de données sur Internet ou de stockage électronique n'est complètement sûre. Par conséquent, My.tontine ne peut garantir la sécurité absolue des informations des utilisateurs.

// 11.Utilisation responsable
// Les utilisateurs de l'application My.tontine s'engagent à utiliser les services de manière responsable et légale. Les utilisateurs ne doivent pas utiliser l'application My.tontine pour des activités illégales, frauduleuses ou malveillantes. My.tontine se réserve le droit de suspendre ou de résilier le compte d'un utilisateur si celui-ci viole les présentes CGU ou s'engage dans une activité illégale ou frauduleuse.

// 12.Communication avec les utilisateurs
// My.tontine peut envoyer des communications, y compris des e-mails, des messages in-app et des notifications push, aux utilisateurs de l'application My.tontine concernant leur compte, les transactions, les mises à jour du service et les offres spéciales. Les utilisateurs peuvent choisir de ne plus recevoir ces communications en modifiant les paramètres de notification dans l'application.

// 13.Durée
// Les présentes CGU entrent en vigueur à compter de la date de votre acceptation et demeurent en vigueur jusqu'à leur résiliation par l'une ou l'autre des parties conformément aux termes des présentes.

// Nous espérons que vous apprécierez l'utilisation de l'application My.tontine. Si vous avez des questions ou des commentaires concernant les CGU ou l'application My.tontine, n'hésitez pas à contacter notre équipe de support.
