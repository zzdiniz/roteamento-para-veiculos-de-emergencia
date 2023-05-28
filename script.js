
  //classe que representa os nós/estados
  class Node {
    constructor(latitude,longitude,nome,vizinhos){
        this.nome = nome
        this.latitude = parseFloat(latitude)
        this.longitude = parseFloat(longitude)
        this.vizinhos = vizinhos  //"vizinhos" representa os nós adjacentes a serem expandidos pelo algoritmo
    }
  }
  
  const nodes = [
    new Node(-22.90166424853652, -47.06378749867026, "Mercado",),
    new Node(-22.89004444073007, -47.07690741082173, "Torre"),
    new Node(-22.892445612111132, -47.02726149939866, "Iguatemi"),
    new Node(-22.908407161463618, -47.04935860494216, "jequitibas"),
    new Node(-22.91047378230876, -47.04396703377803, "Estádio"),
    new Node(-22.908451444150185, -47.09492543377811, "Unimart"),
    new Node(-22.8750469229797, -47.052191604943516, "Lagoa"),
    new Node(-22.9007089482163, -47.0574960951544, "Prefeitura"),
    new Node(-22.905642674213063, -47.07252000494228, "Terminal"),
    new Node(-22.891315799764275, -47.09006437871278, "Pedreira"),
    new Node(-22.881522172128353, -47.08568858959913, "Círculo"),
    new Node(-22.85819780851976, -47.04468177610827, "CPFL"),
    new Node(-22.847123476277876, -47.062831262616626, "domPedro"),
    new Node(-22.832758349629568, -47.052103137485176, "PUCI"),
    new Node(-22.898436795524063, -47.020136004942586, "Sociedade"),
    new Node(-22.901556499840755, -47.060304364466326, "Basílica"),
    new Node(-22.9255684262481, -47.037325533777405, "UNIP"),
    new Node(-22.9317187179292, -47.07680680494114, "CampinasS"),
    new Node(-22.908399178832088, -47.06672730494213, "Estação"),
    new Node(-22.902479219766665, -47.05929957425427, "Jockey"),
    new Node(-22.9057323571764, -47.060347033778235, "Catedral"),
    new Node(-22.92507350678412, -47.12746753377737, "Bandeiras"),
    new Node(-22.943574697927673, -47.110587004940726, "Havan"),
    new Node(-22.901945452584144, -47.06908087425434, "Transurc"),
    new Node(-22.975259390432743, -47.099800949119356, "SESI"),
    new Node(-22.95430843510785, -47.05421776261214, "ParqueÁguas"),
    new Node(-22.86325840325693, -47.02331313377999, "Galleria"),
    new Node(-22.903913871316494, -47.05963743377831, "LargoRosário"),
    new Node(-22.88479942364156, -47.00685010494317, "Decathlon"),
    new Node(-22.912477032632733, -47.050558233777885, "MoisésLucarelli"),
    new Node(-22.853432973446402, -47.07377683378034, "DesatadoraDosNós"),
    new Node(-22.861158085802767, -47.14806327610807, "HotelPremium"),
    new Node(-22.92920881371939, -47.018178533777174, "PHermantino"),
    new Node(-22.8970478598143, -47.118952433778595, "ParqueBosch"),
    new Node(-22.90408595453789, -47.11025040494221, "LeroyMerlin"),
    new Node(-22.92871141288515, -47.02592243377721, "PraçaBarãodeCampinas"),
    new Node(-22.903935671352983, -47.07496160494221, "Sesc"),
    new Node(-22.9589579479347, -47.07742950679197, "CentroOlímpico"),
    new Node(-23.00796797068489, -47.137568504938, "Viracopos"),
    new Node(-22.88737624361771, -47.079834533779035, "ClubeBonfim")
  ];

  const objetivo = new Node(-22.930333163037247, -47.057006824740775,"hospital",null) //nó objetivo ->hospital Sta Edwiges


  //declarando os visinhos de cada nó
  nodes[0].vizinhos = [nodes[15]]//Mercadão
  nodes[1].vizinhos = [nodes[23],nodes[39]]//Torre do Castelo
  nodes[2].vizinhos = [nodes[26],nodes[14]]//Iguatemi
  nodes[3].vizinhos = [nodes[4],nodes[7]]//Bosque dos Jequitibás
  nodes[4].vizinhos = [nodes[3],nodes[16]]//Estádio Brinco de Ouro da Princesa
  nodes[5].vizinhos = [nodes[34],nodes[21],nodes[17]]//Unimart
  nodes[6].vizinhos = [nodes[12],nodes[11],nodes[7]]//Taquaral
  nodes[7].vizinhos = [nodes[6],nodes[15],nodes[19],nodes[3]]//Prefeitura
  nodes[8].vizinhos = [nodes[18],nodes[36]]//Rodoviária
  nodes[9].vizinhos = [nodes[10],nodes[33]]//Pedreira Chapadão
  nodes[10].vizinhos = [nodes[30],nodes[39],nodes[9]]//Círculo Militar
  nodes[11].vizinhos = [nodes[13],nodes[6],nodes[26]]//CPFL
  nodes[12].vizinhos = [nodes[13],nodes[30],nodes[6]]//Shopping D Pedro
  nodes[13].vizinhos = [nodes[11],nodes[12]]//PUC I
  nodes[14].vizinhos = [nodes[2]]//Hípica
  nodes[15].vizinhos = [nodes[0],nodes[7]]//Basílica
  nodes[16].vizinhos = [nodes[4],nodes[35],objetivo]//Unip
  nodes[17].vizinhos = [nodes[5],nodes[37],nodes[25],objetivo]//Campinas Shopping
  nodes[18].vizinhos = [nodes[8]]//Estação Cultura
  nodes[19].vizinhos = [nodes[7],nodes[27]]//Jockey Club
  nodes[20].vizinhos = [nodes[27],nodes[29]]//Catedral Metropolitana
  nodes[21].vizinhos = [nodes[5],nodes[22]]//Shopping Bandeiras
  nodes[22].vizinhos = [nodes[21]]//Havan
  nodes[23].vizinhos = [nodes[1],nodes[36]]//Catedral Transurc
  nodes[24].vizinhos = [nodes[38],nodes[37]]//SESI
  nodes[25].vizinhos = [nodes[17]]//Parque das águas
  nodes[26].vizinhos = [nodes[11],nodes[28],nodes[2]]//Galleria Shopping
  nodes[27].vizinhos = [nodes[19],nodes[20]]//Largo do Rosário
  nodes[28].vizinhos = [nodes[26]]//Decathlon
  nodes[29].vizinhos = [nodes[20],objetivo]//Estádio Moisés Lucarelli
  nodes[30].vizinhos = [nodes[12],nodes[31],nodes[10]]//Desatadora dos nós
  nodes[31].vizinhos = [nodes[30]]//Hotel Premium
  nodes[32].vizinhos = [nodes[35]]//Parque Hermantino
  nodes[33].vizinhos = [nodes[34],nodes[9]]//Clube Bosch
  nodes[34].vizinhos = [nodes[33],nodes[5]]//Leroy Merlin
  nodes[35].vizinhos = [nodes[16],nodes[32]]//Barão de Campinas
  nodes[36].vizinhos = [nodes[8],nodes[23]]//Sesc
  nodes[37].vizinhos = [nodes[24],nodes[17]]//Centro Olimpico
  nodes[38].vizinhos = [nodes[24]]//Viracopos
  nodes[39].vizinhos = [nodes[1],nodes[10]]//Clube Bonfim


  function calcularDistancia(latitude, longitude) {//função heurística "h(n)", usada para compor a função de avaliação
    const raioTerra = 6371; // Raio médio da Terra em quilômetros
    const latitude2 = objetivo.latitude;
    const longitude2 = objetivo.longitude;
    // Converter as coordenadas de graus decimais para radianos
    const toRadians = (graus) => graus * (Math.PI / 180);
    const pi1 = toRadians(latitude);
    const pi2 = toRadians(latitude2);
    const deltaLatitude = toRadians(latitude2 - latitude);
    const deltaLongitude = toRadians(longitude2 - longitude);
  
    // Calcular a fórmula de Haversine
    const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
              Math.cos(pi1) * Math.cos(pi2) *
              Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = raioTerra * c;
  
    return distancia;
  }

  console.log(nodes)