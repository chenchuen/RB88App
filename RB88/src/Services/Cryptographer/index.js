import CryptoJS from 'crypto-js';
import { TextEncoder, TextDecoder } from 'text-encoding';

export function Encrypt(param, desKey) {
  console.log('in encrypt');
  const message = 'asdasdasd';
  const key = '2sbttui3';
  const utf8 = CryptoJS.enc.Utf8.parse(message);
  const des = CryptoJS.enc.Utf8.parse(key);
// console.log(utf8.toString());
// console.log(des.toString());
//   const encrypted = CryptoJS.DES.encrypt(message, key, {
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7
//     });
//
//   // const ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
//   // const encrypted = CryptoJS.DES.encrypt(asd, key, { iv: ivHex, mode: CryptoJS.mode.CBC });
//
//   console.log(encrypted.toString(CryptoJS.enc.Utf8));
//   console.log(encrypted.toString());
//   console.log(encrypted.ciphertext.toString());

  // const key2 = CryptoJS.enc.Utf8.parse(key);
	// const iv = CryptoJS.enc.Utf8.parse(key);
	// const ciphertext = CryptoJS.DES.encrypt(asd, key2, {
  //       mode: CryptoJS.mode.CBC,
  //       iv
  //     });

	// console.log(ciphertext.toString());
}

export default {
  Encrypt,
};
