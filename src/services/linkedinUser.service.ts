import { LinkedinUser, PrismaClient } from '@prisma/client';
import createError from 'http-errors';
import { isEmpty } from '@utils/util';
import { CreateLinkedinUsersDto } from '@dtos/linkedinUsers.dto';

class LinkedinUserService {
  public users = new PrismaClient().linkedinUser;

  public async findAllUsers(): Promise<LinkedinUser[]> {
    return this.users.findMany();
  }

  public async findUserById(userId: number): Promise<LinkedinUser> {
    if (isEmpty(userId)) throw new createError.BadRequest('UserId is empty');

    const findUser = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new createError.NotFound("User doesn't exist");

    return findUser;
  }

  public async createUser(
    userData: CreateLinkedinUsersDto,
  ): Promise<LinkedinUser> {
    if (isEmpty(userData))
      throw new createError.BadRequest('userData is empty');

    const findUser = await this.users.findUnique({
      where: { URL: userData.URL },
    });
    if (findUser)
      throw new createError.Conflict(
        `This user ${userData.URL} already exists`,
      );

    return this.users.create({
      data: { ...userData },
    });
  }

  public async updateUser(
    userId: number,
    userData: CreateLinkedinUsersDto,
  ): Promise<LinkedinUser> {
    if (isEmpty(userData))
      throw new createError.BadRequest('userData is empty');

    const findUser = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new createError.NotFound("User doesn't exist");

    return this.users.update({
      where: { id: userId },
      data: { ...userData },
    });
  }

  public async deleteUser(userId: number): Promise<LinkedinUser> {
    if (isEmpty(userId)) throw new createError.BadRequest('UserId is empty');

    const findUser = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new createError.NotFound("User doesn't exist");

    return this.users.delete({
      where: { id: userId },
    });
  }
}

export default LinkedinUserService;
