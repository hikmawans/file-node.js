// TODO 1
const { EventEmitter } = require ('events')

const birthdayEventListener = (name) => { // pada name bisa di lakukan destructure
    console.log(`Happy birthday ${name}!`);// contoh ({name}) atau bisa seperti 
  }                                        // pada code (name)   
   
  // TODO 2
  const myEmitter = new EventEmitter()
   
  // TODO 3
  myEmitter.on('birthday', birthdayEventListener);
    
  // TODO 4
  myEmitter.emit('birthday', 'zidan') // jik ingin menggunakan didestructure 
                                      // panggil lagi name nya
                                      //jika tidak lgsg tulis saja isi nya 