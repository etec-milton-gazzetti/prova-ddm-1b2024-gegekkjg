import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fundo from './assets/BIOMAS.png';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={fundo} style={{ width: '100%', height: '100%', backgroundColor: '#F4F2E8' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', top: '83%', }}>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("PageOne")}>
            <Text style={{ color: "#F4F2E8", fontSize: 14 }}>Conheça os biomas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("About")}>
            <Text style={{ color: "#F4F2E8",fontSize: 14 }}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function PageoneScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Amazonia")} style={styles.botaoA}>
          <Text style={styles.text}>Amazônia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Caatinga")} style={styles.botaoA}>
          <Text style={styles.text}>Caatinga</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cerrado")} style={styles.botaoA}>
          <Text style={styles.text}>Cerrado</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MataAtlantica")} style={styles.botaoA}>
          <Text style={styles.text}>Mata Atlântica</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Pampa")} style={styles.botaoA}>
          <Text style={styles.text}>Pampa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Pantanal")} style={styles.botaoA}>
          <Text style={styles.text}>Pantanal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoA}>
          <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
      );
}

function PagetwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoB}>
          <Text style={styles.text2}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
}

function PagethreeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Caatinga</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagefourScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cerrado</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagefiveScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mata Atlântica</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagesixScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pampa</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function PagesevenScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantanal</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de sobre</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <Stack.Screen name="About" component={AboutScreen} />
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
  botao: {
    marginHorizontal: 10,
    backgroundColor: '#1E9F67',
    alignItems: 'center',
    width: '40%',
    height: '90%',
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  botaoA: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  text:{
    fontSize: 20,
  },
  text2:{
    fontSize: 17,
  },
  botaoB:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '40%',
  },
});
