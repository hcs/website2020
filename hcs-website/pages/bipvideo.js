// import "node_modules/video-react/dist/video-react.css";
import React from 'react';
import { Player } from 'video-react';


export default class BipVideo extends React.Component {
    constructor(props) {
      super(props);

    }

    render () {
      return(
        <Layout>
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
