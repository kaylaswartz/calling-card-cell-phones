class CallingCard {
    constructor (centsPerMinute) {
        this.centsPerMinute = centsPerMinute
        // this.totalAmount = 0;
        this.totalMinutes = 0;
      }
  
    addDollars(dollar) {
     const amount = (dollar * 100);
     const minute = Math.trunc((amount / this.centsPerMinute));
     return this.totalMinutes += minute;
  
    }
  
    getRemainingMinutes () {
    //  this.totalMinutes = (this.totalAmount / this.centsPerMinute);
     return this.totalMinutes;
    }
  
    useMinutes(amount) {
     if ((this.totalMinutes - amount) > 0) {
        this.totalMinutes -= amount;
      } else {
        this.totalMinutes = 0;
      }
  
      return this.totalMinutes;
    
    }
  
  
  }
 export default CallingCard;