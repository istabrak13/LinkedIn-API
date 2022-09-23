import { IsUrl } from 'class-validator';

export class CreatePostsDto {
  @IsUrl()
  URL: string;
}
