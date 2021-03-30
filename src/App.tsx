import { QueryClient, QueryClientProvider } from 'react-query';
import './App.less';
import Calculator from './components/calculator';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Calculator />
      </QueryClientProvider>
    </div>
  );
}

export default App;
