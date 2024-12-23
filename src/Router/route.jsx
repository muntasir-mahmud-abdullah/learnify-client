import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import LanguageDetails from "../Pages/LanguageDetails/LanguageDetails";
import TutorDetails from "../Pages/TutorDetails/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import BookedTutors from "../Pages/BookedTutors/BookedTutors";
import MyTutors from "../Pages/MyTutors/MyTutors";
import AddTutorial from "../Pages/AddTutorial/AddTutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "languages/:id",
        element: <LanguageDetails></LanguageDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/languages/${params.id}`),
      },
      {
        path: "tutors/:id",
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tutors/${params.id}`),
      },
      // {
      //   path: "/tutors/:id",
      //   element: (
      //     <PrivateRoute>
      //       <BookedTutors></BookedTutors>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/tutors/${params.id}`),
      // },
      {
        path: "bookedTutors/:id",
        element: (
          <PrivateRoute>
            <BookedTutors></BookedTutors>
          </PrivateRoute>
        ),
      },
      {
        path:'myTutors',
        element:<PrivateRoute> <MyTutors></MyTutors></PrivateRoute>
      },
      {
        path:'addTutorial',
        element:<PrivateRoute> <AddTutorial></AddTutorial></PrivateRoute>
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
