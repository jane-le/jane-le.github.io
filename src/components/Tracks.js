import {apiService} from '../ApiService';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      youtube_urls: [],
      artists: [],
      titles: [],
      spotifyToken: this.props.spotifyToken,
    };
  }

  async componentDidMount() {
    if (this.props.isAuthenticated) {
      const {userId, spotifyToken} = this.props;
      const tracks = await apiService.getTracks(userId, spotifyToken);
      this.setState({tracks});
    } else {
      this.setState({tracks: []});
    }
  }

  render() {
    return null;
  }
}
