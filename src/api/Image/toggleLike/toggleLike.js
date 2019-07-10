import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    toggleLike: async (_, args, { request }) => {
      if (request.user) {
        isAuthenticated(request);
        const { postId } = args;
        const { user } = request;
        return true;
      }
    }
  }
}