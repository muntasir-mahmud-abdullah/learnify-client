import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import LanguageDetails from "../Pages/LanguageDetails/LanguageDetails";
import TutorDetails from "../Pages/TutorDetails/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import AddTutorial from "../Pages/AddTutorial/AddTutorial";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import UpdateTutorials from "../Pages/MyTutorials/UpdateTutorials";
import BestTutors from "../Pages/Tutors/BestTutors";
import FindTutors from "../Pages/FindTutors/FindTutors";
import MyBookedTutors from "../Pages/MyBookedTutors/MyBookedTutors";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "languages/:id",
      //   element: <LanguageDetails></LanguageDetails>,
      //   loader: ({ params }) =>
      //     fetch(`https://learnify-server-blush.vercel.app/languages/${params.id}`),
      // },
      {
        path: "tutorials/:id",
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learnify-server-blush.vercel.app/tutorials/${params.id}`
          ),
      },
      {
        path: "findTutors",
        element: <BestTutors></BestTutors>,
      },
      {
        path: "find-tutors/:category",
        element: (
          <PrivateRoute>
            {" "}
            <FindTutors></FindTutors>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "addTutorial",
        element: (
          <PrivateRoute>
            {" "}
            <AddTutorial></AddTutorial>
          </PrivateRoute>
        ),
      },
      {
        path: "updateTutorial/:id",
        element: (
          <PrivateRoute>
            <UpdateTutorials></UpdateTutorials>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learnify-server-blush.vercel.app/tutorials/${params.id}`
          ),
      },
      {
        path: "myTutorial",
        element: (
          <PrivateRoute>
            {" "}
            <MyTutorials></MyTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "myBookedTutors",
        element: (
          <PrivateRoute>
            {" "}
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoute>
        ),
      },

      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
