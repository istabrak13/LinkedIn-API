import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@middlewares/auth.middleware';
import LinkedinUserController from '@controllers/linkedinUser.controller';
import { CreateLinkedinUsersDto } from '@dtos/linkedinUsers.dto';

class LinkedinUsersRoute implements Routes {
  public path = '/linkedin_user';

  public router = Router();

  public postsController = new LinkedinUserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddleware,
      this.postsController.getLinkedinUser,
    );
    this.router.get(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      this.postsController.getLinkedinUserById,
    );
    this.router.post(
      `${this.path}`,
      authMiddleware,
      validationMiddleware(CreateLinkedinUsersDto, 'body'),
      this.postsController.createLinkedinUser,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      validationMiddleware(CreateLinkedinUsersDto, 'body'),
      this.postsController.updateLinkedinUser,
    );
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      authMiddleware,
      this.postsController.deleteLinkedinUser,
    );
  }
}

export default LinkedinUsersRoute;
