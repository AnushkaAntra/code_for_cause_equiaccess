import Content from './Content';
import Navbar from "./Navbar";

const Home = () => {
    return ( 
        <div className='Home'>
            <div className='content'>
                <Navbar />
                <Content />
            </div>
        </div>
     );
}
 
export default Home;