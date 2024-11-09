import ReactOnRails from 'react-on-rails';

import CatMotivation from '../bundles/CatMotivation/components/CatMotivationServer';
import Cat from "../bundles/CatMotivation/components/Cat";
import Home from "../bundles/CatMotivation/components/Home";
import SignUp from "../bundles/CatMotivation/components/SignUp";
import NameForm from "../bundles/CatMotivation/components/NameForm";

// This is how react_on_rails can see the SignUp in the browser.
ReactOnRails.register({
  CatMotivation,
  SignUp,
  Home,
  Cat,
  NameForm
});
