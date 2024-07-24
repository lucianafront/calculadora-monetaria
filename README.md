### Claculadora-monetaria

1.Foi criado o Context para obter os dados da API. O Context foi definido no arquivo CurrencyContext.js:
2.O CurrencyProvider é utilizado no App.js para envolver os componentes Calculator e HistoryList:

### Context para Obter os Dados do LocalStorage
1.O context também foi configurado para obter os dados do LocalStorage:
Arquivo CurrencyContext.js
-> const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')) || []);

2.A função addHistory atualiza o estado e o LocalStorage:
->const addHistory = (calculation) => {
  const updatedHistory = [...history, calculation];
  setHistory(updatedHistory);
  localStorage.setItem('history', JSON.stringify(updatedHistory));
};

### API no Context para tratar os Dados
1.A API foi chamada usando axios dentro do useEffect no CurrencyContext. Os dados da API são armazenados no estado rates:

Arquivo CurrencyContext.js:

### Tratamento de erros e carreganentos
1.o tratamento de erros e o estado de carregamento são gerenciados na chamada da API. O estado de carregamento é definido e atualizado para refletir o status da operação de carregamento:

Arquivo CurrencyContext.js:

->const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchRates = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      setRates(response.data.rates);
    } catch (error) {
      console.error('Erro ao buscar taxas de câmbio', error);
    } finally {
      setLoading(false);
    }
  };
  fetchRates();
}, []);

No componente Calculator, o estado de carregamento é verificado e exibido:

Arquivo Calculator.js:



