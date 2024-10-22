import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons/Feather';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, } from '@expo-google-fonts/montserrat'
import { useNavigation } from '@react-navigation/native'; 

export default function Home() {

    const navigation = useNavigation();

  // declarei a font importada
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
});
if (!fontsLoaded) {
    return <Text> Carregando font... </Text>
}else
  return(
    <View style={styles.container}>
    {/*<StatusBar style='auto' />*/}

    <View style={styles.backheader}>

       <View style={styles.icon}>
                
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu-outline" size={40} color={"#fff"} />
                </TouchableOpacity>
                
                <Image
                    style={styles.imghome}
                    source={require('./assets/foto3x4.jpeg')}
                />
        </View>
    </View>

        <Text style={styles.nameuser}>
            Bem vindo(a),{"\n"}Usuário(a)
        </Text>

        
        <View style={{width: '100%', alignItems: 'center', height: '90%', position: 'absolute', paddingTop: 200}}>
            <View style={styles.ResumoSaldo}>
                <Text style={{color: '#7E7E7E', fontFamily: 'Montserrat_400Regular', paddingLeft: 5}}> Seu saldo total </Text>
                <Text style={{color: '#FF5300', fontSize: 35, fontFamily: 'Montserrat_700Bold', paddingTop: 10}}> R$ 8.500,00 </Text>
            </View>
        </View>


        <View style={styles.verifique}>

            <View style={styles.VerifAccount}>
                <Text style={{ fontFamily: 'Montserrat_400Regular', color: '#FF5300', fontSize: 15, marginRight: 30, marginLeft: 30}}>Verifique suas contas {"\n"}bancárias</Text>
            </View>


            <Ionicons style={styles.seta}
                name="arrow-forward-outline" size={25} color={"#FF5300"}>
            </Ionicons>

        </View>


       
</View>
  );
}








