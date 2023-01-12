import React from 'react'
import { Jumbotron} from "react-bootstrap";
import Layout from '../../components/Layout';

const Home = () => {
    return (
        <div>
            <Layout/>
              <Jumbotron className='text-center'>
                <h1>Welcome to Admin Dashboard</h1>
              </Jumbotron>
            {/* </Layout> */}
        </div>
    )
}

export default Home;