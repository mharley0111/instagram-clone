// export class Cookies {
//   private createToken(user: User): TokenData {
//     const expiresIn = 60 * 60;
//     const secret = process.env.JWT_SECRET;
//     return {
//       expiresIn,
//       token: jwt.sign({ id: user.id, email: user.email }, secret, {
//         expiresIn,
//       }),
//     };
//   }

//   private createCookie(tokenData: TokenData) {
//     return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
//   }
// }
