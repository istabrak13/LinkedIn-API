import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import PostsRoute from '@routes/posts.route';
import LinkedinUsersRoute from '@routes/linkedinUser.route';
import CommentsRoute from '@routes/comments.route';
import App from '@/app';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new PostsRoute(),
  new LinkedinUsersRoute(),
  new CommentsRoute(),
]);

app.listen();
