import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@middlewares/auth.middleware';
import { CreatePostsDto } from '@dtos/posts.dto';
import PostsController from '@controllers/posts.controller';

class UsersRoute implements Routes {
  public path = '/posts';

  public router = Router();

  public postsController = new PostsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddleware,
      this.postsController.getPosts,
    );
    this.router.get(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      this.postsController.getPostById,
    );
    this.router.post(
      `${this.path}`,
      authMiddleware,
      validationMiddleware(CreatePostsDto, 'body'),
      this.postsController.createPost,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      validationMiddleware(CreatePostsDto, 'body'),
      this.postsController.updatePost,
    );
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      this.postsController.deletePost,
    );
  }
}

export default UsersRoute;
