import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fundo from './assets/BIOMAS.png';
import amazonia from './assets/amazonia.png'
import caatinga from './assets/caatinga.jpg'
import cerrado from './assets/cerrado.jpg'
import mata from './assets/mataat.png'
import pampa from './assets/pampa.png'
import pantanal from './assets/pantanal.png'
import eu from './assets/eu.jpeg'



function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={fundo} style={{ width: '100%', height: '100%', backgroundColor: '#F4F2E8' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', top: '83%', }}>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("PageOne")}>
            <Text style={{ color: "#F4F2E8", fontSize: 14 }}>Conheça os biomas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("About")}>
            <Text style={{ color: "#F4F2E8", fontSize: 14 }}>Sobre</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate("Caatinga")} style={styles.botaoC}>
            <Text style={styles.text}>Caatinga</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cerrado")} style={styles.botaoD}>
            <Text style={styles.text}>Cerrado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MataAtlantica")} style={styles.botaoE}>
            <Text style={styles.text}>Mata Atlântica</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pampa")} style={styles.botaoF}>
            <Text style={styles.text}>Pampa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pantanal")} style={styles.botaoG}>
            <Text style={styles.text}>Pantanal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoH}>
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
        <View style={{ backgroundColor: '#F4F2E8' }}>
          <Text style={styles.titulo}>Amazônia</Text>
          <Text style={styles.text4}>A Amazônia, localizada principalmente na região norte do Brasil e estendendo-se por nove países da América do Sul, é o maior bioma do Brasil e um dos mais ricos em biodiversidade do mundo.</Text>
          <View style={{alignItems: 'center'}}>
          <Image source={amazonia} style={styles.foto}></Image>
          </View>
          <Text style={styles.text3}>Características Principais</Text>
          <Text style={styles.text4}>Estima-se que a Amazônia abrigue cerca de 10% de
            todas as espécies conhecidas, incluindo uma vasta gama de plantas, animais, aves, peixes e insetos.
            A Amazônia é caracterizada por sua densa floresta tropical, composta por
            árvores altas, vegetação exuberante e um clima quente e úmido durante todo o ano, com chuvas abundantes.
            A região desempenha um papel crucial na regulação do clima global,
            absorvendo dióxido de carbono da atmosfera e liberando oxigênio. Além disso, a Amazônia atua como um importante reservatório de água, influenciando os padrões climáticos e a precipitação em toda a América do Sul.</Text>
          <Text style={styles.text3}>Ameaças e Pressões</Text>
          <Text style={styles.text4}>O desmatamento é uma das maiores ameaças à Amazônia, causado principalmente pela expansão agrícola, exploração madeireira e mineração ilegal. Essas atividades resultam na perda de habitat, degradação do solo e redução da biodiversidade.
            A mineração ilegal e a expansão agrícola representam graves ameaças à Amazônia, levando à contaminação do solo e dos recursos hídricos, além de contribuir para o desmatamento e a destruição do habitat natural.</Text>
          <Text style={styles.text3}>Importância Cultural e Social</Text>
          <Text style={styles.text4}>A Amazônia é lar de centenas de comunidades indígenas, que dependem dos recursos naturais da região para sua subsistência e preservação cultural. Essas comunidades desempenham um papel fundamental na conservação do bioma, mantendo práticas tradicionais de manejo sustentável da terra.
            As comunidades indígenas da Amazônia possuem um vasto conhecimento tradicional sobre a biodiversidade da região, que é fundamental para a conservação e o manejo sustentável dos recursos naturais.</Text>
          <Text style={styles.text4}>Preservar a Amazônia é crucial não apenas para proteger sua biodiversidade única, mas também para garantir o bem-estar das comunidades que dependem dela e para manter o equilíbrio ecológico do planeta. Esforços de conservação, políticas de uso sustentável da terra e o respeito pelos direitos das comunidades indígenas são essenciais para garantir o futuro deste importante bioma.</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
              <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function PagethreeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#F4F2E8' }}>
          <Text style={styles.titulo2}>Caatinga</Text>
          <Text style={styles.text4}>A Caatinga é um bioma exclusivamente brasileiro, encontrado principalmente na região nordeste do país, abrangendo cerca de 11% do território nacional. É um dos biomas mais singulares e menos conhecidos do Brasil.</Text>
          <View style={{alignItems: 'center'}}>
          <Image source={caatinga} style={styles.foto}></Image>
          </View>
          <Text style={styles.text3}>Características Principais</Text>
          <Text style={styles.text4}>A Caatinga é caracterizada por uma vegetação adaptada à aridez do clima, composta por árvores espinhosas, arbustos, cactos e plantas suculentas. Durante a estação seca, muitas plantas perdem suas folhas para conservar água.
           A região da Caatinga possui um clima semiárido, com chuvas escassas e irregulares concentradas em poucos meses do ano. As temperaturas são elevadas durante o dia e podem cair drasticamente à noite.
            Apesar das condições adversas, a Caatinga abriga uma grande diversidade de espécies adaptadas ao ambiente árido, incluindo plantas endêmicas, répteis, aves, mamíferos e insetos.</Text>
          <Text style={styles.text3}>Ameaças e Pressões</Text>
          <Text style={styles.text4}>O desmatamento para agricultura, pecuária e expansão urbana é uma das principais ameaças à Caatinga, resultando na perda de habitat, erosão do solo e desertificação.
            A exploração desordenada dos recursos naturais, como lenha e recursos hídricos, contribui para a degradação do bioma e compromete sua capacidade de regeneração.
            As mudanças climáticas estão exacerbando os efeitos da seca na Caatinga, aumentando a frequência e a intensidade das secas, o que pode levar a uma redução ainda maior da biodiversidade e dos recursos hídricos.</Text>
          <Text style={styles.text3}>Importância Cultural e Social</Text>
          <Text style={styles.text4}>A Caatinga abriga uma biodiversidade única e é lar de muitas espécies endêmicas, contribuindo para a riqueza biológica do Brasil.
            Para as comunidades locais, a Caatinga é uma importante fonte de subsistência, fornecendo alimentos, água e medicamentos. Muitas comunidades dependem dos recursos naturais do bioma para sua sobrevivência.
            A Caatinga é parte integrante da cultura e da identidade das comunidades que habitam a região, influenciando suas tradições, práticas agrícolas e formas de vida.</Text>
          <Text style={styles.text4}>A preservação da Caatinga é fundamental para garantir a conservação da biodiversidade única do bioma, bem como para o sustento e o bem-estar das comunidades que dependem dele. Esforços de conservação, manejo sustentável dos recursos naturais e políticas de adaptação às mudanças climáticas são essenciais para garantir o futuro deste importante ecossistema semiárido.</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
              <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function PagefourScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#F4F2E8' }}>
          <Text style={styles.titulo3}>Cerrado</Text>
          <Text style={styles.text4}>O Cerrado é o segundo maior bioma do Brasil, abrangendo uma área de aproximadamente 2 milhões de quilômetros quadrados, principalmente no Planalto Central do país. É considerado uma das savanas mais ricas em biodiversidade do mundo.</Text>
          <View style={{alignItems: 'center'}}>
          <Image source={cerrado} style={styles.foto}></Image>
          </View>
          <Text style={styles.text3}>Características Principais</Text>
          <Text style={styles.text4}>O Cerrado é caracterizado por uma vegetação diversificada, incluindo árvores baixas, arbustos, gramíneas e uma grande variedade de plantas adaptadas ao fogo e à seca. Muitas espécies de plantas do Cerrado possuem raízes profundas para acessar água subterrânea durante a estação seca.
            O clima do Cerrado é tropical sazonal, com uma estação chuvosa no verão e uma estação seca no inverno. As temperaturas podem variar significativamente ao longo do ano, com verões quentes e invernos frios.
            Apesar de ser um dos biomas mais ameaçados do Brasil, o Cerrado abriga uma biodiversidade extraordinária, com uma grande variedade de espécies de plantas, animais, aves, répteis e insetos, muitos dos quais são endêmicos da região.</Text>
          <Text style={styles.text3}>Ameaças e Pressões</Text>
          <Text style={styles.text4}>O desmatamento para agricultura, pecuária, mineração e urbanização é a maior ameaça ao Cerrado, resultando na perda de habitat, fragmentação do ecossistema e declínio da biodiversidade.
            O fogo é uma parte natural do ciclo de vida do Cerrado, mas o uso descontrolado do fogo para limpeza de terras agrícolas e pastagens tem contribuído para a degradação do bioma, aumentando o risco de incêndios florestais e comprometendo a regeneração natural da vegetação.
            O avanço da agricultura e da pecuária, especialmente a produção de soja, milho e gado, tem causado uma pressão significativa sobre o Cerrado, resultando na conversão de grandes áreas de vegetação nativa em áreas agrícolas e pastagens.</Text>
          <Text style={styles.text3}>Importância Cultural e Social</Text>
          <Text style={styles.text4}>O Cerrado abriga uma biodiversidade única e é considerado um dos hotspots de biodiversidade mais importantes do mundo, com muitas espécies endêmicas e ameaçadas de extinção.
            O bioma fornece uma série de serviços ecossistêmicos vitais, incluindo a regulação do clima, a proteção do solo e dos recursos hídricos, e a polinização de culturas agrícolas.
            O Cerrado é parte integrante da cultura e da economia do Brasil, fornecendo recursos naturais, sustento e meios de subsistência para milhões de pessoas que vivem na região.</Text>
          <Text style={styles.text4}>A preservação do Cerrado é essencial para garantir a conservação da biodiversidade única do bioma, bem como para proteger os serviços ecossistêmicos que ele fornece e promover o desenvolvimento sustentável da região. Esforços de conservação, manejo sustentável dos recursos naturais e políticas de uso da terra são fundamentais para garantir o futuro deste importante ecossistema brasileiro.</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
              <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function PagefiveScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#F4F2E8' }}>
          <Text style={styles.titulo4}>Mata Atlântica</Text>
          <Text style={styles.text4}>A Mata Atlântica é um dos biomas mais ameaçados do Brasil e um dos mais ricos em biodiversidade do mundo. Originalmente estendendo-se ao longo da costa leste do Brasil, desde o Rio Grande do Norte até o Rio Grande do Sul, hoje restam apenas fragmentos desse bioma devido à intensa exploração humana.</Text>
          <View style={{alignItems: 'center'}}>
          <Image source={mata} style={styles.foto}></Image>
          </View>
          <Text style={styles.text3}>Características Principais</Text>
          <Text style={styles.text4}>A Mata Atlântica é conhecida por sua incrível diversidade biológica, abrigando uma grande variedade de espécies de plantas, animais, aves, répteis e anfíbios. Muitas dessas espécies são endêmicas, ou seja, encontradas apenas nesse bioma.
            A vegetação da Mata Atlântica varia de florestas tropicais úmidas a florestas estacionais semideciduais, passando por manguezais, restingas e campos de altitude. Essa diversidade de habitats contribui para a alta biodiversidade da região.
            A Mata Atlântica desempenha um papel fundamental na regulação do ciclo da água, fornecendo água para inúmeras bacias hidrográficas e abrigando uma grande quantidade de nascentes e rios.</Text>
          <Text style={styles.text3}>Ameaças e Pressões</Text>
          <Text style={styles.text4}>O desmatamento histórico para agricultura, urbanização, exploração madeireira e mineração reduziu drasticamente a extensão original da Mata Atlântica, fragmentando-a em pequenos remanescentes isolados, o que compromete a sobrevivência de muitas espécies.
            A expansão urbana desordenada ao longo do litoral brasileiro tem resultado na degradação e perda de habitats naturais da Mata Atlântica, além de aumentar a poluição do ar, do solo e da água.
            A exploração madeireira ilegal e a caça indiscriminada de animais silvestres são ameaças adicionais à Mata Atlântica, contribuindo para o declínio das populações de muitas espécies.</Text>
          <Text style={styles.text3}>Importância Cultural e Social</Text>
          <Text style={styles.text4}>A Mata Atlântica abriga uma biodiversidade única, com muitas espécies endêmicas e ameaçadas de extinção, contribuindo para a riqueza biológica do Brasil e do mundo.
            O bioma fornece uma série de serviços ecossistêmicos vitais, incluindo a regulação do clima, a proteção do solo e dos recursos hídricos, e a polinização de culturas agrícolas.
            A Mata Atlântica é parte integrante da cultura e da economia do Brasil, fornecendo recursos naturais, oportunidades de turismo e recreação, e meios de subsistência para muitas comunidades locais.</Text>
          <Text style={styles.text4}>A preservação da Mata Atlântica é essencial para garantir a sobrevivência das espécies que dependem dela, proteger os serviços ecossistêmicos que ela fornece e promover o desenvolvimento sustentável das comunidades que vivem em sua área de abrangência. Esforços de conservação, restauração de habitats e políticas de uso da terra são fundamentais para garantir o futuro deste importante bioma brasileiro.</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
              <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function PagesixScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#F4F2E8' }}>
          <Text style={styles.titulo5}>Pampa</Text>
          <Text style={styles.text4}>O Pampa é um dos biomas mais distintos e menos conhecidos do Brasil, localizado principalmente na região sul do país, abrangendo partes dos estados do Rio Grande do Sul, Santa Catarina, Paraná e Argentina, Uruguai e Paraguai. É caracterizado por vastas planícies herbáceas, intercaladas com matas ciliares e áreas de savana.</Text>
          <View style={{alignItems: 'center'}}>
          <Image source={pampa} style={styles.foto}></Image>
          </View>
          <Text style={styles.text3}>Características Principais</Text>
          <Text style={styles.text4}>O Pampa é caracterizado por vastas extensões de campos naturais, onde predominam gramíneas e herbáceas. Esses campos são frequentemente intercalados com matas ciliares ao longo de rios e riachos.
            O clima do Pampa é temperado, com verões quentes e invernos frios. As precipitações são bem distribuídas ao longo do ano, embora existam variações sazonais significativas.
            Apesar de sua aparência aparentemente homogênea, o Pampa abriga uma grande diversidade de espécies de plantas, animais, aves e insetos adaptados às condições específicas desse bioma.</Text>
          <Text style={styles.text3}>Ameaças e Pressões</Text>
          <Text style={styles.text4}>A principal ameaça ao Pampa é a conversão de áreas naturais em campos cultivados para agricultura intensiva, especialmente para o cultivo de soja, milho e trigo. Isso resulta na perda de habitats naturais e na fragmentação do bioma.
            A pecuária intensiva, com a criação extensiva de gado, também exerce pressão sobre o Pampa, levando à degradação do solo, compactação do terreno e perda de biodiversidade.
            O crescimento urbano e a expansão de infraestruturas, como estradas e ferrovias, fragmentam ainda mais o habitat natural do Pampa, isolando populações de espécies e dificultando sua movimentação.</Text>
          <Text style={styles.text3}>Importância Cultural e Social</Text>
          <Text style={styles.text4}>O Pampa abriga uma biodiversidade única e fornece uma série de serviços ecossistêmicos vitais, incluindo a regulação do clima, a proteção do solo e a manutenção dos recursos hídricos.
            O bioma é parte integrante da cultura e da economia da região sul do Brasil, fornecendo recursos naturais, oportunidades de turismo e recreação, e meios de subsistência para muitas comunidades rurais.</Text>
          <Text style={styles.text4}>A preservação do Pampa é essencial para garantir a conservação da biodiversidade única do bioma, proteger os serviços ecossistêmicos que ele fornece e promover o desenvolvimento sustentável das comunidades que dependem dele. Esforços de conservação, manejo sustentável dos recursos naturais e políticas de uso da terra são fundamentais para garantir o futuro deste importante ecossistema sul-americano.</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
              <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function PagesevenScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#F4F2E8' }}>
          <Text style={styles.titulo6}>Pantanal</Text>
          <Text style={styles.text4}>O Pantanal é o maior bioma úmido do mundo e um dos ecossistemas mais importantes e diversos da América do Sul. Localizado principalmente no Brasil, abrange partes dos estados de Mato Grosso e Mato Grosso do Sul, além de áreas menores na Bolívia e Paraguai.</Text>
          <View style={{alignItems: 'center'}}>
          <Image source={pantanal} style={styles.foto}></Image>
          </View>
          <Text style={styles.text3}>Características Principais</Text>
          <Text style={styles.text4}>O Pantanal é caracterizado por suas extensas planícies alagadas, lagoas, rios e áreas de vegetação de cerrado e floresta estacional semidecidual. Durante a estação chuvosa, grande parte da planície é inundada, criando um mosaico de habitats aquáticos e terrestres.
            O Pantanal abriga uma rica diversidade de vida selvagem, incluindo uma variedade impressionante de aves, mamíferos, répteis, peixes e plantas. Muitas espécies são endêmicas ou migratórias, dependendo do bioma para reprodução, alimentação e abrigo.
            O clima do Pantanal é tropical úmido, com uma estação seca no inverno e uma estação chuvosa no verão. As chuvas sazonais inundam a planície, criando uma das maiores áreas úmidas contínuas do mundo.</Text>
          <Text style={styles.text3}>Ameaças e Pressões</Text>
          <Text style={styles.text4}>Desmatamento e Conversão para Agricultura: O desmatamento e a conversão de terras para agricultura e pastagens são ameaças significativas ao Pantanal, resultando na perda de habitats naturais, erosão do solo e poluição dos cursos d'água.
            A construção de barragens, represas e canais de drenagem altera o regime hidrológico do Pantanal, afetando as cheias sazonais e a disponibilidade de água para a vida selvagem e as comunidades locais.
            A poluição da água por atividades agrícolas, pecuárias e urbanas representa uma ameaça à qualidade da água do Pantanal, afetando a saúde dos ecossistemas aquáticos e a sobrevivência das espécies dependentes desses habitats.</Text>
          <Text style={styles.text3}>Importância Cultural e Social</Text>
          <Text style={styles.text4}>O Pantanal abriga uma biodiversidade única, com muitas espécies endêmicas e ameaçadas de extinção. O bioma é reconhecido como Patrimônio Natural Mundial e Reserva da Biosfera pela UNESCO.
            O Pantanal fornece uma série de serviços ecossistêmicos vitais, incluindo a regulação do ciclo da água, a manutenção da biodiversidade, a pesca e o turismo.
            O bioma é parte integrante da cultura e da economia da região, fornecendo recursos naturais, oportunidades de turismo e recreação, e meios de subsistência para muitas comunidades ribeirinhas e indígenas.</Text>
          <Text style={styles.text4}>A preservação do Pantanal é essencial para garantir a conservação da biodiversidade única do bioma, proteger os serviços ecossistêmicos que ele fornece e promover o desenvolvimento sustentável das comunidades que dependem dele. Esforços de conservação, manejo sustentável dos recursos naturais e políticas de uso da terra são fundamentais para garantir o futuro deste importante ecossistema sul-americano.</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
              <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#F4F2E8' }}>
      <Image source={eu} style={styles.foto}></Image>
      <Text style={{fontSize: 20, fontStyle: 'italic', textDecorationStyle: 'double', textDecorationLine: 'underline'}}>Geovana Rocha Carvalho de Farias</Text>
      <Text style={{fontSize: 20, fontStyle: 'italic', textDecorationStyle: 'double', textDecorationLine: 'underline'}}>07708</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaom}>
        <Text style={{ fontSize: 15, color: "#F4F2E8" }}>Voltar</Text>
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
    backgroundColor: '#6C9E58',
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
    backgroundColor: '#F4F2E8'
  },
  botaoA: {
    alignItems: 'center',
    backgroundColor: '#0B764B',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  botaoH: {
    alignItems: 'center',
    backgroundColor: '#6C9E58',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  botaoC: {
    alignItems: 'center',
    backgroundColor: '#CD4217',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  botaoD: {
    alignItems: 'center',
    backgroundColor: '#C2BE2A',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  botaoE: {
    alignItems: 'center',
    backgroundColor: '#249EA8',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  botaoF: {
    alignItems: 'center',
    backgroundColor: '#653889',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },
  botaoG: {
    alignItems: 'center',
    backgroundColor: '#723D28',
    padding: 25,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '70%',
  },

  text: {
    fontSize: 30,
    color: '#F4F2E8',
  },
  text2: {
    fontSize: 17,
  },
  botaoB: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    width: '30%',
    height: '25%',
  },
  text3: {
    fontSize: 17,
    textAlign: 'left',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'justify',
    textDecorationLine: 'underline'
  },
  text4: {
    marginHorizontal: 36,
    marginVertical: 2,
    fontSize: 15,
    justifyContent: 'space-between',
    textAlign: 'justify'
  },
  botaom: {
    backgroundColor: '#6C9E58',
    alignItems: 'center',
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    height: 40,
    width: 70,
  },
  titulo: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    color: '#0B764B',
    textShadowRadius: 2,
    textShadowColor: 'yellow',
  },
  titulo2: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    color: '#CD4217',
    textShadowRadius: 2,
    textShadowColor: 'black',
  },
  titulo3: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    color: '#EBE767',
    textShadowRadius: 4,
    textShadowColor: 'black',
  },
  titulo4: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    color: '#249EA8',
    textShadowRadius: 2,
    textShadowColor: 'green',
  },
  titulo5: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    color: '#653889',
    textShadowRadius: 1,
    textShadowColor: 'black',
  },  
  titulo6: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
    color: '#723D28',
    textShadowRadius: 2,
  },

  foto:{
    width: 250,
    height: 250,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5
  }
});
