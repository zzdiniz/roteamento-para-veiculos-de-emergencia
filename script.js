
  //classe que representa os nós/estados
  class Node {
    constructor(latitude,longitude,nome,vizinhos,custo){
        this.nome = nome
        this.latitude = parseFloat(latitude)
        this.longitude = parseFloat(longitude)
        this.vizinhos = vizinhos  //"vizinhos" representa os nós adjacentes a serem expandidos pelo algoritmo
        this.custo = {}   // armazena os custos para os nós vizinhos
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


  //declarando os vizinhos de cada nó e seus respectivos custos
  nodes[0].vizinhos = [nodes[15]]//Mercadão
    nodes[0].custo[nodes[15].nome] = 0.7 //Mercadão -> Basílica

  nodes[1].vizinhos = [nodes[23],nodes[39]]//Torre do Castelo
    nodes[1].custo[nodes[23].nome] = 1.9 //Torre -> Transurc
    nodes[1].custo[nodes[39].nome] = 0.5 //Torre -> Clube Bonfim

  nodes[2].vizinhos = [nodes[26],nodes[14]]//Iguatemi
    nodes[2].custo[nodes[26].nome] = 5.9 //Iguatemi -> Galleria
    nodes[2].custo[nodes[14].nome] = 2.9 //Iguatemi -> Hipica

  nodes[3].vizinhos = [nodes[4],nodes[7]]//Bosque dos Jequitibás
    nodes[3].custo[nodes[4].nome] = 1.4 //Bosque -> Estádio Brinco de Ouro
    nodes[3].custo[nodes[7].nome] = 2.2 //Bosque -> Prefeitura
  
  nodes[4].vizinhos = [nodes[3],nodes[16]]//Estádio Brinco de Ouro da Princesa
    nodes[4].custo[nodes[3].nome] = 1.4 //Estádio Brinco de Ouro -> Bosque
    nodes[4].custo[nodes[16].nome] = 3.0 //Estádio Brinco de Ouro -> UNIP
  
  nodes[5].vizinhos = [nodes[34],nodes[21],nodes[17]]//Unimart
    nodes[5].custo[nodes[34].nome] = 3.0 //Unimart -> Leroy
    nodes[5].custo[nodes[21].nome] = 4.4 //Unimart -> Bandeiras
    nodes[5].custo[nodes[17].nome] = 5.6 //Unimart -> Campinas Shopping
  
  nodes[6].vizinhos = [nodes[12],nodes[11],nodes[7]]//Taquaral
    nodes[6].custo[nodes[12].nome] = 5.0 //Taquaral -> Dom Pedro
    nodes[6].custo[nodes[11].nome] = 2.1 //Taquaral -> CPFL
    nodes[6].custo[nodes[7].nome] = 4.1 //Taquaral -> Prefeitura
  
  nodes[7].vizinhos = [nodes[6],nodes[15],nodes[19],nodes[3]]//Prefeitura
    nodes[7].custo[nodes[6].nome] = 4.1 //Prefeitura -> Taquaral
    nodes[7].custo[nodes[15].nome] = 1.3 //Prefeitura -> Basílica
    nodes[7].custo[nodes[19].nome] = 1.2 //Prefeitura -> Jockey Club
    nodes[7].custo[nodes[3].nome] = 2.2 //Prefeitura -> Bosque

  nodes[8].vizinhos = [nodes[18],nodes[36]]//Rodoviária
    nodes[8].custo[nodes[18].nome] = 2.7 //Rodoviária -> Estação Cultura
    nodes[8].custo[nodes[36].nome] = 1.4 //Rodoviária -> Sesc
  
  nodes[9].vizinhos = [nodes[10],nodes[33]]//Pedreira Chapadão
    nodes[9].custo[nodes[10].nome] = 2.0 //Pedreira -> Circulo Militar
    nodes[9].custo[nodes[33].nome] = 3.5 //Pedreira -> Clube Bosch
  
  nodes[10].vizinhos = [nodes[30],nodes[39],nodes[9]]//Círculo Militar
    nodes[10].custo[nodes[30].nome] = 6.5 //Circulo Militar -> Santuário
    nodes[10].custo[nodes[39].nome] = 1.1 //Circulo Militar -> Clube Bonfim
    nodes[10].custo[nodes[9].nome] = 2.0 //Circulo Militar -> Pedreira

  nodes[11].vizinhos = [nodes[13],nodes[6],nodes[26]]//CPFL
    nodes[11].custo[nodes[13].nome] = 4.2 //CPFL -> PUC I
    nodes[11].custo[nodes[6].nome] = 2.1 //CPFL -> Taquaral
    nodes[11].custo[nodes[26].nome] = 5.5 //CPFL -> Galleria

  nodes[12].vizinhos = [nodes[13],nodes[30],nodes[6]]//Shopping D Pedro
    nodes[12].custo[nodes[13].nome] = 4.2 //D Pedro -> PUC I
    nodes[12].custo[nodes[30].nome] = 2.3 //D Pedro -> Santuário
    nodes[12].custo[nodes[6].nome] = 5.0 //D Pedro -> Taquaral
  
  nodes[13].vizinhos = [nodes[11],nodes[12]]//PUC I
    nodes[13].custo[nodes[11].nome] = 4.2 //PUC I -> CPFL
    nodes[13].custo[nodes[12].nome] = 4.2 //PUC I -> D Pedro
  
  nodes[14].vizinhos = [nodes[2]]//Hípica
    nodes[14].custo[nodes[2].nome] = 2.9 //Hipica -> Iguatemi

  nodes[15].vizinhos = [nodes[0],nodes[7]]//Basílica
    nodes[15].custo[nodes[0].nome] = 0.7 //Basílica -> Mercado
    nodes[15].custo[nodes[7].nome] = 1.3 //Basílica -> Prefeitura

  nodes[16].vizinhos = [nodes[4],nodes[35],objetivo]//Unip
    nodes[16].custo[nodes[4].nome] = 3.0 //Unip -> Estádio Brinco de Ouro
    nodes[16].custo[nodes[35].nome] = 2.7 //Unip -> Praça Barão
    nodes[16].custo[objetivo.nome] = 4.0 //Unip -> Hospital
  
  nodes[17].vizinhos = [nodes[5],nodes[37],nodes[25],objetivo]//Campinas Shopping
    nodes[17].custo[nodes[5].nome] = 5.6 //Campinas Shopping -> Unimart
    nodes[17].custo[nodes[37].nome] = 7.3 //Campinas Shopping -> Centro Olímpico
    nodes[17].custo[nodes[25].nome] = 7.4 //Campinas Shopping -> Parque das Águas
    nodes[17].custo[objetivo.nome] = 5.3 //Campinas Shopping -> Hospital

  nodes[18].vizinhos = [nodes[8]]//Estação Cultura
    nodes[18].custo[nodes[8].nome] = 2.7 //Estação Cultura -> Terminal

  nodes[19].vizinhos = [nodes[7],nodes[27]]//Jockey Club
    nodes[19].custo[nodes[7].nome] = 1.2 //Jockey Club -> Prefeitura
    nodes[19].custo[nodes[27].nome] = 0.3 //Jockey Club -> Largo do Rosário
  
  nodes[20].vizinhos = [nodes[27],nodes[29]]//Catedral Metropolitana
    nodes[20].custo[nodes[27].nome] = 0.4 //Catedral -> Largo do Rosário
    nodes[20].custo[nodes[29].nome] = 1.7 //Catedral -> Estádio Moisés Lucarelli

  nodes[21].vizinhos = [nodes[5],nodes[22]]//Shopping Bandeiras
    nodes[21].custo[nodes[5].nome] = 4.4 //Bandeiras -> Unimart
    nodes[21].custo[nodes[22].nome] = 4.6 //Bandeiras -> Havan
  
  nodes[22].vizinhos = [nodes[21]]//Havan
    nodes[22].custo[nodes[21].nome] = 4.6 //Havan -> Bandeiras

  nodes[23].vizinhos = [nodes[1],nodes[36]]//Transurc
    nodes[23].custo[nodes[1].nome] = 1.9 //Transurc -> Torre
    nodes[23].custo[nodes[36].nome] = 1.5 //Transurc -> Sesc
  
  nodes[24].vizinhos = [nodes[38],nodes[37]]//SESI
    nodes[24].custo[nodes[38].nome] = 9.1 //SESI -> Aeroporto
    nodes[24].custo[nodes[37].nome] = 5.2 //SESI -> Centro Olímpico

  nodes[25].vizinhos = [nodes[17]]//Parque das águas
    nodes[25].custo[nodes[17].nome] = 7.4 //Parque das Águas -> Campinas Shopping

  nodes[26].vizinhos = [nodes[11],nodes[28],nodes[2]]//Galleria Shopping
    nodes[26].custo[nodes[11].nome] = 5.5 //Galleria -> CPFL
    nodes[26].custo[nodes[28].nome] = 4.5 //Galleria -> Decathlon
    nodes[26].custo[nodes[2].nome] = 5.9 //Galleria -> Iguatemi
    
  nodes[27].vizinhos = [nodes[19],nodes[20]]//Largo do Rosário
    nodes[27].custo[nodes[19].nome] = 0.3 //Largo do Rosário -> Jockey Club
    nodes[27].custo[nodes[20].nome] = 0.4 //Largo do Rosário -> Catedral

  nodes[28].vizinhos = [nodes[26]]//Decathlon
    nodes[28].custo[nodes[26].nome] = 4.5 //Decathlon -> Galleria

  nodes[29].vizinhos = [nodes[20],objetivo]//Estádio Moisés Lucarelli
    nodes[29].custo[nodes[20].nome] = 1.7 //Estádio Moisés Lucarelli -> Catedral
    nodes[29].custo[objetivo.nome] = 3.6 //Estádio Moisés Lucarelli -> Hospital

  nodes[30].vizinhos = [nodes[12],nodes[31],nodes[10]]//Santuário Desatadora dos nós
    nodes[30].custo[nodes[12].nome] = 2.3 //Santuário -> D Pedro
    nodes[30].custo[nodes[31].nome] = 9.4 //Santuário -> Hotel Premium
    nodes[30].custo[nodes[10].nome] = 6.5 //Santuário -> Círculo Militar

  nodes[31].vizinhos = [nodes[30]]//Hotel Premium
    nodes[31].custo[nodes[30].nome] = 9.4 //Hotel -> Santuário

  nodes[32].vizinhos = [nodes[35]]//Parque Hermantino
    nodes[32].custo[nodes[35].nome] = 1.0 //Parque Hermantino -> Praça Barão 

  nodes[33].vizinhos = [nodes[34],nodes[9]]//Clube Bosch
    nodes[33].custo[nodes[34].nome] = 2.1 //Bosch -> Leroy Merlin
    nodes[33].custo[nodes[9].nome] = 3.5 //Bosch -> Pedreira

  nodes[34].vizinhos = [nodes[33],nodes[5]]//Leroy Merlin
    nodes[34].custo[nodes[33].nome] = 2.1 //Leroy -> Clube Bosch
    nodes[34].custo[nodes[5].nome] = 3.0 //Leroy -> Unimart

  nodes[35].vizinhos = [nodes[16],nodes[32]]//Barão de Campinas
    nodes[35].custo[nodes[16].nome] = 2.7 //Barão -> Unip
    nodes[35].custo[nodes[32].nome] = 1.0 //Barão -> Parque Hermantino

  nodes[36].vizinhos = [nodes[8],nodes[23]]//Sesc
    nodes[36].custo[nodes[8].nome] = 1.4 //Sesc -> Terminal
    nodes[36].custo[nodes[23].nome] = 1.5 //Sesc -> Transurc

  nodes[37].vizinhos = [nodes[24],nodes[17]]//Centro Olimpico
    nodes[37].custo[nodes[24].nome] = 5.2 //Centro Olímpico -> SESI
    nodes[37].custo[nodes[17].nome] = 7.3 //Centro Olímpico -> Campinas Shopping

  nodes[38].vizinhos = [nodes[24]]//Viracopos
    nodes[38].custo[nodes[24].nome] = 9.1 //Viracopos -> SESI 

  nodes[39].vizinhos = [nodes[1],nodes[10]]//Clube Bonfim
    nodes[39].custo[nodes[1].nome] = 0.5 //Bonfim -> Torre
    nodes[39].custo[nodes[10].nome] = 1.1 //Bonfim -> Círculo Militar


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