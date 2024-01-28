import Toast from 'react-native-toast-message';
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import {

  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
        <Toast />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
