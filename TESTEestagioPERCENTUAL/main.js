
    let faturamentoSP = 67836.43
    let faturamentoRJ = 36678.66
    let faturamentoMG = 29229.88
    let faturamentoES = 27165.48
    let faturamentoOutros = 19849.53


    let faturamentototal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros

    
    let porcentagemSP = (faturamentoSP / faturamentototal) * 100
    let porcentagemRJ = (faturamentoRJ / faturamentototal) * 100
    let porcentagemMG = (faturamentoMG / faturamentototal) * 100
    let porcentagemES = (faturamentoES / faturamentototal) * 100
    let porcentagemOutros = (faturamentoOutros / faturamentototal) * 100


    console.log("Resultado das porcentagem dos estados:")
    console.log("São Paulo: " + porcentagemSP.toFixed(2) + "%")
    console.log("Rio de Janeiro: " + porcentagemRJ.toFixed(2) + "%")
    console.log("Minas Gerais: " + porcentagemMG.toFixed(2) + "%")
    console.log("Espírito Santos: " + porcentagemES.toFixed(2) + "%")
    console.log("Outros estados: " + porcentagemOutros.toFixed(2) + "%")






















