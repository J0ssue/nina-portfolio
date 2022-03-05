import { routes } from "../../../routes";

export const renderNavigationLinks = (navigateTo, setAction, actionValue) =>
  routes.map((route, i) => (
    <li
      onClick={() => {
        navigateTo(route.path);
        if (setAction) {
          setAction(actionValue);
        }
      }}
      key={i}
    >
      {route.name}
    </li>
  ));
