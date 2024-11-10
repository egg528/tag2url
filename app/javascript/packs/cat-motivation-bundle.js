import ReactOnRails from 'react-on-rails';

import SignUp from '../bundles/CatMotivation/components/SignUp';
import Cat from "../bundles/CatMotivation/components/Cat";
import Home from "../bundles/CatMotivation/components/Home";
import NameForm from "../bundles/CatMotivation/components/NameForm";
import Select from "../bundles/CatMotivation/components/Select";
import CatMotivationApp from "../bundles/CatMotivation/components/CatMotivationApp";
import Motivation from "../bundles/CatMotivation/components/Motivation";

// This is how react_on_rails can see the SignUp in the browser.
ReactOnRails.register({
  CatMotivationApp,
  SignUp,
  Cat,
  Home,
  NameForm,
  Select,
  Motivation
});
