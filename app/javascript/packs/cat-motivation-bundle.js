import ReactOnRails from 'react-on-rails';

import SignUp from '../bundles/CatMotivation/components/SignUp';
import Home from "../bundles/CatMotivation/components/Home";

// This is how react_on_rails can see the SignUp in the browser.
ReactOnRails.register({
  SignUp: SignUp,
  Home: Home
});
