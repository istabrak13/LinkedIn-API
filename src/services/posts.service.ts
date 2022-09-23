import { LinkedInPost, PrismaClient } from '@prisma/client';
import { isEmpty } from '@utils/util';
import createError from 'http-errors';
import { CreatePostsDto } from '@dtos/posts.dto';

class PostsService {
  public posts = new PrismaClient().linkedInPost;

  public async findAllPosts(): Promise<LinkedInPost[]> {
    return this.posts.findMany();
  }

  public async findPostById(postId: number): Promise<LinkedInPost> {
    if (isEmpty(postId)) throw new createError.BadRequest('PostId is empty');

    const findPost: LinkedInPost = await this.posts.findUnique({
      where: { id: postId },
    });

    if (!findPost) throw new createError.NotFound("Post doesn't exist");

    return findPost;
  }

  public async createPost(postData: CreatePostsDto): Promise<LinkedInPost> {
    if (isEmpty(postData))
      throw new createError.BadRequest('postData is empty');

    const findPost = await this.posts.findUnique({
      where: { URL: postData.URL },
    });

    if (findPost) throw new createError.BadRequest('Post already exists');

    return this.posts.create({
      data: { ...postData },
    });
  }

  public async updatePost(
    postId: number,
    postData: CreatePostsDto,
  ): Promise<LinkedInPost> {
    if (isEmpty(postData))
      throw new createError.BadRequest('postData is empty');

    const findPost: LinkedInPost = await this.posts.findUnique({
      where: { id: postId },
    });

    if (!findPost) throw new createError.NotFound("Post doesn't exist");

    return this.posts.update({
      where: { id: postId },
      data: { ...postData },
    });
  }

  public async deletePost(postId: number): Promise<LinkedInPost> {
    if (isEmpty(postId)) throw new createError.BadRequest('PostId is empty');

    const findPost: LinkedInPost = await this.posts.findUnique({
      where: { id: postId },
    });
    if (!findPost) throw new createError.NotFound("Post doesn't exist");

    return this.posts.delete({
      where: { id: postId },
    });
  }
}

export default PostsService;
