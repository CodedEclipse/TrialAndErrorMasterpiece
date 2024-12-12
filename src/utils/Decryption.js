

const secretKey = 'b3a3f72ad8a00b91edb28bfcf81f88ac9c46609bbab60d347139db62c5c2673b';


const DecryptData = (encryptedData) => {
    encryptedData = atob(encryptedData);
    let decryptedData = '';
    for (let i = 0; i < encryptedData.length; i++) {
      decryptedData += String.fromCharCode(encryptedData.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length));
    }
    return JSON.parse(decryptedData);
  };
  
  const decryptRequestData = (req, res, next) => {
    if (req.body && req.body.encrypted) {
      try {
        req.body = DecryptData(req.body.encrypted);
        next();
      } catch (err) {
        res.status(400).send({ error: 'Invalid encrypted data' });
      }
    } else {
      if(req.body || req.body=={}){
        next();
      }else{
        res.status(400).send({ status: false, code: 400, message: 'Bad Request!.', result: null });
      }
    }
  };

export default DecryptData;
