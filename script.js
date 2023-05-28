function calcularDistancia(lat1, lon1, lat2, lon2) {
    const raioTerra = 6371; // Raio médio da Terra em quilômetros
  
    // Converter as coordenadas de graus decimais para radianos
    const toRadians = (graus) => graus * (Math.PI / 180);
    const pi1 = toRadians(lat1);
    const pi2 = toRadians(lat2);
    const deltaLatitude = toRadians(lat2 - lat1);
    const deltaLongitude = toRadians(lon2 - lon1);
  
    // Calcular a fórmula de Haversine
    const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
              Math.cos(pi1) * Math.cos(pi2) *
              Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = raioTerra * c;
  
    return distancia;
  }
  class Node {
    constructor(latitude,longitude,nome,vizinhos){
        this.nome = nome
        this.latitude = parseFloat(latitude)
        this.longitude = parseFloat(longitude)
        this.vizinhos = vizinhos
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
    new Node(-22.847123476277876, -47.062831262616626, "domPedro", ["DesatadoraDosNós","Lagoa"]),
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
  
  /*const value = calcularDistancia(domPedro.latitude, domPedro.longitude, Viracopos.latitude, Viracopos.longitude)
  //toFixed(NcasasDecimais)
  console.log(`A distância entre os dois pontos é de aproximadamente ${value.toFixed(2)} km.`)

  const distancia = document.getElementById("distancia")
  distancia.innerText=value.toFixed(2)*/
  console.log(nodes)