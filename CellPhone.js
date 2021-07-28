class CellPhone {
     constructor (card) {
         this.card = card
         this.talking = false;
         this.history = {};
         this.currentPhoneNumber = "";
     }


     isTalking() {
        return this.talking;
     }

     call(phoneNumber) {
        this.currentPhoneNumber = phoneNumber;
        this.history[phoneNumber] = 0;
        return this.talking = true;
     }

     tick() {
        this.history[this.currentPhoneNumber] += 1
        this.card.useMinutes(1);
     }

     endCall() {
        return this.talking = false;
     }

     getHistory() {
        const phoneHistory = [];
        for (const number in this.history) {
            let plural = 's';
            if (this.history[number] === 1) {
                plural = '';
            }
            phoneHistory.push(`${number} (${this.history[number]} minute${plural})`);
            
        }
        return phoneHistory.join(', ');
     }

 }














 export default CellPhone;