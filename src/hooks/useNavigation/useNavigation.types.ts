/**
 * Defines the paths
 */
export enum Paths {
  /**
   * Public routes
   */
  Public = "/",
  Login = "/login",
  Register = "/register",
  Campground = "/campground/:id",
  Campgrounds = "/campgrounds",

  /**
   * Private routes
   */
  Main = "/main",
  UserAccount = "/main/myaccount",
  EditUserAccount = "/main/myaccount/edit",
  UserCampgrounds = "/main/mycampgrounds",
  UserCampgroundEdit = "/main/campground/:id/edit",
  UserReviews = "/main/myreviews",
}
