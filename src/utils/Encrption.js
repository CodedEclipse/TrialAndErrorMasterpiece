const secretKey = 'b3a3f72ad8a00b91edb28bfcf81f88ac9c46609bbab60d347139db62c5c2673b';


const EncryptData = (data) => {
  // If data is an object (JSON), convert it to a string first
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }
  let encrypted = '';
  // XOR encryption with secretKey
  for (let i = 0; i < data.length; i++) {
    encrypted += String.fromCharCode(data.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length));
  }
  // Base64 encode the encrypted string and return
  return {encrypted:btoa(encrypted)};
};
const encryptResponseData = (req, res, next) => {
  const originalSend = res.send;
  res.send = function (data) {
    const encryptedData = EncryptData(data);
    res.set('Content-Type', 'application/json');
    originalSend.call(res, JSON.stringify({ encrypted: encryptedData }));
  };
  next();
};
  
export default EncryptData;