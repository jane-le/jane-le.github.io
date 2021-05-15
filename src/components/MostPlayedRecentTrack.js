  
import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image} from 'react-bootstrap';

const spotifyApiLink = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1&offset=0'
const oAuthToken = 'BQDCp2kAbRDOcUCs9PZygaEhkrhs3BnfD2bjbDKrNbz715FKrqQQjIF_nQlhCKALcEuWIozLmvEAocvjgBS2YZmIOSVqvaaf9zGlp_Y4LIgQTJ11p27HP28MsussVd7Bb28_IB7a3abS1_zypWxtHmcVD7OBhL7oGFW74Xez7HacLDSOAng';


function MostPlayedRecentTrack(props) {
    const styles = {
      title: {
        margin: 0,
        fontFamily: 'Karla',
        fontSize: '18px',
        lineHeight: '28px',
      },
      name: {
        margin: 0,
        fontFamily: 'Karla',
        fontSize: '22px',
        lineHeight: '28px',
        fontWeight: 'bold',
        color: props.props.colorAccent,
      },
      main: {
        padding: 0,
        margin: 0,
      },
      colCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }

    }
    const [track, setTrack] = useState(null);
    useEffect(() => {
      axios({
        method: 'GET',
        url: spotifyApiLink,
        headers: {
          'Authorization': `Bearer ${oAuthToken}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          const trackInfo = res.data.items[0];
          const newTrack = {
            name: trackInfo.name,
            artwork: trackInfo.album.images[0].url,
            artist: trackInfo.artists[0].name,
            spotifyLink: trackInfo.external_urls.spotify,
          }
          setTrack(newTrack);
        });
    }, []);
  
    if (!track) {
      return null;
    }
    return (
      <Container style={styles.main}>
        <h2 style={styles.title}>Fun fact! My most played track on Spotify this past month was:</h2>
        <Row >
          <Col style={{padding: '2rem 2rem 0 2rem'}} md={3}><Image src={track.artwork} fluid/></Col>
          <Col style={styles.colCenter} md={9}><a href={track.spotifyLink}><h2 style={styles.name}>{track.name}</h2></a><h3 style={styles.title}>{track.artist}</h3></Col>
        </Row>
      </Container>
    );
  }
  
  export default  MostPlayedRecentTrack;