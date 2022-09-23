import PostsService from '@services/posts.service';
import { NextFunction, Request, Response } from 'express';
import { CreatePostsDto } from '@dtos/posts.dto';

class PostsController {
  postsService = new PostsService();

  public getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPostsData = await this.postsService.findAllPosts();

      res.status(200).json({ data: findAllPostsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPostById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const postId = Number(req.params.id);
      const findPostData = await this.postsService.findPostById(postId);

      res.status(200).json({ data: findPostData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const postData: CreatePostsDto = req.body;
      const createPostData = await this.postsService.createPost(postData);

      res.status(201).json({ data: createPostData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePost = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const postId = Number(req.params.id);
      const postData: CreatePostsDto = req.body;
      const updatePostData = await this.postsService.updatePost(
        postId,
        postData,
      );

      res.status(200).json({ data: updatePostData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePost = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const postId = Number(req.params.id);
      const deletePostData = await this.postsService.deletePost(postId);

      res.status(200).json({ data: deletePostData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PostsController;
