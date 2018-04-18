const {setWorldConstructor} =require ('cucumber');
const url = 'https://www.google.co.uk/';

class GoogleWorld {
  navigateTo() {
    throw new Error('edson was here')
  }
}

setWorldConstructor(GoogleWorld);
