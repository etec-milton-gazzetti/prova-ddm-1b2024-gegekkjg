import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fundo from './assets/BIOMAS.png';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={fundo} style={{width: '100%', height: '100%', backgroundColor: '#F4F2E8'}}>
    <View style={{ alignItems: 'center', justifyContent: 'center', top:'83%', }}>
      <View style={{justifyContent: "space-around", flexDirection: "row"}}>
    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate("PageOne")}>
      <Text style={{color:"white"}}>Conheça os biomas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate("About")}>
      <Text style={{color:"white"}}>Sobre</Text>
    </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
}

function PageoneScreen({navigation}) {
  return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate("Amazonia")} style={styles.botaoA}>
        <Text>Amazônia</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Caatinga")} style={styles.botaoA}>
        <Text>Caatinga</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Cerrado")} style={styles.botaoA}>
        <Text>Cerrado</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("MataAtlantica")} style={styles.botaoA}>
        <Text>Mata Atlântica</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Pampa")} style={styles.botaoA}>
        <Text>Pampa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Pantanal")} style={styles.botaoA}>
        <Text>Pantanal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.botaoA}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      </View>
  );
}

function PagetwoScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Amazônia</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagethreeScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Caatinga</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagefourScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cerrado</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagefiveScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mata Atlântica</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagesixScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pampa</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagesevenScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantanal</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de sobre</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name ="About" component={AboutScreen} />
        <Stack.Screen name='PageOne' component={PageoneScreen} />
        <Stack.Screen name='Amazonia' component={PagetwoScreen} />
        <Stack.Screen name='Caatinga' component={PagethreeScreen} />
        <Stack.Screen name='Cerrado' component={PagefourScreen} />
        <Stack.Screen name='MataAtlantica' component={PagefiveScreen} />
        <Stack.Screen name='Pampa' component={PagesixScreen} />
        <Stack.Screen name='Pantanal' component={PagesevenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginHorizontal:10, 
    backgroundColor:'#1E9F67', 
    height:'200%', 
    alignItems:'center', 
    width: '37%', 
    borderRadius:15,
  },
  botaoA: {
    marginHorizontal:20, 
    backgroundColor:'#1E9F67', 
    height:'20%', 
    alignItems:'center', 
    width: '70%', 
    borderRadius:15,
    marginVertical: 10,
  },
});
