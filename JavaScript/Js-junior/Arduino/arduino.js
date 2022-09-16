if ("serial" in navigator) {
    console.log("Arduino nano!");
} else {
    console.log("Solo funciona en Chrome 89 y Edge")
}

controlNano.onclick = async () => {    

    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        
        const decoder = new TextDecoderStream();
        
        port.readable.pipeTo(decoder.writable);
    
        const inputStream = decoder.readable;
        const reader = inputStream.getReader();
        
        while (true) {
          const { value, done } = await reader.read();
          if (value) {
            console.log(value);
          }
          if (done) {
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
          }
        }
      
      } catch (error) {
        console.log(error);
      }
};





