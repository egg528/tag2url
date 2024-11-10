import ReactOnRails from 'react-on-rails';

import CatMotivationServer from '../bundles/CatMotivation/components/CatMotivationServer';
import Cat from "../bundles/CatMotivation/components/Cat";
import Home from "../bundles/CatMotivation/components/Home";
import SignUp from "../bundles/CatMotivation/components/SignUp";
import NameForm from "../bundles/CatMotivation/components/NameForm";
import Select from "../bundles/CatMotivation/components/Select";
import CatMotivationApp from "../bundles/CatMotivation/components/CatMotivationApp";
import Motivation from "../bundles/CatMotivation/components/Motivation";

// This is how react_on_rails can see the SignUp in the browser.
ReactOnRails.register({
  CatMotivationServer,
  CatMotivationApp,
  SignUp,
  Home,
  Cat,
  NameForm,
  Select,
  Motivation
});
