export function getSessionId() {
    let id = sessionStorage.getItem('sessionId');
    if (!id) {
      id = '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('sessionId', id);
    }
    return id;
  }