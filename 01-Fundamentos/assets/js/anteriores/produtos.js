let produtos = [
    {nome: 'Google Chromecast Video 2', prezo: 39.00, unidades:15},
    {nome: 'Google Chromecast TV ed.', prezo: 59.00, unidades: 25},
    {nome: 'Xiaomi Mi TV', prezo: 49.00, unidades:10},
];
produtos.forEach(item => {
    console.log('nome: '    , item.nome);
    console.log('prezo: '   , parseFloat(item.prezo).toFixed(2), ' €');
    console.log('unidades: ', item.unidades, 'unidades');
}); 