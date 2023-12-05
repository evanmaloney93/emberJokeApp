import Controller from '@ember/controller';
import { action } from '@ember/object';
import axios from 'axios';

export default class JokeController extends Controller {
  showPunchline = false;
  isLoading = false;
  showShowAnswerButton=true;

  @action
  togglePunchline() {
    this.toggleProperty('showPunchline');
    this.toggleProperty('showShowAnswerButton');
  }

  @action
  async fetchNewJoke() {
    this.set('isLoading', true);
    this.set('showPunchline', false);
    this.set('showShowAnswerButton', false);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke'); // Replace with actual API URL
      this.set('model', response.data);
    } catch (error) {
      console.error('Error fetching new joke:', error);
      // Handle error appropriately
    } finally {
      this.set('isLoading', false);
      this.set('showShowAnswerButton', true);
      
    }
  }
}
