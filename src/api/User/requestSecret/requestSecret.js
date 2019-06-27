import { prisma } from '../../../../generated/prisma-client';
import { generateSecret, sendSecretMail } from '../../../utils';

export default {
  Mutation: {
    requestSecret: async(_, args, { request }) => {
      console.log('asdasd',request.user)
      const { email } = args;
      const loginSecret = generateSecret();
      console.log(loginSecret);
      try {
        throw Error();
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      } 
    }
  }
}


//{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNqeGEzMWhpenBuZTQwYjQyamVkbng0d2QiLCJpYXQiOjE1NjE2MjE5MzF9.qJnInMA74QB-I4TFjG7BWHZvhxt5wZkTGJGctQXT0Vo"} GraphQL test HTTP