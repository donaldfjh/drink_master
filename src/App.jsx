
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {About,CockTail,Error,HomeLayout,Landing,NewsLetter, SinglePageError} from './pages/index'
import {loader as landingLoader} from './pages/Landing'
import {loader as singleCocktailLoader} from './pages/CockTail'
// loader function : Each route can define a "loader" function to provide data to the route element before it renders.
// it used to load the data before render the page 
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { action as newsLetterAction } from './pages/NewsLetter'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        loader: landingLoader(queryClient),
        errorElement:<SinglePageError/>
      },
      {
        path:'cocktail/:id',
        errorElement:<SinglePageError/>,
        loader:singleCocktailLoader(queryClient),
        element:<CockTail/>
      },
      {
        path:'newsletter',
        element:<NewsLetter/>,
        action:newsLetterAction
      },
      {
        path:'about',
        element:<About/>
      }
      
    ]
  },
  
  
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    
  );
};
export default App;
