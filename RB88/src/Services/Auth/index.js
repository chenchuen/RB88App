import { Encrypt } from '../Cryptographer';

export function LoginPlayer() {
  console.log('in login');
  const text = 'The text to be encrypted';
  const securityKey = 'abcdefghijklmnopabcdefgh';
  Encrypt(text, securityKey);
}

export function RegisterPlayer() {

}

export default {
  LoginPlayer,
  RegisterPlayer
};
