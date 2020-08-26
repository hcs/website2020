// import "node_modules/video-react/dist/video-react.css";
import React from 'react';
import { Player } from 'video-react';
import Layout from '../components/layout.js';


export default class BipVideo extends React.Component {
    constructor(props) {
      super(props);

    }

    render () {
      return(
        <Layout disabled>
          <div>
          <Player
            playsInline
            poster="/bipphoto.jpg"
            src="https://www.youtube.com/watch?v=EIzazUv2gtI"
          />
          </div>
        </Layout>
      );
    }
}
