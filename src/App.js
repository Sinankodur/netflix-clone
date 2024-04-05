import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { action, nowPlaying, series } from './urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title='New Releases' url={nowPlaying}/>
      <RowPost title='TV Series' isSmall url={series}/>
      <RowPost title='Top Rated' isSmall url={action}/>
    </div>
  );
}

export default App;
