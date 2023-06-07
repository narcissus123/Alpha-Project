import { Config } from "./Config";
import { Home } from "../screens/home/Home";
import { Courses } from "../screens/courses/Courses";
import { CourseInfo } from "../screens/courseInfo/CourseInfo";
import { Instructors } from "../screens/instructors/Instructors";
import { News } from "../screens/news/News";
import { NewsInfo } from "../screens/newsInfo/NewsInfo";
import { ShoppingCart } from "../screens/shoppingCart/ShoppingCart";
import { AboutUs } from "../screens/aboutUs/AboutUs";
import { Authentication } from "../screens/authentication/Authentication";
import { PageNotFound } from "../screens/pageNotFound/PageNotFound";
import { UserPanel } from "../screens/panel/UserPanel";
import { Logout } from "../screens/logout/Logout";
import { Admin } from "../screens/admin/Admin";
import { AdminLogout } from "../screens/adminLogout/AdminLogout";

export const publicRoutes = [
  {
    path: Config.ROUTES.homePage,
    element: <Home />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.landingPage,
    element: <Home />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.coursesPage,
    element: <Courses />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.courseInfoPage,
    element: <CourseInfo />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.instructorsPage,
    element: <Instructors />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.newsPage,
    element: <News />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.newsInfoPage,
    element: <NewsInfo />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.shoppingCartPage,
    element: <ShoppingCart />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.aboutUsPage,
    element: <AboutUs />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.adminAccess,
    element: <Admin />,
    exact: true,
    footer: false,
  },
  {
    path: Config.ROUTES.adminLogoutPage,
    element: <AdminLogout />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.registerationPage,
    element: <Authentication />,
    exact: true,
    footer: false,
  },
  {
    path: Config.ROUTES.pageNotFound,
    element: <PageNotFound />,
    exact: true,
    footer: true,
  },
];
// adminSigninPage: "/adminSignin",
// adminSignoutPage: "/adminSignout",

// {
//   path: Config.ROUTES.adminAccess,
//   element: <Admin />,
//   exact: true,
//   footer: true,
// },

export const privateRoutes = [
  {
    path: Config.ROUTES.homePage,
    element: <Home />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.landingPage,
    element: <Home />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.coursesPage,
    element: <Courses />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.courseInfoPage,
    element: <CourseInfo />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.instructorsPage,
    element: <Instructors />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.newsPage,
    element: <News />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.newsInfoPage,
    element: <NewsInfo />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.shoppingCartPage,
    element: <ShoppingCart />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.aboutUsPage,
    element: <AboutUs />,
    exact: false,
    footer: true,
  },
  {
    path: Config.ROUTES.userProfilePage,
    element: <UserPanel />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.adminAccess,
    element: <Admin />,
    exact: true,
    footer: false,
  },
  {
    path: Config.ROUTES.adminLogoutPage,
    element: <AdminLogout />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.logOutPage,
    element: <Logout />,
    exact: true,
    footer: true,
  },
  {
    path: Config.ROUTES.pageNotFound,
    element: <PageNotFound />,
    exact: true,
    footer: true,
  },
];
