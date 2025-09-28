// const { PerformancePage } = require('./PerformancePage');
// const { LandingPage } = require('./LandingPage');

// class POManager {
//     constructor(page) {
//         this.page = page;           
//         this.performance = new PerformancePage (this.page);
//         this.landing = new LandingPage (this.page);
//     }

//     getLandingPage() { 
//         return this.landing; 
//     }  

//      getPerformancePage(){
//         return this.performance;
//      }
// }
// module.exports = { POManager };


const { PerformancePage } = require('./PerformancePage');
const { LandingPage } = require('./LandingPage');

class POManager {
  constructor(page) {
    this.page = page;
    this.performance = new PerformancePage(this.page);
    this.landing = new LandingPage(this.page);
  }

  getLandingPage() {
    return this.landing;
  }

  getPerformancePage() {
    return this.performance;
  }
}

module.exports = { POManager };
