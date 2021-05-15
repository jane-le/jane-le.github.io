  
import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image} from 'react-bootstrap';

const apiLink = 'https://ws.audioscrobbler.com/2.0';
const apiKey = '800de91cb1adb48853ce5fcd629b7b4a';

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
        url: apiLink,
        params: {
          method: 'user.gettoptracks',
          user: 'Janelamle',
          limit: '1',
          api_key: apiKey,
          period: '7day',
          format: 'json'
        },
      })
        .then((res) => {
          const trackInfo = res.data.toptracks.track[0];
          var topTrack = {
            name: trackInfo.name,
            artwork: trackInfo.image[0]['#text'],
            artist: trackInfo.artist.name,
            playCount: trackInfo.playcount,
          }
          axios({
            method: 'GET',
            url: apiLink,
            params: {
              method: 'track.getInfo',
              track: topTrack.name,
              artist: topTrack.artist,
              api_key: apiKey,
              format: 'json',
            },
          })
            .then((res) => {
              topTrack.artwork = res.data.track.album.image[2]['#text'];
              setTrack(topTrack); 
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => {
          console.log(err);
        }) 
    }, []);
  
    if (!track) {
      return null;
    }
    return (
      <Container style={styles.main}>
        <h2 style={styles.title}>Fun fact! My most played track on Spotify this past week was:</h2>
        <Row >
          <Col style={{padding: '2rem 2rem 0 2rem'}} md={3}><Image src={track.artwork} fluid/></Col>
          <Col style={styles.colCenter} md={9}><h2 style={styles.name}>{track.name}</h2><h3 style={styles.title}>{track.artist}</h3><h3 style={styles.title}>Play Count: {track.playCount}</h3></Col>
        </Row>
      </Container>
    );
  }
  
  export default  MostPlayedRecentTrack;