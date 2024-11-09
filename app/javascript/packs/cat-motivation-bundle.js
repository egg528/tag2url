import ReactOnRails from 'react-on-rails';

import SignUp from '../bundles/CatMotivation/components/SignUp';
import Cat from "../bundles/CatMotivation/components/Cat";
import Home from "../bundles/CatMotivation/components/Home";
import NameForm from "../bundles/CatMotivation/components/NameForm";

// This is how react_on_rails can see the SignUp in the browser.
ReactOnRails.register({
  SignUp,
  Cat,
  Home,
  NameForm
});
