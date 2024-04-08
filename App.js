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
      <Text>Biomas</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("About")}>
        <Text>Sobre</Text>
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
