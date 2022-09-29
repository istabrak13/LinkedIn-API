import { LinkedinComment, PrismaClient } from '@prisma/client';
import { CreateCommentsDto } from '@dtos/comments.dto';
import createError from 'http-errors';

class CommentsService {
  comments = new PrismaClient().linkedinComment;

  posts = new PrismaClient().linkedinPost;

  user = new PrismaClient().linkedinUser;

  private async verifyCommentRelations(commentData: CreateCommentsDto) {
    const post = this.posts.findUnique({
      where: { URL: commentData.postURL },
    });

    if (!post) throw new createError.NotFound("Post doesn't exist");

    const user = this.user.findUnique({
      where: { URL: commentData.userProfileURL },
    });

    if (!user) throw new createError.NotFound("User doesn't exist");
  }

  public async findAllComments(): Promise<LinkedinComment[]> {
    return this.comments.findMany();
  }

  public async findCommentById(commentId: number): Promise<LinkedinComment> {
    return this.comments.findUnique({
      where: { id: commentId },
    });
  }

  public async createComment(
    commentData: CreateCommentsDto,
  ): Promise<LinkedinComment> {
    await this.verifyCommentRelations(commentData);

    return this.comments.create({
      data: {
        post: {
          connect: {
            URL: commentData.postURL,
          },
        },
        user: {
          connect: {
            URL: commentData.userProfileURL,
          },
        },
        content: commentData.content,
      },
    });
  }

  public async updateComment(
    commentId: number,
    commentData: CreateCommentsDto,
  ): Promise<LinkedinComment> {
    const findComment: LinkedinComment = await this.comments.findUnique({
      where: { id: commentId },
    });

    await this.verifyCommentRelations(commentData);

    if (!findComment) throw new createError.NotFound("Comment doesn't exist");

    return this.comments.update({
      where: { id: commentId },
      data: {
        post: {
          connect: {
            URL: commentData.postURL,
          },
        },
        user: {
          connect: {
            URL: commentData.userProfileURL,
          },
        },
      },
    });
  }

  public async deleteComment(commentId: number): Promise<LinkedinComment> {
    const findComment: LinkedinComment = await this.comments.findUnique({
      where: { id: commentId },
    });

    if (!findComment) throw new createError.NotFound("Comment doesn't exist");

    return this.comments.delete({
      where: { id: commentId },
    });
  }
}

export default CommentsService;
