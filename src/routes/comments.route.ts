import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import CommentsController from '@controllers/comments.controller';

class CommentsRoute implements Routes {
  public path = '/comments';

  public router = Router();

  public commentsController = new CommentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.commentsController.getComments);
    this.router.get(
      `${this.path}/:id(\\d+)`,
      this.commentsController.getCommentById,
    );
    this.router.post(`${this.path}`, this.commentsController.createComment);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      this.commentsController.updateComment,
    );
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      this.commentsController.deleteComment,
    );
  }
}

export default CommentsRoute;
