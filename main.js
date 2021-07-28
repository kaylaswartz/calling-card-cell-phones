import CallingCard from "./CallingCard.js"
import CellPhone from "./CellPhone.js"

// let card = new CallingCard(20); // this card costs 20 cents / minute to use

// card.addDollars(1);           // add $1 (100 cents).  100 cents / 20 cents/minute = 5 minutes added
// // console.log(card);
// card.getRemainingMinutes();   // returns 5  (5 minutes left)
// // console.log(card);
// card.useMinutes(3);
// // console.log(card);
// card.getRemainingMinutes();   // return 2
// // console.log(card);
// card.useMinutes(1);
// // console.log(card);
// card.getRemainingMinutes();   // returns 1
// console.log(card);


// let card1 = new CallingCard(11);
// card1.addDollars(3);         // 300 cents / 11 = 27.2727272... = 27 minutes added
// card1.getRemainingMinutes(); // => returns 27
// console.log(card1)

// let card2 = new CallingCard(17);
// card2.addDollars(3);         // 300 cents / 17 = 17.647... = 17 minutes added
// card2.getRemainingMinutes(); // => returns 17
// console.log(card2);
// let card = new CallingCard(10);
// card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added
// console.log(card)
// let phone = new CellPhone(card);
// phone.isTalking();  // => returns false
// console.log(phone.isTalking());

// phone.call("555-1212");
// phone.isTalking();  // => returns true
// console.log(phone.isTalking());

// phone.tick();       // simulate a minute going by
// console.log(card.getRemainingMinutes());
// phone.tick();       // simulate another minute going by
// console.log(card.getRemainingMinutes());

// phone.endCall();
// phone.isTalking();  // => returns false (because the call is over)
// console.log(phone.isTalking());
// phone.getHistory(); // => returns "555-1212 (2 minutes)"
// console.log(phone.getHistory());

// card.getRemainingMinutes() // => return 8, because the call lasted 2 minutes;
// console.log(card.getRemainingMinutes());


let card = new CallingCard(10);
card.addDollars(1); // add 100 cents @ 10 cents/minute = 10 minutes added

let phone = new CellPhone(card);
phone.call("555-1111");
phone.tick();       // simulate a minute going by
phone.endCall();

phone.call("555-2222");
phone.tick();       // simulate a minute going by
phone.tick();       // simulate a minute going by
phone.endCall();

// phone.getHistory(); // => returns "555-1111 (1 minute), 555-2222 (2 minutes)"
// console.log(phone.history);
console.log(phone.getHistory());

// card.getRemainingMinutes() // => return 7, because the phone used 3 minutes