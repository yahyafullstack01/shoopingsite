{/*export function getSessionId() {
  let id = localStorage.getItem('sessionId');
   // let id = sessionStorage.getItem('sessionId');
    if (!id) {
      id = '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('sessionId', id);
    }
    return id;
  }*/}
  export function getSessionId() {
    let id = localStorage.getItem('sessionId');
  
    if (!id) {
      id = '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('sessionId', id);  // гарантуємо збереження
    }
  
    return id;
  }
  