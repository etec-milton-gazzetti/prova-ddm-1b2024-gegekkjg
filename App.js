import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Biomas</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("PageOne")}>
        <Text>Conheça os Biomas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("About")}>
        <Text>Sobre</Text>
      </TouchableOpacity>

    </View>
  );
}

function PageoneScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={()=>navigation.navigate("Amazonia")}>
      <Text>Amazônia</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Caatinga")}>
      <Text>Caatinga</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Cerrado")}>
      <Text>Cerrado</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("MataAtlantica")}>
      <Text>Mata Atlântica</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Pampa")}>
      <Text>Pampa</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Pantanal")}>
      <Text>Pantanal</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
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
});
