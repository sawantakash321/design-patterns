/* 
  Interviewer interface

  askQuestions()
*/

class Developer {
  askQestions() {
    console.log('Asking about design patterns');
  }
}

class CommunityExecutive {
  askQestions() {
    console.log('Asking about community building');
  }
}

class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterview();
    interviewer.askQestions();
  }
}

class DevelopmentManager extends HiringManager {
  makeInterview() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterview() {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();
