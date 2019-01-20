import React from 'react';

let Map, Layer, Feature;

export default class DynamicMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    if (this.props.render) {
      import(/* webpackChunkName: "mapbox" */ 'react-mapbox-gl').then((reactMapboxGl) => {
        Layer = reactMapboxGl.Layer;
        Feature = reactMapboxGl.Feature;
        Map = reactMapboxGl.Map({
          accessToken: 'pk.eyJ1IjoicXVhbnR1bWhpdmUiLCJhIjoiY2pyNHhqZHUzMHB5aDQ0dGdvcHd5ZGQ2bCJ9.lycQCurT6OdNEqK8ldXerw'
        });
        this.setState({ loaded: true});
      });
    }
  }

  render() {
    if(!this.state.loaded)  return null;

    return (
      <Map
        style='mapbox://styles/mapbox/streets-v9'
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}>
        <Layer
          type='symbol'
          id='marker'
          layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    )
  }
};
