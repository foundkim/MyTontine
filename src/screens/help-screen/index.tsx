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

const HelpScreen = (props: any) => {
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
        <View
          style={{
            marginTop: 83.5 * heightRef,
            flexDirection: 'row',
            width: '95%',
            justifyContent: 'space-between',
            marginBottom: 20 * heightRef,
          }}>
          <Icon
            onPress={() => {}}
            name={'angle-left'}
            type={IconType.FontAwesome}
            size={30 * heightRef}
            color={'transparent'}
          />
          <Image
            style={styles.titleImage}
            resizeMode="contain"
            source={Images.heading}
          />
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => {
                navigation.navigate('NotificationsScreen');
              }}
              name={'bell'}
              type={IconType.Feather}
              size={24 * heightRef}
              color={'#FFFFFF'}
            />
            <Icon
              onPress={() => {
                navigation.navigate('SettingsScreen');
              }}
              name={'settings'}
              type={IconType.Feather}
              size={22 * heightRef}
              color={'#FFFFFF'}
              style={{marginLeft: 10}}
            />
          </View>
        </View>
        <ScrollView style={styles.bottomView}>
          <View style={{width: '90%'}}>
            <Text style={styles.infoText3}>Qu'est-ce que My.tontine ?</Text>
            <Text style={styles.infoText3}>
              My.tontine est une application mobile qui permet aux groupes de
              personnes de participer à une tontine en ligne. Les membres d'un
              groupe peuvent cotiser de l'argent régulièrement, et chaque membre
              du groupe reçoit une somme d'argent à tour de rôle. L'application
              gère les transactions, les notifications et les rappels pour vous,
              afin que vous puissiez vous concentrer sur les cotisations et les
              paiements.
            </Text>
            <Text style={styles.infoText3}>
              Comment fonctionne My.tontine ?
            </Text>
            <Text style={styles.infoText3}>
              My.tontine est conçu pour être simple à utiliser. Vous pouvez
              créer ou rejoindre une tontine en quelques clics et ajouter vos
              amis, votre famille ou vos collègues. Vous pouvez configurer les
              montants et la fréquence des cotisations, et choisir le montant
              que chaque membre recevra à tour de rôle. L'application gère les
              cotisations, les paiements et les notifications pour vous, afin
              que vous n'ayez pas à vous en soucier.
            </Text>
            <Text style={styles.infoText3}>
              Quel est le coût de l'application My.tontine ?
            </Text>
            <Text style={styles.infoText3}>
              L'application My.tontine est gratuite à télécharger et à utiliser.
              Cependant, l'application peut facturer des frais de transaction
              pour les paiements effectués via l'application. Ces frais
              dépendent du mode de paiement et peuvent varier en fonction de
              votre pays et de votre devise.
            </Text>
            <Text style={styles.infoText3}>
              Comment puis-je ajouter des membres à ma tontine ?
            </Text>
            <Text style={styles.infoText3}>
              Pour ajouter des membres à votre tontine, ouvrez l'application et
              accédez à votre groupe. Cliquez sur l'icône "Ajouter des membres"
              et invitez des amis en utilisant leur adresse e-mail ou leur
              numéro de téléphone. Les membres ajoutés à votre tontine devront
              s'inscrire et télécharger l'application My.tontine pour
              participer.
            </Text>
            <Text style={styles.infoText3}>
              Comment puis-je retirer de l'argent de ma tontine ?
            </Text>
            <Text style={styles.infoText3}>
              My.tontine vous offre la possibilité de retirer de l'argent de
              votre tontine conformément aux règles définies par la plateforme.
              En général, les paiements sont effectués à tour de rôle et
              représentent 20% du montant total des cotisations pour chaque
              cycle, avec le solde payé à la fin de chaque cycle (par mois ou
              par semaine). Lorsque c'est votre tour de recevoir un paiement,
              vous pouvez facilement retirer l'argent via l'application. Le
              montant sera alors transféré sur le compte bancaire, mobile-money
              ou carte de crédit de votre choix. Il vous suffit de sélectionner
              le mode de paiement que vous préférez. Il est également possible
              de sortir de la Tontine à tout moment et de recevoir vos
              cotisations, mais cela entraînera la perte de votre garantie
              initiale déposée lors de votre inscription sur la plateforme.
            </Text>
            <Text style={styles.infoText3}>
              Mon argent est-il en sécurité avec My.tontine ?
            </Text>
            <Text style={styles.infoText3}>
              Chez My.tontine, nous accordons une grande importance à la
              sécurité de vos informations et de votre argent. Nous avons mis en
              place des mesures de sécurité de pointe pour protéger vos données
              et vos transactions. Notre application utilise des technologies
              avancées, comme la vérification en deux étapes pour les
              connexions, afin de garantir la confidentialité de vos
              informations. En outre, nous nous engageons à respecter les normes
              de sécurité et de confidentialité des données les plus strictes de
              votre pays. Nous sommes conscients de l'importance de la sécurité
              pour nos utilisateurs et travaillons en permanence pour maintenir
              la sécurité de notre plateforme. Vous pouvez ainsi avoir l'esprit
              tranquille en utilisant My.tontine.
            </Text>
            <Text style={styles.infoText3}>
              Comment puis-je contacter le support de My.tontine ?
            </Text>
            <Text style={styles.infoText3}>
              Si vous avez des questions ou des préoccupations concernant
              l'application My.tontine, n'hésitez pas à contacter notre équipe
              de support. Vous pouvez facilement accéder à l'aide en ouvrant
              l'application et en cliquant sur l'icône "Aide". Cette option vous
              permettra d'accéder à la page d'aide où vous trouverez des
              réponses à des questions fréquemment posées, ainsi que des options
              pour contacter directement notre équipe de support. Nous avons
              également mis en place une FAQ (Foire Aux Questions) pour répondre
              aux questions les plus courantes et vous aider à résoudre les
              problèmes rapidement et efficacement. Vous pouvez donc être sûr
              que vous trouverez une réponse à vos questions en utilisant notre
              application My.tontine.
            </Text>
            <Text style={styles.infoText3}>
              Quels sont les avantages d'utiliser l'application My.tontine ?
            </Text>
            <Text style={styles.infoText3}>
              La gestion de votre groupe de tontine est désormais facile et
              efficace grâce à My.tontine. Notre application automatise les
              cotisations, les paiements et les notifications pour vous éviter
              d'avoir à tenir des registres manuels ou d'envoyer des rappels à
              chaque membre individuellement. Cela vous permet de gagner du
              temps et de vous concentrer sur les activités qui comptent
              vraiment pour vous.
              {'\n'}
              Si vous ne faites pas encore partie d'une tontine, My.tontine vous
              permet de rejoindre une communauté existante sur notre plateforme.
              Vous pouvez également créer votre propre groupe de tontine et
              gérer toutes les transactions. Dans ce cas, vous serez responsable
              de toutes les transactions et de la réception des cotisations du
              groupe. Quelle que soit l'option que vous choisissez, My.tontine
              est là pour vous offrir une expérience de gestion de tontine
              simple et pratique.
            </Text>
            <Text style={styles.infoText3}>
              Flexibilité dans la définition des règles de la tontine :
            </Text>
            <Text style={styles.infoText3}>
              Chez My.tontine, nous savons que chaque groupe de tontine a des
              besoins différents. C'est pourquoi notre plateforme vous permet de
              définir les règles de votre tontine pour répondre aux besoins de
              votre groupe et de chaque membre individuel. Vous pouvez ainsi
              déterminer le montant des cotisations, la fréquence des paiements
              et la devise utilisée. Cette flexibilité vous permet de planifier
              votre budget en fonction des exigences de votre tontine et de vous
              adapter facilement aux changements éventuels. De plus, en cas de
              retard dans le paiement des cotisations, notre plateforme offre
              une certaine flexibilité pour que vous puissiez vous organiser et
              gérer votre budget en toute tranquillité. Chez My.tontine, notre
              objectif est de faciliter la gestion de votre groupe de tontine en
              offrant des règles adaptées à vos besoins et à ceux de chaque
              membre de votre groupe.
            </Text>
            <Text style={styles.infoText3}>Transparence et confiance :</Text>
            <Text style={styles.infoText3}>
              L'application My.tontine offre une grande transparence sur les
              cotisations et les paiements effectués que ce soit
              individuellement ou en groupe. Chaque membre peut vérifier les
              cotisations et les paiements effectués, ce qui renforce la
              confiance et assure la transparence de l'ensemble du processus.
            </Text>
            <Text style={styles.infoText3}>Économie de temps :</Text>
            <Text style={styles.infoText3}>
              L'application My.tontine est conçue pour économiser du temps et de
              l'énergie. Elle s'occupe de l'envoi des notifications et des
              rappels, ainsi que de la gestion des transactions. Cela permet aux
              membres de se concentrer sur les cotisations et les paiements,
              plutôt que sur la gestion administrative.
            </Text>
            <Text style={styles.infoText3}>Sécurité des transactions :</Text>
            <Text style={styles.infoText3}>
              L'application My.tontine utilise des technologies de pointe pour
              protéger vos données et vos transactions, y compris le cryptage
              SSL pour les communications sécurisées et la vérification en deux
              étapes pour les connexions. En outre, l'application est conforme
              aux normes de sécurité et de confidentialité des données les plus
              strictes, ce qui garantit la sécurité de vos transactions.
            </Text>
            <Text style={styles.infoText3}>Accessibilité :</Text>
            <Text style={[styles.infoText3, {marginBottom: 70 * heightRef}]}>
              L'application My.tontine est disponible sur les plateformes
              Android et iOS, ce qui la rend accessible à un grand nombre de
              personnes. Cela permet aux membres de la tontine de se connecter
              facilement, où qu'ils soient et à tout moment.
            </Text>
          </View>
        </ScrollView>
        {/* </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HelpScreen;

// Qu'est-ce que My.tontine ?

// My.tontine est une application mobile qui permet aux groupes de personnes de participer à une tontine en ligne. Les membres d'un groupe peuvent cotiser de l'argent régulièrement, et chaque membre du groupe reçoit une somme d'argent à tour de rôle. L'application gère les transactions, les notifications et les rappels pour vous, afin que vous puissiez vous concentrer sur les cotisations et les paiements.

// Comment fonctionne My.tontine ?

// My.tontine est conçu pour être simple à utiliser. Vous pouvez créer ou rejoindre une tontine en quelques clics et ajouter vos amis, votre famille ou vos collègues. Vous pouvez configurer les montants et la fréquence des cotisations, et choisir le montant que chaque membre recevra à tour de rôle. L'application gère les cotisations, les paiements et les notifications pour vous, afin que vous n'ayez pas à vous en soucier.

// Quel est le coût de l'application My.tontine ?

// L'application My.tontine est gratuite à télécharger et à utiliser. Cependant, l'application peut facturer des frais de transaction pour les paiements effectués via l'application. Ces frais dépendent du mode de paiement et peuvent varier en fonction de votre pays et de votre devise.

// Comment puis-je ajouter des membres à ma tontine ?

// Pour ajouter des membres à votre tontine, ouvrez l'application et accédez à votre groupe. Cliquez sur l'icône "Ajouter des membres" et invitez des amis en utilisant leur adresse e-mail ou leur numéro de téléphone. Les membres ajoutés à votre tontine devront s'inscrire et télécharger l'application My.tontine pour participer.

// Comment puis-je retirer de l'argent de ma tontine ?

// My.tontine vous offre la possibilité de retirer de l'argent de votre tontine conformément aux règles définies par la plateforme. En général, les paiements sont effectués à tour de rôle et représentent 20% du montant total des cotisations pour chaque cycle, avec le solde payé à la fin de chaque cycle (par mois ou par semaine). Lorsque c'est votre tour de recevoir un paiement, vous pouvez facilement retirer l'argent via l'application. Le montant sera alors transféré sur le compte bancaire, mobile-money ou carte de crédit de votre choix. Il vous suffit de sélectionner le mode de paiement que vous préférez.
// Il est également possible de sortir de la Tontine à tout moment et de recevoir vos cotisations, mais cela entraînera la perte de votre garantie initiale déposée lors de votre inscription sur la plateforme.

// Mon argent est-il en sécurité avec My.tontine ?

// Chez My.tontine, nous accordons une grande importance à la sécurité de vos informations et de votre argent. Nous avons mis en place des mesures de sécurité de pointe pour protéger vos données et vos transactions. Notre application utilise des technologies avancées, comme la vérification en deux étapes pour les connexions, afin de garantir la confidentialité de vos informations.
// En outre, nous nous engageons à respecter les normes de sécurité et de confidentialité des données les plus strictes de votre pays. Nous sommes conscients de l'importance de la sécurité pour nos utilisateurs et travaillons en permanence pour maintenir la sécurité de notre plateforme. Vous pouvez ainsi avoir l'esprit tranquille en utilisant My.tontine.

// Comment puis-je contacter le support de My.tontine ?

// Si vous avez des questions ou des préoccupations concernant l'application My.tontine, n'hésitez pas à contacter notre équipe de support. Vous pouvez facilement accéder à l'aide en ouvrant l'application et en cliquant sur l'icône "Aide". Cette option vous permettra d'accéder à la page d'aide où vous trouverez des réponses à des questions fréquemment posées, ainsi que des options pour contacter directement notre équipe de support.
// Nous avons également mis en place une FAQ (Foire Aux Questions) pour répondre aux questions les plus courantes et vous aider à résoudre les problèmes rapidement et efficacement. Vous pouvez donc être sûr que vous trouverez une réponse à vos questions en utilisant notre application My.tontine.

// Quels sont les avantages d'utiliser l'application My.tontine ?

// La gestion de votre groupe de tontine est désormais facile et efficace grâce à My.tontine. Notre application automatise les cotisations, les paiements et les notifications pour vous éviter d'avoir à tenir des registres manuels ou d'envoyer des rappels à chaque membre individuellement. Cela vous permet de gagner du temps et de vous concentrer sur les activités qui comptent vraiment pour vous.
// Si vous ne faites pas encore partie d'une tontine, My.tontine vous permet de rejoindre une communauté existante sur notre plateforme. Vous pouvez également créer votre propre groupe de tontine et gérer toutes les transactions. Dans ce cas, vous serez responsable de toutes les transactions et de la réception des cotisations du groupe. Quelle que soit l'option que vous choisissez, My.tontine est là pour vous offrir une expérience de gestion de tontine simple et pratique.

// Flexibilité dans la définition des règles de la tontine :
// Chez My.tontine, nous savons que chaque groupe de tontine a des besoins différents. C'est pourquoi notre plateforme vous permet de définir les règles de votre tontine pour répondre aux besoins de votre groupe et de chaque membre individuel. Vous pouvez ainsi déterminer le montant des cotisations, la fréquence des paiements et la devise utilisée. Cette flexibilité vous permet de planifier votre budget en fonction des exigences de votre tontine et de vous adapter facilement aux changements éventuels. De plus, en cas de retard dans le paiement des cotisations, notre plateforme offre une certaine flexibilité pour que vous puissiez vous organiser et gérer votre budget en toute tranquillité. Chez My.tontine, notre objectif est de faciliter la gestion de votre groupe de tontine en offrant des règles adaptées à vos besoins et à ceux de chaque membre de votre groupe.

// Transparence et confiance :
// L'application My.tontine offre une grande transparence sur les cotisations et les paiements effectués que ce soit individuellement ou en groupe. Chaque membre peut vérifier les cotisations et les paiements effectués, ce qui renforce la confiance et assure la transparence de l'ensemble du processus.

// Économie de temps :
//  L'application My.tontine est conçue pour économiser du temps et de l'énergie. Elle s'occupe de l'envoi des notifications et des rappels, ainsi que de la gestion des transactions. Cela permet aux membres de se concentrer sur les cotisations et les paiements, plutôt que sur la gestion administrative.

// Sécurité des transactions :
// L'application My.tontine utilise des technologies de pointe pour protéger vos données et vos transactions, y compris le cryptage SSL pour les communications sécurisées et la vérification en deux étapes pour les connexions. En outre, l'application est conforme aux normes de sécurité et de confidentialité des données les plus strictes, ce qui garantit la sécurité de vos transactions.

// Accessibilité :
// L'application My.tontine est disponible sur les plateformes Android et iOS, ce qui la rend accessible à un grand nombre de personnes. Cela permet aux membres de la tontine de se connecter facilement, où qu'ils soient et à tout moment.
