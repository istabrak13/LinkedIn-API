import { NextFunction, Request, Response } from 'express';
import LinkedinUserService from '@services/linkedinUser.service';
import { CreateLinkedinUsersDto } from '@dtos/linkedinUsers.dto';

class LinkedinUserController {
  linkedinUserService = new LinkedinUserService();

  public getLinkedinUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const findAllLinkedinUserData =
        await this.linkedinUserService.findAllUsers();

      res
        .status(200)
        .json({ data: findAllLinkedinUserData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getLinkedinUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const linkedinUserId = Number(req.params.id);
      const findOneLinkedinUserData =
        await this.linkedinUserService.findUserById(linkedinUserId);

      res
        .status(200)
        .json({ data: findOneLinkedinUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createLinkedinUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const linkedinUserData: CreateLinkedinUsersDto = req.body;
      const createLinkedinUserData = await this.linkedinUserService.createUser(
        linkedinUserData,
      );

      res
        .status(201)
        .json({ data: createLinkedinUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateLinkedinUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const linkedinUserId = Number(req.params.id);
      const linkedinUserData: CreateLinkedinUsersDto = req.body;
      const updateLinkedinUserData = await this.linkedinUserService.updateUser(
        linkedinUserId,
        linkedinUserData,
      );

      res
        .status(200)
        .json({ data: updateLinkedinUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteLinkedinUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const linkedinUserId = Number(req.params.id);
      const deleteLinkedinUserData = await this.linkedinUserService.deleteUser(
        linkedinUserId,
      );

      res
        .status(200)
        .json({ data: deleteLinkedinUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default LinkedinUserController;
