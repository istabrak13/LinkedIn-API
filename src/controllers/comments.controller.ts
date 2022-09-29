import CommentsService from '@services/comments.service';
import { NextFunction, Request, Response } from 'express';
import { CreateCommentsDto } from '@dtos/comments.dto';

class CommentsController {
  private commentsService = new CommentsService();

  public getComments = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const findAllCommentsData = await this.commentsService.findAllComments();

      res.status(200).json({ data: findAllCommentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCommentById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const commentId = Number(req.params.id);
      const findCommentData = await this.commentsService.findCommentById(
        commentId,
      );

      res.status(200).json({ data: findCommentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createComment = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const commentData: CreateCommentsDto = req.body;
      const createCommentData = await this.commentsService.createComment(
        commentData,
      );

      res.status(201).json({ data: createCommentData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateComment = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const commentId = Number(req.params.id);
      const commentData: CreateCommentsDto = req.body;
      const updateCommentData = await this.commentsService.updateComment(
        commentId,
        commentData,
      );

      res.status(200).json({ data: updateCommentData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteComment = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const commentId = Number(req.params.id);
      const deleteCommentData = await this.commentsService.deleteComment(
        commentId,
      );

      res.status(200).json({ data: deleteCommentData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CommentsController;
