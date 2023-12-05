import Route from '@ember/routing/route';
import axios from 'axios';

export default class JokeRoute extends Route {
  queryParams = {
    refresh: {
      refreshModel: true
    }
  };

  async model() {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke'); // Replace with actual API URL
    return response.data;
  }
}
